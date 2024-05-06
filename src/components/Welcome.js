import Logo from "./navbar/Logo";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Link to="/" className="d-flex justify-content-center m-auto">
      <Logo />
    </Link>
  );
}
