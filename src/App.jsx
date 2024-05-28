import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "flowbite-react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    //make a gate request in the spring boot

    axios
      .get("http://localhost:8080/about")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div>
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <h1 className="bg-blue-500 items-center hover:bg-orange-600 text-pink-600">
        Message from Spring Boot:
      </h1>
      <Button>Click me</Button>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <p className="text-sky-700 underline">{message}</p>
    </div>
  );
};

export default App;
