// About page
const About = () => {
  return (
    <div>
      <h1>About the app</h1>
      <img
        src="https://i.postimg.cc/rmLYxdnW/concept-with-hover-cut.gif"
        alt="the app"
      />
      <p>
        This website allows u to see the number of corona-related articles that
        have been published by media outlets in recent times. The data is shown
        through a proportional area chart. Some features:
      </p>

      <ul>
        <li>Hover over the circles to see the number of published articles</li>
        <li>Filter on local/foreign publishers</li>
      </ul>
    </div>
  );
};

export default About;
