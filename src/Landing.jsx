import React, { useState } from "react";

import { withRouter } from "react-router-dom";

import Card from "./Card.jsx";
import tempCont from "./Datas.json";
import Header from "./Header.jsx";

var array = [];

export default function Landing({ history }) {
  // localStorage.clear();

  const [items, setItems] = useState(
    localStorage.getItem("memoryArray")
      ? JSON.parse(localStorage.getItem("memoryArray"))
      : []
  );

  React.useEffect(() => {
    localStorage.setItem("memoryArray", JSON.stringify(items));
    // console.log(localStorage.getItem("memoryArray"));
  }, [items]);

  React.useEffect(() => {
    var promise = new Promise((resolve, reject) => {
      resolve("Resolved");
    });
    // console.log("getting promise", promise);
    promise.then((res) => {
      var Temp;
      if (JSON.stringify(items) === JSON.stringify([])) {
        Temp = tempCont.slice(0);
      } else {
        Temp = JSON.parse(localStorage.getItem("memoryArray")).concat([]);
      }
      setItems(Temp);
      array = items.concat([]);
    });
  }, []);

  function changeUrl(index) {
    history.push(`/blog/${items[index].id}`);
  }

  function increment(index) {
    console.log("IAMCALED");
    const tempItems = items.concat([]);
    tempItems[index] = {
      ...tempItems[index],
      upvotes: Number(tempItems[index].upvotes) + 1,
    };

    setItems(tempItems);
    array = items.concat([]);
  }

  return (
    <div>
      <Header />
      {items.map((contact, index) => {
        return (
          <Card
            key={contact.key}
            id={contact.id}
            title={contact.title}
            date={contact.date}
            url={contact.url}
            comments={contact.comments}
            upvotes={contact.upvotes}
            increment={increment}
            changeUrl={changeUrl}
            index={index}
          />
        );
      })}
    </div>
  );
}

function useFetchData() {
  return array;
}

withRouter(Landing);
export { useFetchData };
