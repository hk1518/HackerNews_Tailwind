import React from "react";

import { withRouter } from "react-router-dom";

function Post(props) {
  return (
    <div>
      <h1 className='text-center bg-header'>{props.title}</h1>

      <div className='flex flex-row flex-wrap justify-around'>
        <p>Comments: {props.comments}</p>
        <p>Points: {props.upvotes}</p>
        <div className='flex flex-col justify-around'>
          <button
            type='button'
            onClick={() => {
              props.increased(props.index);
            }}
          >
            Upvote
          </button>
          <button
            type='button'
            onClick={() => {
              props.decreased(props.index);
            }}
          >
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);
