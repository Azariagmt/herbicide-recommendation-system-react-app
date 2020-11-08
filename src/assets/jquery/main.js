import $ from 'jquery';
import axios from 'axios';

$(document).ready(function () {
  // Init
  $('.image-section').hide();
  $('.loader').hide();
  $('#result').hide();

  // Upload Preview
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imagePreview').css(
          'background-image',
          'url(' + e.target.result + ')'
        );
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $('#imageUpload').change(function () {
    $('.image-section').show();
    $('#btn-predict').show();
    $('#result').text('');
    $('#result').hide();
    readURL(this);
  });

  // Predict
  $('#btn-predict').click(function () {
    let file = $('#upload-file')[0];
    var form_data = new FormData();
    form_data.append('file', file);
    console.log('FORM DATA: ', form_data);

    // Show loading animation
    $(this).hide();
    $('.loader').show();

    // Make prediction by calling api /predict
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://127.0.0.1:33507/predict',
    //   //   headers: {  'Access-Control-Allow-Origin': 'http://The web site allowed to access' },
    //   data: form_data,
    //   //   crossDomain: true,
    //   //  mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   credentials: 'include',
    //   contentType: 'multipart/form-data',
    //   cache: false,
    //   processData: false,
    //   async: true,
    //   success: function (data) {
    //     // Get and display the result
    //     $('.loader').hide();
    //     $('#result').fadeIn(600);
    //     console.log('data:', data);
    //     $('#result').text(' Result:  ' + data);
    //     console.log('Success!');
    //   },
    //   error: function (xhr, status, error) {
    //     var err = JSON.parse(xhr.responseText);
    //     console.log('ERROR::: ', err.Message);
    //   },
    // });

    axios
      .post('http://127.0.0.1:33507/predict', form_data)
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  });
});
