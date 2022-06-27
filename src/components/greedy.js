import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/greedy.json');

export default function Greedy() {

      let initQues;
      if(localStorage.getItem("greedyData") === null)
      {
        localStorage.setItem("greedyData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("greedyData"));
      
      const [greedyData, setgreedyData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("greedyData", JSON.stringify(greedyData));
      }, [greedyData])
      

      let i = 0;
      greedyData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = greedyData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setgreedyData(mapped);

      }

      let numDone=0,num;

      num = greedyData.length;
      
      for(let i=0;i<greedyData.length;i++)
      {
        if(greedyData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {greedyData.map((ques) => (
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