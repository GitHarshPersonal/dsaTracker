import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  let navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('authToken'))
    {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center my-2">DSA Tracker - Efficient Tracking for DSA Sheet</h1>
      </div>
      <div className="options">
        <div className="card my-4 mx-3">
          <img
            src="https://cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Arrays</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/array" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://ibpublicimages.s3-us-west-2.amazonaws.com/tutorial/backtracking1.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Backtracking</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/backtracking" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Binary Trees</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/binary_trees" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://he-s3.s3.amazonaws.com/media/uploads/cb985c2.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bit Manipulation</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/bit_manipulation" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://www.gatevidyalay.com/wp-content/uploads/2018/07/Binary-Search-Tree-Example.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Binary Search Trees</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/bst" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://i.ytimg.com/vi/aPQY__2H3tE/maxresdefault.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Dynamic Programing</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/dp" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/what-is-graphs-in-data-structure.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Graphs</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/graphs" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Fractional-Knapsackexample-min-1024x512.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Greedy</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/greedy" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220165711/MinHeapAndMaxHeap1.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Heap</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/heap" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://miro.medium.com/max/800/1*m11VTAK3YJgRemmfBI_2uw.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Linked List</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/linked_list" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://static.javatpoint.com/ds/images/types-of-sparse-matrices.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Matrix</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/matrix" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://miro.medium.com/max/560/1*k54o6Y0a6ifDD8qJFBu4Fg.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Search Sort</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/search_sort" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://gohighbrow.com/wp-content/uploads/2018/07/Computer-science-fundamentals_6.1.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Stack and Queue</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/stack_queue" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/finnnal.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">String</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/string" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
        <div className="card my-4 mx-3">
          <img
            src="https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/12/learnersbucket.com-1-1.png?fit=768%2C500&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Trie</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/trie" className="btn btn-primary">
              Questions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
