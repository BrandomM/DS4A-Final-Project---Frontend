import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export function CounterfactualChart() {
  const data = [
    {
      type: "scatter",
      x: ['2013-10-04', '2014-05-04', '2016-03-04', '2017-02-04'],
      y: [10, 15, 13, 17],
      mode: "lines",
      name: "Red",
      line: {
        color: "rgb(219, 64, 82)",
        width: 3,
      },
    },
    {
      type: "scatter",
      x: ['2013-09-04', '2014-10-04', '2016-03-04', '2018-02-04'],
      y: [12, 9, 15, 12],
      mode: "lines",
      name: "Blue",
      line: {
        color: "rgb(55, 128, 191)",
        width: 1,
      },
    },
  ];
  const layout = { title: "Gráfica de prueba", autosize: true };
  const style = { width: "100%", height: "100%" };

  return (
    <Plot data={data} layout={layout} useResizeHandler={true} style={style} />
  );
}
