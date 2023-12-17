// MapController.js

export class MapController {
    constructor() {
        this.hexagons = {};
        this.selected = null;
        this.units = [];
        this.draw = null;

        this.orderDiv = null;

        //bind methods
        this.drawHexGrid = this.drawHexGrid.bind(this);
        this.onUnitTypeChange = this.onUnitTypeChange.bind(this);
        this.deselectHexagon = this.deselectHexagon.bind(this);
        this.render = this.render.bind(this);
        this.onTeamChange = this.onTeamChange.bind(this);
    }

    // Your methods (function logic from the Map component)
    drawHexGrid(draw, radius, width, height) {
        const sqrt3 = Math.sqrt(3);
        const horizDist = 2 * radius;
        const vertDist = sqrt3 * radius;
        const rows = Math.ceil(height / vertDist) + 1;
        const cols = Math.ceil(width / horizDist) + 1;

        this.draw = draw;


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Calculate the center of the hexagon
                const cx = c * horizDist + (r % 2) * radius;
                const cy = r * vertDist;

                // Create points for the hexagon
                const points = [];
                for (let i = 0; i < 6; i++) {
                    const angleDeg = 60 * i - 30;
                    const angleRad = Math.PI / 180 * angleDeg;
                    points.push([cx + radius * Math.cos(angleRad), cy + radius * Math.sin(angleRad)]);
                }

                const hexagon = draw.polygon(points).fill('none').stroke({ width: 1, color: '#ccc' });
                // store row/col in hexagon object
                hexagon.row = r;
                hexagon.col = c;
                hexagon.neighbors = [];
                this.hexagons[`${r},${c}`] = hexagon;
                //add label
                const label = draw.text(`${r},${c}`).move(cx, cy).fill('white').font({ size: 10 });
                //make unselectable and send to back
                label.attr('unselectable', 'on');
                label.back();

                //make interior of hexagon clickable instead of just the border
                hexagon.attr('pointer-events', 'all');
                hexagon.color = 'none';
                //stay in place and increase size on hover

                hexagon.tooltip = []

                hexagon.mouseover(() => {
                    hexagon.fill(hexagon.color).stroke({ width: 2, color: 'white' });
                    //display unit info in tooltip if hexagon has units on it
                    if (hexagon.unit) {

                        var toolText = `${hexagon.unit.id} HP: ${hexagon.unit.hp}`

                        //status effect text
                        if (hexagon.unit.statusEffects && hexagon.unit.statusEffects.length > 0){
                            toolText += " Status Effects: "
                            for (const statusEffect of hexagon.unit.statusEffects){
                                toolText += statusEffect.name + "(" + statusEffect.duration + ") "
                            }
                        }

                        var text = draw.text(toolText).move(cx, cy + 10).fill('black').font({ size: 10 })
                        //make unselectable
                        text.attr('unselectable', 'on');

                        //wrap text in white box
                        var box = draw.rect(text.bbox().width + 10, text.bbox().height + 10).fill('white').stroke({ width: 1, color: 'black' })
                        box.move(cx-5, cy+10)
                        //make unselectable
                        box.attr('unselectable', 'on');
                        box.front();
                        text.front();

                        hexagon.tooltip.push(box);
                        hexagon.tooltip.push(text);
                    }
                    
                }
                );
                hexagon.mouseout(() => {
                    this.render(hexagon);
                    //remove tooltip
                    for (const text of hexagon.tooltip) {
                        text.remove();
                    }
                    hexagon.tooltip = [];
                }
                );

                //select hexagon on click, and deselect already selected hexagon
                //selected hexagon should be filled in
                hexagon.click(() => { this.handleHexagonClick(hexagon) });
                hexagon.unit = null;
            }
        }
    }

    deselectHexagon() {
        //deselect hexagon
        if (!this.selected) {
            return;
        }
        this.selected.color = 'none';
        this.render(this.selected);
        //reset neighbors of previously selected hexagon
        for (const neighbor of this.selected.neighbors) {
            neighbor.color = 'none';
            neighbor.border = '#ccc';
            this.render(neighbor);
        }
        this.selected.neighbors = [];
        this.selected = null;
        if (this.orderDiv) {
            this.orderDiv.remove();
            this.orderDiv = null;
        }
    }


    onUnitTypeChange(event) {
        this.selectedUnitType = this.unitTypes.find((unitType) => unitType.id === parseInt(event.target.value));
    }

    onTeamChange(event) {
        this.selectedTeam = this.teams.find((team) => team.id === parseInt(event.target.value));
    }



    render(hexagon) {
        hexagon.fill(hexagon.color).stroke({ width: 1, color: hexagon.border});
    }


    // Additional methods for handling conflicts, etc.
    handleConflicts() { /* ... */ }
}

export class Unit {
    constructor(controller, id, x, y, team) {
        this.controller = controller;
        this.id = id;
        this.team = team;
        this.color = team;
        this.x = x;
        this.y = y;
    }

    erase() {
        //remove old graphics
        for (const graphic of this.graphics) {
            graphic.remove();
        }
    }

    draw() {
        const controller = this.controller;
        const hex = controller.hexagons[`${this.x},${this.y}`];
        const draw = controller.draw;
        for (const graphic of this.graphics) {
            graphic.remove();
        }

        const cx = hex.cx();
        const cy = hex.cy();
        const radius = 30;
        const circle = draw.circle(radius).fill(this.color).stroke({ width: 2, color: 'white' });
        circle.move(cx - radius / 2, cy - radius / 2);
        const text = draw.text(this.id).fill('white').font({ size: 8 });
        //center text in circle
        text.move(cx - text.bbox().width / 2, cy - text.bbox().height / 2);
        //make unselectable
        circle.attr('unselectable', 'on');
        text.attr('unselectable', 'on');

        //turn off pointer events for circle and text
        circle.attr('pointer-events', 'none');
        text.attr('pointer-events', 'none');
        circle.back();
        text.front();

        this.graphics.push(circle);
        this.graphics.push(text);
    }
}


