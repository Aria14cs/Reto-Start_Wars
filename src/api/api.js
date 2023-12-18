import { useState,useEffect } from "react";


export function ApiFetch(url) {

const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then ((response) => response.json())
    .then ((data)=> setData(data.results));
  }, []);

  return {data};

}