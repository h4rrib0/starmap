import React, { useRef, useEffect } from 'react';
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.panzoom.js'
import Hyades from '../starmaps/hyades.js'

const edit = true;

const Graph = () => {
  const map = new Hyades();
  const nodes = map.nodes;
  const edges = map.edges;
  const embellishments = map.embellishments;

  const containerRef = useRef(null);
  useEffect(() => {
    const draw = SVG()
      .addTo(containerRef.current)
      .size("100%", "100%")
      .viewbox(0, 0, 1000, 500)
      .panZoom({ zoomFactor: 0.1 })
      .attr("preserveAspectRatio", "xMinYMin meet");

    
    for (const edge of edges) {
      const node1 = nodes.find((node) => node.id === edge.source);
      const node2 = nodes.find((node) => node.id === edge.target);
      const x1 = node1.x;
      const y1 = node1.y;
      const x2 = node2.x;
      const y2 = node2.y;
      const label = edge.label;
    
      if (edge.type === 'jumplane') {
        const line = draw.line(x1, y1, x2, y2).stroke({ color: 'grey', width: 2, linecap: 'round' })
        line.start = node1.id;
        line.end = node2.id;
      } else {
        draw.line(x1, y1, x2, y2).stroke({ color: 'teal', width: 2, linecap: 'round' });
        draw.text(label).move((x1 + x2) / 2, (y1 + y2) / 2).fill('white');
      }
    }

    for (const node of nodes) {
      if (node.nodeType.includes('system')) {
        const circle = drawNode(node, draw, edges);
      }

    }

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

    //scroll to mean of all nodes
    const meanX = nodes.reduce((acc, node) => acc + node.x, 0) / nodes.length;
    const meanY = nodes.reduce((acc, node) => acc + node.y, 0) / nodes.length;
    draw.viewbox(meanX-500, meanY-500, 1000, 500);

    draw.on('click', (event) => {
      const viewbox = draw.viewbox();
      const clientRect = containerRef.current.getBoundingClientRect();

      // Calculate mouse position in SVG coordinate system
      // Calculate mouse position in SVG coordinate system
      const mouseX = event.clientX - clientRect.left;
      const mouseY = event.clientY - clientRect.top;
      const zoomFactorX = viewbox.width / clientRect.width;
      const zoomFactorY = viewbox.height / clientRect.height;
      const x = viewbox.x + mouseX * zoomFactorX;
      const y = viewbox.y + mouseY * zoomFactorY;

      const n = nodes.length;
      const id = `Placeholder ${n}`;
      const newNode = { x, y, id: id, nodeType: 'system' };
      //nodes.push(newNode);
      //console.log(nodes);
      //drawNode(newNode, draw);
    });

  }, []);

  return (
    <div style={{ height: "calc(100vh - 100px)", backgroundColor: "black" }}>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
    </div>
  );
};

export default Graph;
function drawNode(node, draw, edges) {
  const { x, y, id, nodeType } = node;

  var radius = 10;
  var color = 'white';

  if (nodeType.includes('manticore')) {
    color = 'orange';
  }



  const circle = draw.circle(radius).fill('white').stroke({ color: color, width: 2, linecap: 'round' });
  const text = draw.text(id).fill('white').font({ size: 10 });
  circle.move(x - 5, y - 5);
  text.move(x + 10, y - 10);

  circle.id = id;

  circle.selected = false;

  circle.click(() => {
    circle.selected = true;
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

        const line = draw.line(nodex, nodey, othernodex, othernodey).stroke({ color: 'grey', width: 2, linecap: 'round' });

        //move line to back
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
  console.log(edges)

  //mark selected circlas red
  for (const child of draw.children()) {
    if (child.selected) {
      child.fill('red');
    } else {
      child.fill('white');
    }
  }

  });

  return circle;
}

