import { useState, useEffect } from "react";

// Show title on page
const Title = () => {
  const [topic, setTopic] = useState("corona");

  useEffect(() => {
    console.log(`It's ${topic} around here!`);
  }, [topic]);

  /* 
   |  ---------------------------------------------------------------------------------------
   |  The second argument in the useEffect function is a dependency array
   |  If u pass an empty array the props & state will always have the initial values, 
   |  as a result of that the effect function will not be called again.
   |  
   |  By passing a state value in the dependency array, it will check to see if the state 
   |  has changed, if that is the case then the effect function will be called again.
   |  
   |  ---------------------------------------------------------------------------------------
  */

  return (
    <>
      <h1>
        Amount of <span>{topic}</span> related articles by publisher
      </h1>
      <input type="text" name="topic" id="TopicInput" />
      <button
        type="button"
        onClick={() => {
          // If the text field is not empty then take the value and set it as the new topic
          // if (document.querySelector("#TopicInput").value) {
          //   setTopic(document.querySelector("#TopicInput").value);
          // }
          setTopic(document.querySelector("#TopicInput").value);
        }}
      >
        Change
      </button>
    </>
  );
};

export default Title;
