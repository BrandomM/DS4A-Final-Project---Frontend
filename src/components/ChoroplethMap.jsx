import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import ReactTooltip from "react-tooltip";

const COLOMBIA_GEO_JSON = require("../assets/Colombia.geo.json");

const PROJECTION_CONFIG = {
  scale: 400,
  center: [-72.9301367, 4.1156735],
};

const colorScale = scaleQuantize()
  .domain([1, 4])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ]);

const DEFAULT_COLOR = "#EEE";

export function ChoroplethMap({ data }) {
  const [tooltipContent, setTooltipContent] = useState("");

  if (!data) {
    data = [];
  }

  const onMouseEnter = (geo, cur = { value: "NA" }) => {
    return () => {
      setTooltipContent(
        `Mortality rate in ${geo.properties.NOMBRE_DPT}: ${
          Math.round(cur.mortalidad * 100) / 100
        }%`
      );
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={100}
        height={150}
        data-tip=""
      >
        <Geographies geography={COLOMBIA_GEO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find((s) => s.codigo === geo.properties.DPTO);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.mortalidad : DEFAULT_COLOR)}
                  onMouseEnter={onMouseEnter(geo, cur)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
