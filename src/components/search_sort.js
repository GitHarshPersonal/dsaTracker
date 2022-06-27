import React, {useState, useEffect} from 'react';
import './ques.css';
let questions = require('../source/search_sort.json');

export default function Search_sort() {

      let initQues;
      if(localStorage.getItem("searchData") === null)
      {
        localStorage.setItem("searchData", JSON.stringify(questions));
      }
      initQues = JSON.parse(localStorage.getItem("searchData"));
      
      const [searchData, setsearchData ] = useState(initQues);
      
      useEffect(()=>{
        localStorage.setItem("searchData", JSON.stringify(searchData));
      }, [searchData])
      

      let i = 0;
      searchData.map(k => {
        k.id = i;
        i = i+1;
      })

      const toggle = (id)=>{

        let mapped = searchData.map(e => {
          return e.id === Number(id) ? {...e, Done: !e.Done } : {...e};
        });
        setsearchData(mapped);

      }

      let numDone=0,num;

      num = searchData.length;
      
      for(let i=0;i<searchData.length;i++)
      {
        if(searchData[i].Done === true) numDone++;
      }

      let perc = 100*(numDone/num);

      console.log(numDone);

      return (
        <div className="question">
          <div className="stats">
            <h1>Done {numDone} out of {num}</h1>
            <h1>{perc.toFixed(2)}% Done</h1>
          </div>
          {searchData.map((ques) => (
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