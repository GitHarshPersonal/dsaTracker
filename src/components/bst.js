import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/bst.json');

export default function Bst() {

      let initQues;
      if(localStorage.getItem("bstData") === null)
      {
        localStorage.setItem("bstData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("bstData"));
      
      const [bstData, setbstData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("bstData", JSON.stringify(bstData));
      }, [bstData])
      

      let i = 0;
      bstData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = bstData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setbstData(mapped);

      }

      let numDone=0,num;

      num = bstData.length;
      
      for(let i=0;i<bstData.length;i++)
      {
        if(bstData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {bstData.map((ques) => (
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