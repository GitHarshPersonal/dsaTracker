import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/array.json');

export default function Array() {

      let initQues;
      if(localStorage.getItem("arrayData") === null)
      {
        localStorage.setItem("arrayData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("arrayData"));
      
      const [arrayData, setarrayData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("arrayData", JSON.stringify(arrayData));
      }, [arrayData])
      

      let i = 0;
      arrayData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = arrayData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setarrayData(mapped);

      }

      let numDone=0,num;

      num = arrayData.length;
      
      for(let i=0;i<arrayData.length;i++)
      {
        if(arrayData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {arrayData.map((ques) => (
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