import React, { useState, useEffect } from "react";

import fakeServer from "../apis/fakeServer";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fakeServer.get("/comments");

      setComments(response.data);
    })();
  }, []);

  return (
    <div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
