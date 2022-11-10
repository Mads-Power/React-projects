import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container className="me-auto">
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              fill="#ffcc5c"
              d="m9.651 8.81 14.215.917a1 1 0 0 1 .906 1.24l-1.52 6.079a1 1 0 0 1-.97.757h-11.22"
            />
            <path
              fill="#ffcc5c"
              d="m9.651 8.81 14.215.917a1 1 0 0 1 .906 1.24l-1.52 6.079a1 1 0 0 1-.97.757h-11.22"
            />
            <path
              fill="#f7b546"
              d="m23.866 9.727-1.087-.07c.007.102.02.205-.007.311l-.952 3.807a4 4 0 0 1-3.881 3.03h-7.034l.157 1h11.219a1 1 0 0 0 .97-.757l1.52-6.079a1 1 0 0 0-.905-1.242z"
            />
            <path
              fill="none"
              stroke="#4c6d86"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M24.937 22.804H10.423c-.901 0-1.342-1.098-.693-1.721l.962-.923a1 1 0 0 0 .297-.863L9.185 6.663a1 1 0 0 0-.99-.859H6.062"
            />
            <path
              fill="none"
              stroke="#d5e5f1"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M13.438 25.804H9.5m11.938 0H18.5"
            />
            <circle cx="13.562" cy="24.804" r="1.5" fill="#617e95" />
            <circle cx="21.562" cy="24.804" r="1.5" fill="#617e95" />
            <circle cx="13.562" cy="24.804" r=".5" fill="#d5e5f1" />
            <circle cx="21.562" cy="24.804" r=".5" fill="#d5e5f1" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute", bottom: 0, right: 0,
              transform:"translate(25%,25%)"

            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
