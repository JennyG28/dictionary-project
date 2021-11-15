import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){

  return (
    <div className="Phonetic">
     {"/"}{props.phonetic.text}{"/"}{" "}   
     <a href={props.phonetic.audio} >
        🔊 
      </a>
    </div>
  );
}