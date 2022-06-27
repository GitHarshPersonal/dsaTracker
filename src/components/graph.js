import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/graph.json');

export default function Graph() {

      let initQues;
      if(localStorage.getItem("graphData") === null)
      {
        localStorage.setItem("graphData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("graphData"));
      
      const [graphData, setgraphData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("graphData", JSON.stringify(graphData));
      }, [graphData])
      

      let i = 0;
      graphData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = graphData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setgraphData(mapped);

      }

      let numDone=0,num;

      num = graphData.length;
      
      for(let i=0;i<graphData.length;i++)
      {
        if(graphData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {graphData.map((ques) => (
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