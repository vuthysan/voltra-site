import React, { Component } from "react";
import Navbar from "../components/layouts/navbar";

class Model extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="ui text container">
          <center>
            <h1 className="warranty">Model</h1>
            <br />
          </center>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit proin,
            dignissim quam eget. Erat massa habitasse sollicitudin enim neque
            molestie mauris tortor, quis facilisi urna hac nisl ac class nunc
            nulla, metus fringilla leo venenatis eu tellus a. Aenean quis in
            purus habitasse nibh curae sem dignissim, tristique odio luctus nisl
            vivamus leo condimentum, interdum euismod justo potenti nullam morbi
            scelerisque. Varius turpis sed ullamcorper et fermentum justo,
            nascetur semper ac mollis tincidunt sociosqu tempor, volutpat
            vehicula sagittis imperdiet parturient.
          </p>
          <p>
            Porttitor mollis viverra turpis per euismod luctus at fermentum
            accumsan, mus tristique nascetur imperdiet est duis faucibus litora
            senectus libero, donec morbi vel massa diam venenatis purus
            facilisi. Phasellus nisl facilisis tellus lacus quisque vitae urna
            eu accumsan, scelerisque ullamcorper maecenas litora nostra euismod
            venenatis cursus habitasse, ante tempor ridiculus molestie
            pellentesque dis eros ornare. Pretium hendrerit litora nam ridiculus
            integer fusce pulvinar laoreet risus, ac urna donec ullamcorper
            mauris habitasse suscipit enim luctus varius, ornare in quam odio
            arcu malesuada facilisi feugiat.
          </p>
          <p>
            Ultrices vulputate pulvinar nulla magna posuere mauris a magnis
            venenatis tincidunt, ligula mattis porta tortor curabitur senectus
            commodo ridiculus facilisi, quis fusce porttitor nisl taciti sed ut
            placerat pellentesque. Himenaeos diam platea porttitor scelerisque
            dui blandit praesent id, aliquet venenatis litora eu magnis iaculis
            in nulla, varius hendrerit vel natoque gravida pretium quisque.
            Tempus ac diam dictumst purus venenatis consequat id, curabitur sed
            dignissim non suscipit tristique hendrerit, viverra vitae
            sollicitudin dui iaculis nibh. Integer cum nisi non sed vitae nunc
            cursus, suscipit facilisi magna vestibulum magnis aenean.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Model;
