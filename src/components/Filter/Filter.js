import "./Filter.css";
// Show filters on page
const Filter = () => {
  return (
    <div id="filterGroup">
      <strong>Filter:</strong>
      <label>
        <input type="checkbox" name="Netherlands" value="1" id="netherlands" />
        The Netherlands
      </label>
      <label>
        <input
          type="checkbox"
          name="International"
          value="2"
          id="international"
        />
        International
      </label>
    </div>
  );
};

export default Filter;
