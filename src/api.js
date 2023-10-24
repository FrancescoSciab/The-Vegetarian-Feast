import axios from "axios";

const client = axios.create({
    baseURL: "https://api.spoonacular.com",
  });

export async function loader() {
  const food = await client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&query=food&number=100");
  const randomFood = food.data.searchResults[0].results;
  return { randomFood }
}

export async function searchBarLoader() {
    const query = await client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&query=food&number=100");
  const result = query.data.searchResults[0].results;
  return { result }
}