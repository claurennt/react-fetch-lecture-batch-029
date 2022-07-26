import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [post, setPost] = useState();
  const [id, setId] = useState(1);

  //use effect only runs after the component did mount
  //with empty [] the use effect will run only once
  //if we put a variable inside the [] the useEffect will run every time the value of that variable changes
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then((res) => {

    //     return res.json();
    //   })
    //   .then((data) => setPost(data))
    //   .catch((err) => console.log(err));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log("error", err));
  }, [id]);

  return (
    <div className="App">
      <h1>API FETCH</h1>
      <button onClick={() => setId((prev) => prev + 1)}>
        fetch again with new id
      </button>
      <p>{post?.title}</p>

      {/* {posts && posts.map((post) => <p>{post.title}</p>)} */}
      {/* {posts?.map((post) => (
        <p>{post.title}</p>
      ))} */}
    </div>
  );
}

export default App;
