import { useEffect, useState } from "react";
import { ChoroplethMap } from "./ChoroplethMap";
import { get } from "../utils/httpClient";


const PATH = "/api/choropleth";

export function MapsContainer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    get(PATH).then((departamentos) => {
      setData(departamentos.data);
    });
  }, []);

  return (
    <div className="mapsContainer">
      <div className="actualMap">
        <h1>VACCINATION</h1>
        <ChoroplethMap data={data['Actual']} />
      </div>
      <div className="predictedMap">
        <h1>NO VACCINATION</h1>
        <ChoroplethMap data={data['Predicted']} />
      </div>
    </div>
  );
}
