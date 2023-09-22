import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/").then((response) => response.json());
    console.log("hello").then((data) => {
      setBackendData(data);
    });
  }, []);
  console.log(backendData);
  return (
    <>
      {backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </>
  );
}

export default App;
