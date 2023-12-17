import React from "react";
import { Delaunay } from "d3-delaunay";

const VoronoiCells = ({ data, affilToFill, draw }) => {

    const delaunay = Delaunay.from(
        data.map(d => [d.x, d.y])
    );

    const left = data.map(d => d.x).reduce((a, b) => Math.min(a, b));
    const right = data.map(d => d.x).reduce((a, b) => Math.max(a, b));
    const top = data.map(d => d.y).reduce((a, b) => Math.min(a, b));
    const bottom = data.map(d => d.y).reduce((a, b) => Math.max(a, b));

    const PAD = 50

    const voronoi = delaunay.voronoi([
        left - PAD,
        top - PAD,
        right + PAD,
        bottom + PAD
    ]);



    data.forEach((d, i) => {
        const path = voronoi.renderCell(i);
        const fill = affilToFill[d.affiliation];
        //unselectable
        draw.path(path).attr('unselectable', 'on').back().fill(fill);
    })
    
};

export default VoronoiCells;