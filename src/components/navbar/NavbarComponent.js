import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SearchItems from "./SearchBar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Animate } from "react-simple-animate";
import Logo from "./Logo";

//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent(props) {
  const client = props.client;
  const location = useLocation();
  const { pathname } = location;
  const homePage = pathname === "/";

  const [searchActive, setSearchActive] = useState(false);

  function handleClick() {
    setSearchActive(!searchActive);
  }

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Navbar>
      {searchActive ? (
        <Animate
          play
          start={{ opacity: 0, filter: "blur(10px)" }}
          end={{ opacity: 1, filter: "blur(0)" }}
        >
          <SearchItems client={client} />
        </Animate>
      ) : (
        <Nav>
          <Navbar.Brand>
            <Link to="/" style={{ display: "flex" }}>
              <Logo />
            </Link>
          </Navbar.Brand>
          {!homePage && (
            <Button id="back-button" onClick={goBack}>
              &#60; Back
            </Button>
          )}
        </Nav>
      )}

      <Button id="search-icon" onClick={handleClick}>
        {searchActive ? (
          <span>
            <Link to="/">
              <span class="material-symbols-outlined">close</span>
            </Link>
          </span>
        ) : (
          <span class="material-symbols-outlined">search</span>
        )}
      </Button>
    </Navbar>
  );
}
