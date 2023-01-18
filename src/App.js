import './styles/App.css';
import React, {usestate} from 'react';
import { BrowserRouter as Router, Routes as Switch, Route , Link } from "react-router-dom";
import Graph from './components/Questions Page/graph';
import Array from './components/Questions Page/array'
import Backtracking from './components/Questions Page/backtracking';
import BinaryTrees from './components/Questions Page/binaryTrees';
import BitManipulation from './components/Questions Page/bitManipulation';
import Bst from './components/Questions Page/bst';
import Dp from './components/Questions Page/dp';
import Greedy from './components/Questions Page/greedy';
import Heap from './components/Questions Page/heap';
import LinkedList from './components/Questions Page/linkedList';
import Matrix from './components/Questions Page/matrix';
import Search_sort from './components/Questions Page/search_sort';
import StackQueue from './components/Questions Page/stackQueue';
import String from './components/Questions Page/string'
import Trie from './components/Questions Page/trie';
import Home from './components/home';
import Header from './components/header';
import Login from './components/Login';
import Signup from './components/Signup';

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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup /> }></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
