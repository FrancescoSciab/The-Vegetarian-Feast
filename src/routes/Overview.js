import { useParams } from "react-router-dom"


export default function Ingredients() {
const { id } = useParams();
    return (
        <p>Result: {id}</p>
    )
}