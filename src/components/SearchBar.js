import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";


export default function SearchItems(props) {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");

    const handleChange = event => {
        setQuery(event.target.value); 
    }

    //no need to cache
    useEffect(() => {
            query && props.client.get(`/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100&query=${query}`)
            .then(response => {
            //handle success
            setItems(response.data.results)
            })
            .catch(function(error) {
            // handle error
            console.log(error);
            })
            .finally(function() {
            // always executed 
            
            });
    }, [query])
    
    
    return (
        <>
            <Form style={{width: "100%", marginRight: "16px"}}>
                <Form.Group>
                    <Form.Label>Type your search query</Form.Label>
                    <Form.Control 
                        type="search" 
                        placeholder="Search" 
                        controlid="header-search"
                        name="s"
                        value={query}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
            

            {/* <CardGroup style={{flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {items.map((item) => (
            <Card key={item.id} style={{flex: "0 0 auto", maxWidth: "50%", margin: "0 16px 8px 0", }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body style={{
                borderBottomLeftRadius: "0.75rem",borderBottomRightRadius: "0.75rem"}}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {`itemType: ${item}`}
              </Card.Text>
              <Button variant="primary"><Link to={`overview/${item.id}`}>Go to: {item.id}</Link></Button>
            </Card.Body>
          </Card> 
        ))}
    </CardGroup> */}
        </>
        
    )
}
