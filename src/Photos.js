import React from "react";
import "./Photos.css";

export default function Photos(props){
  if (props.photos) {
    return(
      <section className="Photos">
        <div className="row">
        {props.photos.map(function (photo, index) {
          return (
          <div className="col-4" key={index}>
          <img src={photo.src.medium} className="img-fluid" alt="logo" />
          </div>
          );
        })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}