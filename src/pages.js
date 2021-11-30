import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company web]</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/events">Events</Link>
    </div>
  );
}

export function Whoops404() {
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
}
