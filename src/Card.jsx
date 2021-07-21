import React from "react";

function Card(props) {
  return (
    <div>
      <div className='pt-3 flex flex-row'>
        <div className='pl-2 text-secondary text-px13 flex flex-row flex-nowrap items-center'>
          <p> {props.id}</p>
          <button
            className='ml-4 w-5 h-5'
            onClick={() => {
              props.increment(props.index);
            }}
          >
            ^
          </button>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row flex-wrap items-center pl-6'>
            <p
              className='mr-2.5 text-px15'
              onClick={() => {
                props.changeUrl(props.index);
              }}
            >
              {props.title}
            </p>
            <p className='text-secondary text-px13'>{props.url}</p>
          </div>
          <div className='text-secondary text-px13 pl-6 flex flex-row'>
            <p> {props.date} </p>
            <p>| {props.comments} comments</p>
            <p>| {props.upvotes} points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
