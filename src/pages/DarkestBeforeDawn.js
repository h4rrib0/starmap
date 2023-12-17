import React, { useRef, useEffect } from 'react';
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.panzoom.js'
import DBDMap from '../starmaps/darkest.js'
import VoronoiCells from '../components/VoronoiCells.js';

const edit = true;

const Graph = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const draw = SVG()
      .addTo(containerRef.current)
      .size("100%", "100%")
      .viewbox(0, 0, 500, 500)
      .panZoom({ zoomFactor: 0.1 })
      .attr("preserveAspectRatio", "xMinYMin meet");

    const map = new DBDMap(draw);
    const nodes = map.nodes;
    const edges = map.edges;
    const embellishments = map.embellishments;
    
    for (const edge of edges) {
      const node1 = nodes.find((node) => node.id === edge.source);
      const node2 = nodes.find((node) => node.id === edge.target);
      const x1 = node1.x;
      const y1 = node1.y;
      const x2 = node2.x;
      const y2 = node2.y;
      const label = edge.label;
    
      if (edge.type === 'jumplane') {
        const line = draw.line(x1, y1, x2, y2).stroke({ color: 'rgba(255,255,255,0.3)', width: 2, linecap: 'round' })
        line.start = node1.id;
        line.end = node2.id;
      } else if (edge.type === 'hyperlane'){
        draw.line(x1, y1, x2, y2).stroke({ color: 'teal', width: 2, linecap: 'round' });
        draw.text(label).move((x1 + x2) / 2, (y1 + y2) / 2).fill('white');
      }
    }

    for (const node of nodes) {
      if (node.nodeType.includes('system')) {
        const circle = drawNode(node, draw, edges, nodes);
      }
    }

    //check affiliation is non-empty and fill with "unaffiliated" if it is

    for (const embellishment of embellishments) {
      if (embellishment.type === 'regionLabel') {
        const { x, y, text, fontSize, color } = embellishment;
        //low opacity to make it easier to read
        const label = draw.text(text).move(x, y).fill(color).font({ size: fontSize, opacity: 0.3 });
        //make unselectable
        label.attr('unselectable', 'on');
        label.back();
      }
    }

    //add voronoi cells
    const voronoi = VoronoiCells({ data: nodes, affilToFill: map.affilToFill, draw: draw});

    //add directional captions to top, left, right, bottom of screen: spinward, trailing, coreward, rimward
    const container = containerRef.current;
    if (true) {
      const captionOffset = 50;
      const captionFontSize = 30;
      const captionColor = 'white';
      const captionOpacity = 0.3;
      const captionSpinward = container.appendChild(document.createElement('div'));
      const captionTrailing = container.appendChild(document.createElement('div'));
      const captionCoreward = container.appendChild(document.createElement('div'));
      const captionRimward = container.appendChild(document.createElement('div'));
      
      //spinward: right
      captionSpinward.style.position = 'absolute';
      captionSpinward.style.top = `50%`;
      captionSpinward.style.right = `${captionOffset}px`;
      captionSpinward.style.fontSize = `${captionFontSize}px`;
      captionSpinward.style.color = captionColor;
      captionSpinward.style.opacity = captionOpacity;
      captionSpinward.innerHTML = 'Spinward';

      //trailing: left
      captionTrailing.style.position = 'absolute';
      captionTrailing.style.top = `50%`;
      captionTrailing.style.left = `${captionOffset}px`;
      captionTrailing.style.fontSize = `${captionFontSize}px`;
      captionTrailing.style.color = captionColor;
      captionTrailing.style.opacity = captionOpacity;
      captionTrailing.innerHTML = 'Trailing';

      //coreward: top

      const width = container.getBoundingClientRect().width;

      captionCoreward.style.position = 'absolute';
      captionCoreward.style.top = `${captionOffset}px`;
      captionCoreward.style.left = `45%`;
      captionCoreward.style.fontSize = `${captionFontSize}px`;
      captionCoreward.style.color = captionColor;
      captionCoreward.style.opacity = captionOpacity;
      captionCoreward.innerHTML = 'Coreward';

      //rimward: bottom
      captionRimward.style.position = 'absolute';
      captionRimward.style.bottom = `${captionOffset}px`;
      captionRimward.style.left = `45%`;
      captionRimward.style.fontSize = `${captionFontSize}px`;
      captionRimward.style.color = captionColor;
      captionRimward.style.opacity = captionOpacity;
      captionRimward.innerHTML = 'Rimward';
    }



    //scroll to mean of all nodes
    const meanX = nodes.reduce((acc, node) => acc + node.x, 0) / nodes.length;
    const meanY = nodes.reduce((acc, node) => acc + node.y, 0) / nodes.length;
    draw.viewbox(meanX-500, meanY-500, 1000, 500);

  }, []);

  return (
    <div style={{ height: "calc(100vh)", backgroundColor: "black" }}>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
    </div>
  );
};

export default Graph;
function drawNode(node, draw, edges, nodes) {
  const { x, y, id, nodeType } = node;

  var radius = 7;
  var color = 'yellow';

  if (nodeType.includes('major')) {
    color = 'orange';
    radius = 10;
  }

    if (nodeType.includes('minor')) {
        radius = 5;
        color = 'rgba(200,200,200,1)';
    }

  const offset = 5
  const rh = radius / 2;

  const circle = draw.circle(radius).fill(color).stroke({ color: color, width: 2, linecap: 'round' });

  if (!nodeType.includes('minor')) {
    const text = draw.text(id).fill('white').font({ size: radius });
    text.move(x + rh + offset, y - rh);
  }
  circle.move(x - rh, y - rh);
  

  circle.id = id;

  circle.selected = false;

  circle.click(() => {
    circle.selected = true;
    const mode = 'paint'

    if (mode === 'link')
    {
      for (const otherNode of draw.children()) {
        if (otherNode === circle) {
          continue;
        }

        const existsEdge = edges.find((edge) => edge.source === id && edge.target === otherNode.id) || edges.find((edge) => edge.source === otherNode.id && edge.target === id);

        if (otherNode.selected && !existsEdge) {
          // draw line between them if not already drawn
          edges.push({ source: id, target: otherNode.id, type: 'jumplane' });
          const nodex = circle.cx();
          const nodey = circle.cy();
          const othernodex = otherNode.cx();
          const othernodey = otherNode.cy();

          const line = draw.line(nodex, nodey, othernodex, othernodey).stroke({ color: 'white', width: 2, linecap: 'round' });

          //set z-index
          line.back();

          otherNode.selected = false;
          circle.selected = false;
        } else if (otherNode.selected && existsEdge) {
          // remove line between them if already drawn
          edges.splice(edges.indexOf(existsEdge), 1);
          
          var line = null;
          for (const child of draw.children()) {
            if (child.start === id && child.end === otherNode.id) {
              line = child;
            }
            if (child.start === otherNode.id && child.end === id) {
              line = child;
            }
          }

          if (line) {
            line.remove();
          }

          otherNode.selected = false;
          circle.selected = false;
        }
      }
    }
    if (mode === 'paint') {
      //set affil to solfed in nodes array
      const index = nodes.findIndex((node) => node.id === id);
      nodes[index].affiliation = 'bree';
      console.log(nodes)

    }

  //send voronoi cells to back
  for (const child of draw.children()) {
    if (child.type === 'path') { 
      child.back();
    }
  }

  });

  return circle;
}

