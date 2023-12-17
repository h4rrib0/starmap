import React from 'react';

const ActionToolbar = ({ onAddUnit, onAdvance, unitTypes, onUnitTypeChange, teams, onTeamChange }) => {
  return (
    <div>
      <button onClick={onAddUnit}>Add Unit</button>
      <UnitTypeDropdown unitTypes={unitTypes} onUnitTypeChange={onUnitTypeChange} />
      <TeamDropdown teams={teams} onTeamChange={onTeamChange} />
      <button onClick={onAdvance}>Advance</button>
    </div>
  );
}


const UnitTypeDropdown = ({ unitTypes, onUnitTypeChange }) => {
  return (
    <select onChange={onUnitTypeChange}>
      {unitTypes.map((unitType) => (
        <option key={unitType.id} value={unitType.id}>
          {unitType.name}
        </option>
      ))}
    </select>
  );
};


const TeamDropdown = ({ teams, onTeamChange }) => {
  return (
    <select onChange={onTeamChange}>
      {teams.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  );
};

export default ActionToolbar;
