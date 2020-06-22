import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  // Line,
  Sphere
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";
// const from = this.props.from;
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// https://www.worldatlas.com/articles/top-coffee-producing-countries.html


function generateCircle(deg) {
  if (!deg) return [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]];
  return new Array(361).fill(1).map((d, i) => {
    return [-180 + i, deg];
  });
}
function ujjwal() {
    // console.log(this.props.from);
  }

const MapChart = (props) => {
  return (
    <ComposableMap projection="geoEqualEarth">
      <PatternLines
        id="lines"
        height={6}
        width={6}
        stroke="#000"
        strokeWidth={2}
        background="blue"
        orientation={["diagonal"]}
      />
      {/* <Sphere stroke="#000" /> */}
      {/* <Graticule stroke="#DDD" /> */}
      <Geographies geography={geoUrl} stroke="#000" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map(geo => {
              console.log(props.from);
            //   console.log(props.des);
            // <div>props.from</div>
            ujjwal();
            const highlighted = [
                props.from,
                // props.des,
                "USA"
            ];
            const isHighlighted =
              highlighted.indexOf(geo.properties.ISO_A3) !== -1;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "url('#lines')" : "#F6F0E9"}
                onClick={() => console.log(geo.properties.ISO_A3)}
              />
            );
          })
        }
      </Geographies>
      
    </ComposableMap>
  );
};

export default MapChart;
