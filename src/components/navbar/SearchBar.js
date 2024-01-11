import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

export default function SearchItems(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // delaying api request when searching
  const [debouncedQuery] = useDebounce(query, 500);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    navigate(debouncedQuery);
  }, [debouncedQuery, navigate]);

  return (
    <>
      <Form style={{ width: "100%", marginRight: "16px" }}>
        <Form.Group>
          <Form.Label>Type your search query</Form.Label>
          <Form.Control
            type="search"
            placeholder="Search"
            controlid="header-search"
            name="query"
            value={query}
            onChange={handleChange}
            autoFocus
          />
        </Form.Group>
      </Form>
    </>
  );
}
