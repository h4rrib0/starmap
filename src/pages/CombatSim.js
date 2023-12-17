import React, { useState, useRef, useEffect } from 'react';
import { SVG, Polygon } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.panzoom.js'
import ActionToolbar from '../components/ActionToolbar';
import MapController from '../components/MapController';
import Map from '../components/Map';


const CombatSim = () => {
  return (
    <>
      <Map />
    </>
  )

}

export default CombatSim;


