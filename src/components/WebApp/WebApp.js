import React from "react";
import './WebApp.css'

function Web() {
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
          <form id="upload-file" method="post" enctype="multipart/form-data">
            <label for="imageUpload" class="upload-label">
                Choose...
            </label>
            <input type="file" name="file" id="imageUpload" accept=".png, .jpg, .jpeg"/>
    </form>

          <div class="image-section" style={{display:'none'}}>
            <div class="img-preview">
              <div id="imagePreview"></div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary btn-lg "
                id="btn-predict"
              >
                Predict!
              </button>
            </div>
          </div>

          <div class="loader" style={{display:'none'}}></div>

          <h3 id="result">
            <span> </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Web;
