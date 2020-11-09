import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import '../../assets/jquery/main.js';
import './WebApp.css';

function Web() {
  const predic = event => {
    $('.loader').show();
    const file = event.target.files;
    const formData = new FormData();

    formData.append('file', file[0]);

    axios
      .post('https://herbicide-recommendation.herokuapp.com/predict', formData)
      .then(res => {
        $('.loader').hide();
        $('#result').fadeIn(600);

        $('#result').text(' Result:  ' + res.data);
        console.log(res.data);
      })
      .catch(err => console.warn(err));
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            AI Demo
          </a>
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            Help
          </button>
        </div>
      </nav>
      <div id="try" className="container">
        <h2>Invasive species classifier</h2>

        <div>
          <form
            id="upload-file"
            // action="https://herbicide-recommendation.herokuapp.com/predict"
            // method="POST"
            encType="multipart/form-data"
          >
            <label htmlFor="imageUpload" className="upload-label">
              Choose...
            </label>
            <input
              type="file"
              name="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={e => predic(e)}
            />
            {/* <button className="pred">PREDDD</button> */}
          </form>

          <div className="image-section" style={{ display: 'none' }}>
            <div className="img-preview">
              <div id="imagePreview"></div>
            </div>
            <div>
              {/* <button
                type="button"
                className="btn btn-primary btn-lg "
                id="btn-predict"
              >
                Predict!
              </button> */}
            </div>
          </div>

          <div className="loader" style={{ display: 'none' }}></div>

          <h1 id="result">
            <span> </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Web;
