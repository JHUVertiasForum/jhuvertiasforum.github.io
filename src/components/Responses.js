import axios from "axios"
import React, { useState, useEffect } from 'react';

const Responses = () => {
    const [textResponses, setTextResponses] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const headers = {
        'Content-Type': 'application/json'
      };
  
      axios.get('https://sikf2b5a6j.execute-api.us-east-1.amazonaws.com/v1', { headers: headers })
        .then(response => {
          console.log(textResponses)
          const APItext = [];

          console.log(response.data);
          for (let i = 0; i < response.data.length; i++) {
            APItext.push(response.data[i].text);
          }
          
          setTextResponses(APItext);
          setLoading(false); // Set loading to false when the API call is finished
        })
        .catch(error => {
          console.log(error);
          setLoading(false); // Also set loading to false if there's an error
        });
    }, []); // Empty dependency array means this effect runs once on mount
  
    return (
      <div className="responses">
        <h2 style={{textAlign: "center", color: "white"}}>What Others Have Said</h2>
        {loading ? (
          <div>Loading...</div> // Show a loading indicator while the API call is in progress
        ) : (
          textResponses.length > 0 && textResponses.map((text, index) => (
            <div key={index} className="speech-bubble">{text}</div>
          ))
        )}
      </div>
    );
  }
  
  export default Responses;