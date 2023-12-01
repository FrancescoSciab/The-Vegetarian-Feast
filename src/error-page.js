import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 402) {
    <p>Looks like our API is down</p>
  } else {
    <i>{error.status || error.message}</i>
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurrrrred.</p>
      <p>{
          error.status == 402
          ?
          error.status || error.message
          :
          "Looks like our API is down"
          
          }
      </p>
    </div>
  );
}