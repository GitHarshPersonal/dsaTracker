import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/binaryTrees.json');

export default function BinaryTrees() {

      let initQues;
      if(localStorage.getItem("binaryTreeData") === null)
      {
        localStorage.setItem("binaryTreeData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("binaryTreeData"));
      
      const [binaryTreeData, setbinaryTreeData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("binaryTreeData", JSON.stringify(binaryTreeData));
      }, [binaryTreeData])
      

      let i = 0;
      binaryTreeData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = binaryTreeData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setbinaryTreeData(mapped);

      }

      let numDone=0,num;

      num = binaryTreeData.length;
      
      for(let i=0;i<binaryTreeData.length;i++)
      {
        if(binaryTreeData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {binaryTreeData.map((ques) => (
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