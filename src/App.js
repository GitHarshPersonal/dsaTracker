import './App.css';
import React, {usestate} from 'react';
import { BrowserRouter as Router, Routes as Switch, Route , Link } from "react-router-dom";
import Graph from './components/graph';
import Array from './components/array'
import Backtracking from './components/backtracking';
import BinaryTrees from './components/binaryTrees';
import BitManipulation from './components/bitManipulation';
import Bst from './components/bst';
import Dp from './components/dp';
import Greedy from './components/greedy';
import Heap from './components/heap';
import LinkedList from './components/linkedList';
import Matrix from './components/matrix';
import Search_sort from './components/search_sort';
import StackQueue from './components/stackQueue';
import String from './components/string'
import Trie from './components/trie';
import Home from './home';
import Header from './header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />}></Route>
          <Route path="/array" element={<Array />}></Route>
          <Route path="/backtracking" element={<Backtracking />}></Route>
          <Route path="/binary_trees" element={<BinaryTrees />}></Route>
          <Route path="/bit_manipulation" element={<BitManipulation />}></Route>
          <Route path="/bst" element={<Bst />}></Route>
          <Route path="/dp" element={<Dp />}></Route>
          <Route path="/graphs" element={<Graph />}></Route>
          <Route path="/greedy" element={<Greedy />}></Route>
          <Route path="/heap" element={<Heap />}></Route>
          <Route path="/linked_list" element={<LinkedList />}></Route>
          <Route path="/matrix" element={<Matrix />}></Route>
          <Route path="/search_sort" element={<Search_sort />}></Route>
          <Route path="/stack_queue" element={<StackQueue />}></Route>
          <Route path="/string" element={<String />}></Route>
          <Route path="/trie" element={<Trie />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
