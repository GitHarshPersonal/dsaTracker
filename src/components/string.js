import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/string.json');

export default function String() {

      let initQues;
      if(localStorage.getItem("stringData") === null)
      {
        localStorage.setItem("stringData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("stringData"));
      
      const [stringData, setstringData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("stringData", JSON.stringify(stringData));
      }, [stringData])
      

      let i = 0;
      stringData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = stringData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setstringData(mapped);

      }

      let numDone=0,num;

      num = stringData.length;
      
      for(let i=0;i<stringData.length;i++)
      {
        if(stringData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {stringData.map((ques) => (
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