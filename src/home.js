import React from 'react';
import {Link } from "react-router-dom";
import "./home.css";

function home() {
  return (
<>
  <div className="options">
  <Link to="/array" style={{ textDecoration: 'none' }} className='homeLink'><div className="link array"> Array</div></Link>
  <Link to="/backtracking" style={{ textDecoration: 'none' }} className='homeLink'><div className="link backtracking"> Backtracking</div></Link>
  <Link to="/binary_trees" style={{ textDecoration: 'none' }} className='homeLink'><div className="link binaryTrees"> Binary Trees</div></Link>
  <Link to="/bit_manipulation" style={{ textDecoration: 'none' }} className='homeLink'><div className="link bitManipulation"> Bit Manipulation</div></Link>
  <Link to="/bst" style={{ textDecoration: 'none' }} className='homeLink'><div className="link bst"> Binary Search Trees</div></Link>
  <Link to="/dp" style={{ textDecoration: 'none' }} className='homeLink'><div className="link dp"> Dynamic Programing</div></Link>
  <Link to="/graphs" style={{ textDecoration: 'none' }} className='homeLink'><div className="link graphs"> Graphs</div></Link>
  <Link to="/greedy" style={{ textDecoration: 'none' }} className='homeLink'><div className="link greedy"> Greedy</div></Link>
  <Link to="/heap" style={{ textDecoration: 'none' }} className='homeLink'><div className="link heap"> Heap</div></Link>
  <Link to="/linked_list" style={{ textDecoration: 'none' }} className='homeLink'><div className="link linkedList"> Linked List</div></Link>
  <Link to="/matrix" style={{ textDecoration: 'none' }} className='homeLink'><div className="link matrix">Matrix</div></Link>
  <Link to="/search_sort" style={{ textDecoration: 'none' }} className='homeLink'><div className="link searchSort">Search Sort</div></Link>
  <Link to="/stack_queue" style={{ textDecoration: 'none' }} className='homeLink'><div className="link stackQueue">Stack and Queue</div></Link>
  <Link to="/string" style={{ textDecoration: 'none' }} className='homeLink'><div className="link string">Strings</div></Link>
  <Link to="/trie" style={{ textDecoration: 'none' }} className='homeLink'><div className="link trie">Trie</div></Link>
  </div>
</>
  )
}

export default home