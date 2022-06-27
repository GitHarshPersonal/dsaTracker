import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/backtracking.json');

export default function Backtracking() {

      let initQues;
      if(localStorage.getItem("backtrackingData") === null)
      {
        localStorage.setItem("backtrackingData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("backtrackingData"));
      
      const [backtrackingData, setbacktrackingData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("backtrackingData", JSON.stringify(backtrackingData));
      }, [backtrackingData])
      

      let i = 0;
      backtrackingData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = backtrackingData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setbacktrackingData(mapped);

      }

      let numDone=0,num;

      num = backtrackingData.length;
      
      for(let i=0;i<backtrackingData.length;i++)
      {
        if(backtrackingData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {backtrackingData.map((ques) => (
            <div className="ques" key={ques.id + ques['Problem: ']}>
              <a href={ques.URL} target="_blank">
              <span className={ques.Done ? "quesName Done" : "quesName"}>{ques['Problem: ']}</span>
              </a>
              <button id='done-btn' onClick={()=>{toggle(ques.id)}}>{!ques.Done? "Done" : "Undo Done"}</button>
            </div>
          ))}
        </div>
      );
}