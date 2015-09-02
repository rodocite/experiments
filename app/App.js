import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import base64 from 'base-64';
import $ from 'jquery';




class App extends React.Component {
  constructor(props) {
    super(props);

  }



  onDrop(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = this.result;
    }
    console.log(reader.readAsDataURL( file[0].slice() ));

  // $.ajax({
  //   url: 'https://api.imgur.com/3/image',
  //   type: 'POST',
  //   headers: {
  //     Authorization: 'Client-ID b2670fcbac651a9',
  //     Accept: 'application/json'
  //   },
  //   data: {
  //     image: file,
  //   },
  //   success: function(result) {
  //     var id = result.data.id;
  //     window.location = 'https://imgur.com/gallery/' + id;
  //   }
  });
    // $.ajax({
    //   url: 'https://api.imgur.com/oauth2/authorize?response_type=token&client_id=b2670fcbac651a9&state=APPLICATION_STATE',
    //   success: function(response) {
    //     console.log(response);
    //   },
    //   error: function(err) {
    //     console.log(err);
    //   }
    // })
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
};

React.render(<App />, document.getElementById('app'));
//
// {
//   url: 'https://api.imgur.com/oauth2/authorize',
//   method: 'get', // default
//   headers: {'X-Requested-With': 'XMLHttpRequest'},
//
//   params: {
//     response_type: 'token',
//     client_id: 'b2670fcbac651a9'
//   },
//   responseType: 'json', // default
// }
//
// {
//   data: {},
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {}
// }
