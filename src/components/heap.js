import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/heap.json');

export default function Heap() {

      let initQues;
      if(localStorage.getItem("heapData") === null)
      {
        localStorage.setItem("heapData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("heapData"));
      
      const [heapData, setheapData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("heapData", JSON.stringify(heapData));
      }, [heapData])
      

      let i = 0;
      heapData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = heapData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setheapData(mapped);

      }

      let numDone=0,num;

      num = heapData.length;
      
      for(let i=0;i<heapData.length;i++)
      {
        if(heapData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {heapData.map((ques) => (
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