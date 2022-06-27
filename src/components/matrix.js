import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/matrix.json');

export default function Matrix() {

      let initQues;
      if(localStorage.getItem("matrixData") === null)
      {
        localStorage.setItem("matrixData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("matrixData"));
      
      const [matrixData, setmatrixData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("matrixData", JSON.stringify(matrixData));
      }, [matrixData])
      

      let i = 0;
      matrixData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = matrixData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setmatrixData(mapped);

      }

      let numDone=0,num;

      num = matrixData.length;
      
      for(let i=0;i<matrixData.length;i++)
      {
        if(matrixData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {matrixData.map((ques) => (
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