import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { OriginalChart } from "./OriginalChart";
import { PointwiseChart } from "./PointwiseChart";
import { CumulativeChart } from "./CumulativeChart";

const PATH = "/api/charts";

export function ChartsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get(PATH).then((series) => {
      setData(series.data);
    });
  }, []);

  return (
    <div className="chartsContainer">
      <div>
        <h1>MORTALITY</h1>
        <OriginalChart
          pre_post_index={data["pre_post_index"]}
          pre_post={data["pre_post"]}
          complete_preds_means={data["complete_preds_means"]}
          complete_preds_lower={data["complete_preds_lower"]}
          complete_preds_upper={data["complete_preds_upper"]}
        />
      </div>
      <div>
        <h1>EFFECTS</h1>
        <PointwiseChart
          pre_post_index={data["pre_post_index"]}
          point_effects_means={data["point_effects_means"]}
          point_effects_lower={data["point_effects_lower"]}
          point_effects_upper={data["point_effects_upper"]}
        />
      </div>
      <div>
        <h1>CUMULATIVE EFFECTS</h1>
        <CumulativeChart
          pre_post_index={data["pre_post_index"]}
          post_cum_effects_means={data["post_cum_effects_means"]}
          post_cum_effects_lower={data["post_cum_effects_lower"]}
          post_cum_effects_upper={data["post_cum_effects_upper"]}
        />
      </div>
    </div>
  );
}
