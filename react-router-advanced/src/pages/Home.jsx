import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/blog">Blog</Link> |{" "}
        <Link to="/profile/details">Profile</Link>
      </nav>
    </div>
  );
}
