import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export function OriginalChart({
  pre_post_index,
  pre_post,
  complete_preds_means,
  complete_preds_lower,
  complete_preds_upper,
}) {
  if (
    !pre_post_index ||
    !pre_post ||
    !complete_preds_means ||
    !complete_preds_lower ||
    !complete_preds_upper
  ) {
    return null;
    // pre_post_index = [];
    // pre_post = [];
    // complete_preds_means = [];
    // complete_preds_lower = [];
    // complete_preds_upper = [];
  }

  const indexToDate = (index) => {
    const result = new Date("2020-03-01");
    result.setDate(result.getDate() + index * 7);
    return result;
  };

  const dates = pre_post_index.map(indexToDate);

  const confidence_dates = dates.concat(dates.slice().reverse());
  const confidence = complete_preds_upper.concat(
    complete_preds_lower.slice().reverse()
  );

  const confidence_series = {
    x: confidence_dates,
    y: confidence,
    fill: "tozerox",
    fillcolor: "rgba(0,176,246,0.2)",
    line: { color: "transparent" },
    name: "Prediction",
    showlegend: false,
    type: "scatter",
  };
  const prediction_series = {
    x: dates,
    y: complete_preds_means,
    line: { color: "rgb(0,176,246)" },
    mode: "lines",
    name: "Prediction",
    type: "scatter",
  };
  const real_series = {
    x: dates,
    y: pre_post,
    line: { color: "rgb(231,107,243)" },
    mode: "lines",
    name: "Actual",
    type: "scatter",
  };
  const data = [confidence_series, prediction_series, real_series];

  const layout = {
    autosize: true,
    height: 200,
    legend: {
      orientation: "h",
      x: 0.5,
      y: -0.4,
      xanchor: "center",
    },
    margin: {
      t: 30,
      l: 60,
      r: 40,
      b: 0,
    },
    paper_bgcolor: "rgb(245,245,245)",
    plot_bgcolor: "rgb(245,245,245)",
    xaxis: {
      gridcolor: "rgb(210,210,210)",
      showgrid: true,
      showline: false,
      showticklabels: true,
      tickcolor: "rgb(127,127,127)",
      ticks: "outside",
      zeroline: false,
      range: [indexToDate(0), indexToDate(dates.length)],
    },
    yaxis: {
      gridcolor: "rgb(210,210,210)",
      showgrid: true,
      showline: false,
      showticklabels: true,
      tickcolor: "rgb(127,127,127)",
      ticks: "outside",
      zeroline: false,
      range: [0, Math.max(...confidence.concat(pre_post))],
    },
    shapes: [
      {
        type: "line",
        x0: indexToDate(65),
        y0: 0,
        x1: indexToDate(65),
        y1: Math.max(...confidence.concat(pre_post)),
        line: {
          color: "rgb(55, 128, 191)",
          width: 1,
          dash: "dashdot",
        },
      },
      {
        type: "line",
        x0: indexToDate(51),
        y0: 0,
        x1: indexToDate(51),
        y1: Math.max(...confidence.concat(pre_post)),
        line: {
          color: "rgb(55, 128, 191)",
          width: 1,
          dash: "dashdot",
        },
      },
    ],
  };
  const style = { width: "auto", height: "100%" };

  return (
    <Plot data={data} layout={layout} useResizeHandler={true} style={style} />
  );
}
