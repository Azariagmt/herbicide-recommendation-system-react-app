import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

import '../../assets/jquery/main.js';
import './WebApp.css';

function Web() {
  const [result, setResult] = useState('');

  let predic = async event => {
    setResult('');
    $('.loader').show();
    const file = event.target.files;
    // console.log('FILEEEEEE: ', file[0]);
    const formData = new FormData();

    formData.append('file', file[0]);

    await axios
      .post('https://herbicide-recommendation.herokuapp.com/predict', formData)
      .then(res => {
        setResult(res.data);
        $('.loader').hide();
        $('#result').fadeIn(600);

        $('#result').text(' Result:  ' + res.data);
        console.log(res.data);
      })
      .catch(err => console.warn(err));
  };

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            AI Demo
          </a>
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">
            Help
          </button>
        </div>
      </nav>
      <div id="try" class="container">
        <h2>Invasive species Classifier</h2>

        <div>
          <form
            id="upload-file"
            // action="https://herbicide-recommendation.herokuapp.com/predict"
            // method="POST"
            enctype="multipart/form-data"
          >
            <label for="imageUpload" class="upload-label">
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

          <div class="image-section" style={{ display: 'none' }}>
            <div class="img-preview">
              <div id="imagePreview"></div>
            </div>
            <div>
              {/* <button
                type="button"
                class="btn btn-primary btn-lg "
                id="btn-predict"
              >
                Predict!
              </button> */}
            </div>
          </div>

          <div class="loader" style={{ display: 'none' }}></div>

          <h1 id="result">
            <span> </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Web;
