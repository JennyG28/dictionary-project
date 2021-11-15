import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setKeyword] = useState ("");
let [results, setResults] = useState(null);

function handleResponse(response){
setResults(response.data[0]);
}

function search(event){
  event.preventDefault();
 
  //documentation: https://dictionaryapi.dev/

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);

}

function handleKeywordChange(event){
  setKeyword(event.target.value);
}

 // <Results results={results}/> : component name , property name, value
  return (
    <div className="Dictionary">
      
      <form onSubmit={search} className="row g-2">
         <div className="col-8">
        <input type="search" className="field" onChange={handleKeywordChange} placeholder="Search word..."/>
        </div>
      <div className="col-4">
              <input
                type="submit"
                value="🔍"
                className="btn btn-outline-light mb-2"
              />
            </div>
      </form>
      <br />
      <Results results={results}/>
    
    </div>
  );
}