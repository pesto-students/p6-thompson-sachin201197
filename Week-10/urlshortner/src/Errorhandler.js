import { useEffect, useState } from "react";

const ErrorHandler = (request) => {
  const [message, setMessage] = useState("");
  console.log(" I AM REUWS ", request.request.code);
  var message1 = request.request.message;
  //   useEffect(
  //     (message1) => {
  //       isError(message1);
  //     },
  //     [message1]
  //   );

  //   function isError(val) {
  //     return <div>You request is not fulfilled due to "{message1}"</div>;
  //   }
  //   return <>{<div>You request is not fulfilled due to "{message1}"</div>}</>;
};

export default ErrorHandler;
