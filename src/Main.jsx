import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import Post from "./Post";
import ContDisplay from "./CommentContents";
// import { useFetchData } from "./Landing";

function Main({ location, history }) {
  const tempCont = JSON.parse(localStorage.getItem("memoryArray"));
  // console.log("Data received,", tempCont);
  let { ID } = useParams();
  const [comment, updateComment] = useState("");
  const [tempValue, setTempValue] = useState(
    tempCont.find((value) => value.id === ID)
  );

  const previous = () => {
    history.push("/Landing");
  };

  React.useEffect(() => {
    return function cleapup() {
      console.log("component destroyed");
    };
  }, []);

  function increased() {
    var temp = Object.assign({}, tempValue); //one way to clone objects in JS
    temp.upvotes++;
    setTempValue(temp);
    tempCont[ID - 1].upvotes++;
    localStorage.setItem("memoryArray", JSON.stringify(tempCont));
  }
  function decreased() {
    var temp = { ...tempValue }; //another method to clone objects in js
    if (temp.upvotes === 0);
    else {
      temp.upvotes--;
      tempCont[ID - 1].upvotes--;
    }
    setTempValue(temp);

    localStorage.setItem("memoryArray", JSON.stringify(tempCont));
  }

  function handleChange({ target }) {
    updateComment(target.value);
  }

  function addComment() {
    tempCont[ID - 1].comments = Number(tempCont[ID - 1].comments) + 1;
    console.log(tempCont);
    tempCont[ID - 1].commentCont.push(comment);
    localStorage.setItem("memoryArray", JSON.stringify(tempCont));
  }

  return (
    <div>
      {
        <Post
          key={tempValue.key}
          title={tempValue.title}
          comments={tempValue.comments}
          upvotes={tempValue.upvotes}
          increased={increased}
          decreased={decreased}
        />
      }
      <hr></hr>
      <form className='text-center mb-16' onSubmit={addComment}>
        <div className='my-2'>Add Comments</div>
        <br />
        <textarea
          className='lg:w-2/4 lg:h-1/4'
          id='comment'
          rows='20'
          cols='40'
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type='submit'>add comment</button>
      </form>
      {/* {console.log(typeof tempValue.commentCont, tempValue)} */}
      <ContDisplay commentCont={tempValue.commentCont} />
      <button className='flex mt-10 mx-auto' type='button' onClick={previous}>
        Go Back
      </button>
    </div>
  );
}

export default withRouter(Main);
