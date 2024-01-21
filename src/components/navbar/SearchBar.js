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
      <Form id="form-searchbar">
        <Form.Group>
          <Form.Label id="searchbar-label">Type your search query</Form.Label>
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
