import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/trie.json');

export default function Trie() {

      let initQues;
      if(localStorage.getItem("trieData") === null)
      {
        localStorage.setItem("trieData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("trieData"));
      
      const [trieData, settrieData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("trieData", JSON.stringify(trieData));
      }, [trieData])
      

      let i = 0;
      trieData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = trieData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        settrieData(mapped);

      }

      let numDone=0,num;

      num = trieData.length;
      
      for(let i=0;i<trieData.length;i++)
      {
        if(trieData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {trieData.map((ques) => (
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