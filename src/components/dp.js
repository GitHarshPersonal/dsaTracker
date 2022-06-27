import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/dp.json');

export default function Dp() {

      let initQues;
      if(localStorage.getItem("dpData") === null)
      {
        localStorage.setItem("dpData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("dpData"));
      
      const [dpData, setdpData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("dpData", JSON.stringify(dpData));
      }, [dpData])
      

      let i = 0;
      dpData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = dpData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setdpData(mapped);

      }

      let numDone=0,num;

      num = dpData.length;
      
      for(let i=0;i<dpData.length;i++)
      {
        if(dpData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {dpData.map((ques) => (
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