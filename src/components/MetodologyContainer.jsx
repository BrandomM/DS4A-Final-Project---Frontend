import dataSources from "../assets/dataSources.png";
import resultsTable from "../assets/resultsTable.png";
import architecture from "../assets/architecture.png";

export function MetodologyContainer() {
  return (
    <div className="metodologyContainer">
      <div className="firstParagraph">
        <p>
          Before start modeling, we made an exhaustive search for Colombia’s
          Covid state databases and tried to find a question that would be
          solved by using machine learning. Among our findings, we found a
          database that contains COVID-19 cases daily reports and the daily
          distribution of vaccines given to each department.
        </p>
        <img src={dataSources} alt="dataSources" />
        <p>
          The idea behind the project was the question about how to evaluate
          Colombia’s vaccination scheme and motivate their people to receive the
          vaccine.
        </p>
        <p>
          We used a Bayesian causal impact model for getting an approximation of
          the number of prevented deaths in Colombia. This model is part of a
          time-series type of model known as Bayesian structural time-series,
          and it has several assumptions that we supposed for allowing it being
          implemented. Fortunately, we found that between 1000 and 10.000 deaths
          have been prevented until now, and it is likely that number increase
          according with the vaccination percentage.
        </p>
      </div>
      <div className="secondParagraph">
        <img src={resultsTable} alt="resultsTable" />
        <p>
          Exploring the datasets and implanting the solution was a hard
          challenge due to the volume of the data and the way to combine it, but
          we found a solution to it using cloud technologies. Finally, we
          uploaded the solution using Heroku cloud and the users can see its
          effectiveness.
        </p>
        <img src={architecture} alt="architecture" />
        <p>
          The dashboard contains the counterfactual charts of the vaccination
          effect and a pair of choropleth maps showing a comparison of the
          actual pandemic behavior and a hypothetical case where there were no
          vaccination.
        </p>
      </div>
    </div>
  );
}
