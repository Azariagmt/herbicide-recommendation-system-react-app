import React from 'react';
import './FuturePlans.css';

import drone from '../../assets/drone-pic.jpg';

function Future() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">Plans for the future</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-1.5">
            Youre going to love what we're doing with drones
          </h3>
          <p className="paragraph">
            Combining our drone program we're letting farmers spend time on
            things that matter as we have used state of the art prediction to
            spray selective herbicide on invasive species
          </p>

          <h3 className="heading-tertiary u-margin-bottom-1.5">
            agro practice only to have been thought of
          </h3>
          <p className="paragraph">
            -Our image processing model detects between different species of
            invasive alien plant species(currently the three common ones here in
            Ethiopia parthenium weed (Parthenium hysterophorus),prosopis
            (Prosopis juliflora) and lantana weed (Lantana camara). ) which
            accuracy will also be scaled with more data.
          </p>

          <a href="#form" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <img src={drone} alt="herbicide-recommendor" />
        </div>
      </div>
    </section>
  );
}

export default Future;
