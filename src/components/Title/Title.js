import { useState } from "react";

// Show title on page
const Title = () => {
  const [topic, setTopic] = useState("corona");

  console.log("This is the topic:", topic);

  return (
    <>
      <h1>
        Amount of <span>{topic}</span> related articles by publisher
      </h1>
      <input type="text" name="topic" id="TopicInput" />
      <button
        type="button"
        onClick={() => {
          if (document.querySelector("#TopicInput").value) {
            setTopic(document.querySelector("#TopicInput").value);
          }
        }}
      >
        Change
      </button>
    </>
  );
};

export default Title;
