import {MapController, Unit} from "./MapController";


const MANEUVER = 'maneuverPhase';
const BATTLE = 'battlePhase';

class SpaceController extends MapController {
    constructor() {
        super();

        
        this.globalStatus = MANEUVER;

        this.unitTypes = [
            {id: 1, name: 'Escort'},
            {id: 2, name: 'Torpedo Boat'},
            {id: 3, name: 'Carrier'}
        ];

        this.selectedUnitType = this.unitTypes[0];
        this.teams = [
            {id: 1, name: 'Red'},
            {id: 2, name: 'Blue'},
            {id: 3, name: 'Green'}
        ];
        this.selectedTeam = this.teams[0];

        this.advanceManeuver = this.advanceManeuver.bind(this);
        this.advanceBattle = this.advanceBattle.bind(this);
        this.advanceUnits = this.advanceUnits.bind(this);
        this.handleHexagonClick = this.handleHexagonClick.bind(this);
        this.addUnit = this.addUnit.bind(this);
    }

    advanceManeuver() {
        //check that no two units are trying to move to the same hexagon
        const hexagons = {};
        for (const unit of this.units) {
            if (unit.order === 'movement') {
                if (hexagons[`${unit.targets[0].row},${unit.targets[0].col}`]) {
                    //reject phase resolution and return. Show error message
                    alert('Two units are trying to move to the same hexagon. Please try again.');
                    return;
                }
                hexagons[`${unit.targets[0].row},${unit.targets[0].col}`] = true;
            } else {
                //no movement order means unit is staying in place, so add to hexagons
                hexagons[`${unit.x},${unit.y}`] = true;
            }
        }

        for (const unit of this.units) {
            unit.onManeuverPhaseStart();
        }
        this.deathCheck();

        //advance units to movement order hexagon
        for (const unit of this.units) {
            if (unit.order === 'movement') {
                //move unit to movement order hexagon and draw
                const prevhex = this.hexagons[`${unit.x},${unit.y}`];
                prevhex.unit = null;
                unit.targets[0].unit = unit;
                unit.x = unit.targets[0].row;
                unit.y = unit.targets[0].col;
                unit.targets = [];
                unit.draw();
            }
        }

        //call onManeuverPhaseEnd for each unit
        for (const unit of this.units) {
            unit.onManeuverPhaseEnd();
        }

        //wipe all orders
        for (const unit of this.units) {
            unit.order = 'none';
            unit.targets = [];
            unit.draw();
        }
        //perform death checks
        this.deathCheck();



        alert('Maneuver phase complete. Press OK to advance to battle phase.')
        this.globalStatus = BATTLE;
    }

    
    advanceBattle() {
        for (const unit of this.units) {
            if (unit.order === 'attack') {
                //get target
                const target = unit.targets[0].unit;
                //attack target
                unit.attackUnit(target);
                //done
                unit.order = 'none';
                unit.targets = [];
                unit.draw(this);
            }
        }
        this.deathCheck();
        
        alert('Battle phase complete. Press OK to advance to maneuver phase.')
        this.globalStatus = MANEUVER;
    }

    deathCheck() {
        //death checks
        let unitsToRemove = [];
        for (const unit of this.units) {
            if (unit.hp <= 0) {
                // mark unit for removal
                unitsToRemove.push(unit);
                
                // remove unit from hexagon
                const hex = this.hexagons[`${unit.x},${unit.y}`];
                hex.unit = null;
                
                // remove unit graphics
                unit.erase();
            }
        }

        // remove all marked units from units
        for (const unit of unitsToRemove) {
            const unitIndex = this.units.indexOf(unit);
            if (unitIndex > -1) {
                this.units.splice(unitIndex, 1);
            }
        }

    }
    
    advanceUnits() {
        this.deselectHexagon();

        if (this.globalStatus === MANEUVER) {
            this.advanceManeuver();
        }
        else if (this.globalStatus === BATTLE) {
            this.advanceBattle();
        }
    }

    
    handleHexagonClick(hexagon) {
        console.log(hexagon);
        //if selected is this hexagon, deselect it
        if (this.selected === hexagon) {
            if (this.selected.unit) {
                if (this.selected.unit.targets.length > 0) {
                    //deslect hexagon and return
                    this.deselectHexagon();
                    return;
                } else {
                    this.selected.unit.order = 'none';
                    this.selected.unit.draw(this);
                    this.deselectHexagon();
                    return;
                }
            }


            this.deselectHexagon();
            return;
        }

        /*
        * If we have a hex with a unit selected, we want to try and issue a move/attack order
        * Otherwise, we want to select the hexagon.
        * If the hexagon we are selecting has a unit, we want to shade nearby hexagons
        */
        if (this.selected && this.selected.unit) {
            if(this.selected.unit.order === 'movement') {
                //attempt to issue movement order
                //check if hexagon is within movement range
                const dist = distance(this.selected, hexagon);
                if (dist > this.selected.unit.mov) {
                    return;
                }
                //issue movement order
                this.selected.unit.targets = [hexagon];
                this.selected.unit.draw(this);
                this.deselectHexagon();
                return;
            } else if (this.selected.unit.order === 'attack') {
                //attempt to issue attack order
                //check if hexagon is within attack range
                const dist = distance(this.selected, hexagon);
                if (dist > this.selected.unit.rng) {
                    return;
                }

                //check if hexagon has units
                if (hexagon.unit === null || hexagon.unit.team === this.selected.unit.team) {
                    return;
                }
                //issue attack order
                this.selected.unit.targets = [hexagon];
                this.selected.unit.draw(this);
                this.deselectHexagon();
                return;
            } else {
                if(this.selected.unit.order === 'none') {
                    return;
                }

                //compare against targeting type
                if (this.selected.unit.targetingType === 'none') {
                    alert('This unit cannot be given targets with order: ' + this.selected.unit.order);
                    return;
                }
                if (this.selected.unit.targetingType === 'enemy') {
                    if (hexagon.unit === null || hexagon.unit.team === this.selected.unit.team) {
                        return;
                    }
                }
                if (this.selected.unit.targetingType === 'friendly') {
                    if (hexagon.unit === null || hexagon.unit.team !== this.selected.unit.team) {
                        return;
                    }
                }

                //check if already have target
                if (this.selected.unit.targets.length > 0) {
                    //check if target is already selected
                    var idx = this.selected.unit.targets.indexOf(hexagon);
                    if (idx > -1) {
                        //remove target
                        this.selected.unit.targets.splice(idx, 1);
                        this.selected.unit.draw(this);
                        return;
                    }
                }

                //check if we can add another target
                if (this.selected.unit.targets.length >= this.selected.unit.desiredTargets) {
                    return;
                }

                //add target
                this.selected.unit.targets.push(hexagon);
                this.selected.unit.draw(this);

                //if we have enough targets, deselect hexagon
                if (this.selected.unit.targets.length === this.selected.unit.desiredTargets) {
                    this.deselectHexagon();
                }
                return;

            }
        }

        if (hexagon.unit) {//if selected tile has units, shade tiles within movement range (mov) and attack range (rng)
            //select first unit
            const mov = hexagon.unit.mov;
            const rng = hexagon.unit.rng;

            //find all hexagons within mov and rng
            for (const hex of Object.values(this.hexagons)) {
                if (distance(hexagon, hex) <= mov) {
                    hexagon.neighbors.push(hex);
                    //shade hexagon light pale blue
                    hex.color = 'rgba(0,0,255,0.3)';
                }
                if (distance(hexagon, hex) <= rng) {
                    hexagon.neighbors.push(hex);
                    //red border
                    hex.border = 'red';
                }
                this.render(hex)
            }
        } else {
            //deselect hexagon
            this.deselectHexagon();
        }



        //translucent white
        hexagon.color = 'rgba(255,255,255,0.3)';
        hexagon.fill(hexagon.color).stroke({ width: 2, color: 'white' });
        this.selected = hexagon;

        //create dropdown menu for issuing orders
        //if we have a unit, create dropdown menu for issuing orders
        if (this.selected.unit) {
            //create small div fixed to top left of map
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '100px';
            div.style.left = '0';
            div.style.zIndex = '100';
            div.style.backgroundColor = 'white';
            div.style.padding = '5px';
            div.style.border = '1px solid black';
            div.style.borderRadius = '5px';
            div.style.pointerEvents = 'all';
            div.style.userSelect = 'none';
            
            //create dropdown menu
            const select = document.createElement('select');
            select.style.pointerEvents = 'all';
            select.style.userSelect = 'none';
            select.style.margin = '5px';
            select.style.padding = '5px';
            select.style.border = '1px solid black';
            div.appendChild(select);


            //create option for movement order
            if (this.globalStatus === MANEUVER) {
                const option2 = document.createElement('option');
                option2.value = 'movement';
                option2.text = 'Movement';
                option2.onSelect = () => {
                    this.selected.unit.order = 'movement';
                    this.selected.unit.targets = [];
                    this.selected.unit.draw();
                    this.selected.unit.desiredTargets = 1;
                    this.selected.unit.targetingType = 'all';
                }
                select.appendChild(option2);

                //add special moves
                if (this.selected.unit.specialMoves) {
                    for (const move of this.selected.unit.specialMoves) {
                        const option = document.createElement('option');
                        option.value = move.name;
                        option.text = move.name;
                        select.appendChild(option);

                        option.onSelect = () => {
                            move.onSelect(this.selected.unit);
                        }
                    }
                }

            }
            if (this.globalStatus === BATTLE) {
                const option3 = document.createElement('option');
                option3.value = 'attack';
                option3.text = 'Attack';
                select.appendChild(option3);

                option3.onSelect = () => {
                    this.selected.unit.order = 'attack';
                    this.selected.unit.targets = [];
                    this.selected.unit.draw();
                    this.selected.unit.desiredTargets = 1;
                    this.selected.unit.targetingType = 'enemy';
                }
            }

            //make dropdown reflect actual selected option
            select.value = this.selected.unit.order;
            if (this.selected.unit.order === 'none') {
                if (this.globalStatus === MANEUVER) {
                    select.value = 'movement';
                    //trigger onSelect function
                    const option = select.selectedOptions[0];
                    if (option.onSelect) {
                        option.onSelect();
                    }
                }
                if (this.globalStatus === BATTLE) {
                    select.value = 'attack';
                    //trigger onSelect function
                    const option = select.selectedOptions[0];
                    if (option.onSelect) {
                        option.onSelect();
                    }
                }
            }

            //add listener to select
            select.addEventListener('change', (event) => {
                //call onSelect function of selected option
                const option = event.target.selectedOptions[0];
                if (option.onSelect) {
                    option.onSelect();
                }
            })


            //append div to map
            this.orderDiv = div;
            document.body.appendChild(div);


        }
    }

        
    addUnit() {
        if(!this.selected) {
            return;
        }
        if(this.selected.unit){
            alert('Cannot add unit to hexagon with existing unit.');
            return;
        }

        var unit = null;
        const x = this.selected.row;
        const y = this.selected.col;
        if (this.selectedUnitType.name === 'Escort') {
            unit = new EscortUnit(this, 'Escort', x, y, this.selectedTeam.name);
        } else if (this.selectedUnitType.name === 'Torpedo Boat') {
            unit = new TorpedoBoatUnit(this, 'Torpedo Boat', x, y, this.selectedTeam.name);
        } else if (this.selectedUnitType.name === 'Carrier') {
            unit = new CarrierUnit(this, 'Carrier', x, y, this.selectedTeam.name);
        }
        this.units.push(unit);
        this.selected.unit = unit;
        unit.draw(this);

        this.deselectHexagon();
    }

}


class SpaceUnit extends Unit {
    constructor(controller, id, x, y, team, hp, def, eva, acc, atk, atks, rng, mov, mun) {
        super(controller, id, x, y, team);
        this.hp = hp;
        this.def = def;
        this.atk = atk;
        this.atks = atks;
        this.acc = acc;
        this.eva = eva;
        this.rng = rng;
        this.mov = mov;
        this.mun = mun;

        this.desiredTargets = 0;
        this.targetingType = null;

        this.specialOrders = []; //array of special orders
        this.statusEffects = []; //array of status effects

        this.graphics = [];

        this.order = 'none';

        this.targets = []; //array of targets
    }

    draw() {
        super.draw();
        const controller = this.controller;
        const hex = controller.hexagons[`${this.x},${this.y}`];
        const draw = controller.draw;
        
        if (this.targets.length > 0) {
            for (const target of this.targets) {
                //draw arrow from hex to movement order hex
                const arrow = draw.line(hex.cx(), hex.cy(), target.cx(), target.cy(), 10).stroke({ width: 2, color: 'white' });
                //draw arrowhead
                const arrowhead = draw.polygon('0,0 10,5 0,10').fill('white').stroke({ width: 2, color: 'white' });
                arrowhead.move(target.cx(), target.cy());
                //recenter arrow by -5, -5
                arrowhead.move(arrowhead.x() - 5, arrowhead.y() - 5);

                //orient arrowhead
                const dx = target.cx() - hex.cx();
                const dy = target.cy() - hex.cy();
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                arrowhead.rotate(angle);

                //make unselectable
                arrow.attr('unselectable', 'on');
                arrow.front();
                this.graphics.push(arrow);

                arrowhead.attr('unselectable', 'on');
                arrowhead.front();
                this.graphics.push(arrowhead);
            }
        }
    }

    onManeuverPhaseStart() {

    }

    onManeuverPhaseEnd() {
        //check status effects
    }

    onBattlePhaseEnd() {
        //reduce duration of status effects using .apply
        this.statusEffects.forEach((status) => { 
            status.duration--;
            if (status.duration <= 0) {
                status.onRemove(this);
            }
        }
        );
        //remove status effects with duration 0
        this.statusEffects = this.statusEffects.filter((status) => status.duration > 0);
        
    }

    attackUnit(target){                 
        //roll for hit. Attacker rolls two die with number of sides equal to acc.
        //If the sum meets or exceeds the attacker's evasion, the attack hits.
        const acc = this.acc;
        const eva = target.eva;

        const effectiveDmg = this.atk - target.def;
        const dmg = effectiveDmg > 0 ? effectiveDmg : 0;

        //for number of attacks, roll for hit and damage
        for (let i = 0; i < this.atks; i++) {
            const roll1 = Math.floor(Math.random() * acc) + 1;
            const roll2 = Math.floor(Math.random() * acc) + 1;
            const sum = roll1 + roll2;
            console.log(`roll1: ${roll1}, roll2: ${roll2}, sum: ${sum}, eva: ${eva}`)
            if (sum < eva) {
                //miss
                console.log('miss')
                continue;
            }
            //hit
            console.log('hit')
            target.hp -= dmg;
        }
    }
}


class EscortUnit extends SpaceUnit {
    constructor(controller, id, x, y, team) {
        super(controller, id, x, y, team, 20, 2, 6, 8, 10, 3, 2, 2, 6);
        this.specialMoves = [{
            name: 'Screening Strike',
            description: 'Stay stationary this maneuver phase and automatically attack any enemy unit that moves into range.',
            onSelect: (unit) => {
                this.targets = [];
                this.order = 'screeningStrike';
                unit.draw();
                unit.desiredTargets = 0;
                unit.targetingType = 'none';
                this.controller.deselectHexagon();
            }
        }]
    }

    draw () {
        super.draw();
        //if screening strike order, draw large red hexagon around unit indicating screening strike
        if (this.order === 'screeningStrike') {
            //draw large hexagon around unit
            const hex = this.controller.hexagons[`${this.x},${this.y}`];
            const draw = this.controller.draw;
            const radius = 60;
            const pts = [];
            for (let i = 0; i < 6; i++) {
                const angleDeg = 60 * i - 30;
                const angleRad = Math.PI / 180 * angleDeg;
                pts.push([hex.cx() + radius * Math.cos(angleRad), hex.cy() + radius * Math.sin(angleRad)]);
            }
            const hexagon = draw.polygon(pts).fill('none').stroke({ width: 2, color: 'red' });
            //adjust for small hex size
                    hexagon.move(hex.cx() - radius + 7.5, hex.cy() - radius);

            hexagon.attr('unselectable', 'on');
            hexagon.attr('pointer-events', 'none');
            hexagon.front();
            this.graphics.push(hexagon);
        }
    }

    onManeuverPhaseEnd() {
        super.onManeuverPhaseEnd();
        if (this.order === 'screeningStrike') {
            //attack any enemy unit that moves into range
            const hex = this.controller.hexagons[`${this.x},${this.y}`];
            //calculate all hexagons within rng
            const rng = this.rng;
            var neighbors = [];
            //find all hexagons within rng
            for (const other of Object.values(this.controller.hexagons)) {
                if (distance(hex, other) <= rng) {
                    neighbors.push(other);
                }
            }
            console.log(neighbors);
            //for each hexagon, check if it has units
            for (const hex of neighbors) {
                if (hex.unit && hex.unit.team !== this.team) {
                    this.attackUnit(hex.unit);
                }
            }

        }
    }
}

class TorpedoBoatUnit extends SpaceUnit {
    constructor(controller, id, x, y, team) {
        super(controller, id, x, y, team, 20, 2, 6, 8, 10, 3, 2, 2, 6);
        this.specialMoves = [{
            name: 'Screening Strike',
            description: 'Stay stationary this maneuver phase and automatically attack any enemy unit that moves into range.'
        }]
    }
}

class CarrierUnit extends SpaceUnit {
    constructor(controller, id, x, y, team) {
        super(controller, id, x, y, team, 60, 3, 2, 8, 7, 5, 4, 2, 6);
        this.specialMoves = [{
            name: 'Recon Flight',
            description: 'Inflict -X evasion for two turns on two enemy units within range.',
            onSelect: (unit) => {
                unit.targets = [];
                unit.desiredTargets = 2;
                unit.targetingType = 'enemy';
                unit.order = 'reconFlight';
                unit.draw();
            }
        }]
    }

    onManeuverPhaseStart() {
        super.onManeuverPhaseStart();
        //check for recon flight order
        if (this.order === 'reconFlight') {
            //check for targets
            if (this.targets.length < 2) {
                return;
            }
            //apply status effect to targets
            for (const target of this.targets) {
                //if target already has status effect, reset duration
                for (const status of target.unit.statusEffects) {
                    if (status.name === 'Visible') {
                        status.duration = 2;
                        return;
                    }
                }
                target.unit.statusEffects.push(new Visible(2));
            }
        }
    }
}

class StatusEffect {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
    }
}

class Visible extends StatusEffect {
    constructor(duration) {
        super('Visible', duration);
    }

    onApply(unit) {
        unit.eva -= 2;
    }

    onRemove(unit) {
        unit.eva += 2;
    }
}

export default SpaceController;

const offsetToCube = (col, row) => {
    const x = col - (row - (row & 1)) / 2;
    const z = row;
    const y = -x - z;
    return { x, y, z };
}

const cubeDistance = (hex1, hex2) => {
    return Math.max(Math.abs(hex1.x - hex2.x), Math.abs(hex1.y - hex2.y), Math.abs(hex1.z - hex2.z));
}

const distance = (hex1, hex2) => {
    const cube1 = offsetToCube(hex1.col, hex1.row);
    const cube2 = offsetToCube(hex2.col, hex2.row);
    return cubeDistance(cube1, cube2);
}