import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/bitManipulation.json');

export default function BitManipulation() {

      let initQues;
      if(localStorage.getItem("bitData") === null)
      {
        localStorage.setItem("bitData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("bitData"));
      
      const [bitData, setbitData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("bitData", JSON.stringify(bitData));
      }, [bitData])
      

      let i = 0;
      bitData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = bitData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setbitData(mapped);

      }

      let numDone=0,num;

      num = bitData.length;
      
      for(let i=0;i<bitData.length;i++)
      {
        if(bitData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {bitData.map((ques) => (
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