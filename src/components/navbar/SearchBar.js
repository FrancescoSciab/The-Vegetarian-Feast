import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

export default function SearchItems(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  console.log(query);

  // delaying api request when searching
  const [debouncedQuery] = useDebounce(query, 500);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSearchParams({ q: query });
  };

  // do not add navigate in the dependency array to not trigger action when user clicks the card button
  useEffect(() => {
    navigate(`${encodeURIComponent(query)}`);
  }, [debouncedQuery]);

  return (
    <>
      <Form id="form-searchbar">
        <Form.Group>
          <Form.Label id="searchbar-label">Type your search query</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            controlid="header-search"
            value={query}
            onChange={handleChange}
            autoFocus
          />
        </Form.Group>
      </Form>
    </>
  );
}
