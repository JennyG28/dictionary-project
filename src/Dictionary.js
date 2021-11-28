import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setKeyword] = useState ("");
let [results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);

function handleResponse(response){
setResults(response.data[0]);
}

function handlePexelsResponse(response){
setPhotos(response.data.photos);
}

function search(event){
  event.preventDefault();
 
  //documentation: https://dictionaryapi.dev/

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);

let pexelsApiKey = "563492ad6f917000010000018d607ac6e10143789c9bc3dc7c9b3928";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

let headers = { Authorization: `Bearer ${pexelsApiKey}` };

axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Results results={results}/>
    <Photos photos={photos} />
    </div>
  );
}