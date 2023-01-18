const mongoose = require('mongoose');
const { Schema } = mongoose;
let arrayQues = require('./source/array.json');
let backtrackingQues = require('./source/backtracking.json');
let binaryTreesArray = require('./source/binaryTrees.json');
let bitManipulationArray = require('./source/bitManipulation.json');
let bstArray = require('./source/bst.json');
let dpArray = require('./source/dp.json');
let graphArray = require('./source/graph.json');
let greedyArray = require('./source/greedy.json');
let heapArray = require('./source/heap.json');
let linkedListArray = require('./source/linkedList.json');
let matrixArray = require('./source/matrix.json');
let search_sortArray = require('./source/search_sort.json');
let stackQueueArray = require('./source/stackQueue.json');
let stringArray = require('./source/string.json');
let trieArray = require('./source/trie.json');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      questions: {
        type: Array,
        default: [
          arrayQues,
          backtrackingQues,
          binaryTreesArray,
          bitManipulationArray,
          bstArray,
          dpArray,
          graphArray,
          greedyArray,
          heapArray,
          linkedListArray,
          matrixArray,
          search_sortArray,
          stackQueueArray,
          stringArray,
          trieArray
        ]
      }
});

module.exports = mongoose.model('user', UserSchema);