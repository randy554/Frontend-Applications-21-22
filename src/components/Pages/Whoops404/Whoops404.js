import { Link, useLocation } from "react-router-dom";

// 404 page
const Whoops404 = () => {
  // Use location hook to get current page name (pathname)
  let location = useLocation();
  return (
    <div>
      <h1>Page: @{location.pathname} does not exist!</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Whoops404;
