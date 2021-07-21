import React from "react";

function ContDisplay(props) {
  return (
    <div>
      {props.commentCont.map((index) => {
        return (
          <div className='text-secondary pt-4 pl-8'>
            {index}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ContDisplay;
