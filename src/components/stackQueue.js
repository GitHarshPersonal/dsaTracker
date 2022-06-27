import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/stackQueue.json');

export default function StackQueue() {

      let initQues;
      if(localStorage.getItem("stackData") === null)
      {
        localStorage.setItem("stackData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("stackData"));
      
      const [stackData, setstackData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("stackData", JSON.stringify(stackData));
      }, [stackData])
      

      let i = 0;
      stackData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = stackData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setstackData(mapped);

      }

      let numDone=0,num;

      num = stackData.length;
      
      for(let i=0;i<stackData.length;i++)
      {
        if(stackData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {stackData.map((ques) => (
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