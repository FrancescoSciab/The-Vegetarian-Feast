import { useRouteError } from "react-router-dom";

export default function ErrorPage(props) {
  const error = props.errorStatus


  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurrrrred.</p>
      <p>{
        error == 402
        ?
          "Reached API calls limit. Payment required. You can still check out the latest tik tok recipes below "
          :
          "Error"
      }</p>
    </div>
  );
}