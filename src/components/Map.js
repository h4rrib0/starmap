// Map.js
import React, { useEffect, useRef, useState } from 'react';
import { SVG, Polygon } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.panzoom.js'
import ActionToolbar from '../components/ActionToolbar';
import SpaceController from '../components/SpaceController';

const Map = () => {
  const containerRef = useRef(null);
  const [controller] = useState(() => new SpaceController());

  useEffect(() => {
    const draw = SVG()
      .addTo(containerRef.current)
      .size("100%", "100%")
      .viewbox(0, 0, 1000, 500)
      .panZoom({ zoomFactor: 0.1 })
      .attr("preserveAspectRatio", "xMinYMin meet");

    controller.drawHexGrid(draw, 30, 1000, 1000);
  }, [controller]);

  return (
    <>
      <ActionToolbar onAddUnit={controller.addUnit} onAdvance={controller.advanceUnits} unitTypes={controller.unitTypes} onUnitTypeChange={controller.onUnitTypeChange} teams={controller.teams} onTeamChange={controller.onTeamChange} />
      <div style={{ height: "calc(100vh - 100px)", backgroundColor: "black" }}>
        <div
          ref={containerRef}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        />
      </div>
    </>
  );
};

export default Map;
