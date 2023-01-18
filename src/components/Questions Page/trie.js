import React, {useState, useEffect} from 'react';
import '../styles/ques.css';

export default function Trie() {

  const host = "http://localhost:5000";

  const [data, setData] = useState([]);
  const index1=14;
  const fetchQues =async ()=>{
    const response = await fetch(`${host}/questions/fetchques`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const json = await response.json();
    setData(json[index1]);
  }


  const toggle = async (index2)=>{
    const response = await fetch(`${host}/questions/updateques/${index1}/${index2}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const json = await response.json();
    // console.log(json);
    // fetchQues();
    setData(json.questions[index1]);
  }

    useEffect(() => {
      fetchQues();
    }, []);
    
      return (
        <div className="question">
          {/* <div className="stats">
            <h3>Done {numDone} out of {num}</h3>
            <h3>{perc.toFixed(2)}% Done</h3>
          </div> */}
          {data.map((ques, index) => (
            <div key={index}>
            <div className="ques">
              <a href={ques.URL} target="_blank">
              <span className={ques.Done ? "quesName Done" : "quesName"}>{ques['Problem: ']}</span>
              </a>
              <button className={`btn btn-${ques.Done?'secondary':'success'}`} onClick={()=>{toggle(index)}}>{!ques.Done? "Done" : "Undo Done"}</button>
            </div>
            <hr></hr>
            </div>
          ))}
        </div>
      );
}