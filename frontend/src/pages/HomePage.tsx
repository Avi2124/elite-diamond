import { useEffect, useState } from "react";
import api from "../services/api";

const HomePage = () => {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await api.get("/health");

        setMessage(response.data.message);
      } catch {
        setMessage("Unable to connect to backend");
      }
    };

    checkBackend();
  }, []);

  return (
    <main>
      <h1>Elite Diamond</h1>

      <p>Diamond Trading & Management Platform</p>

      <p>{message}</p>
    </main>
  );
};

export default HomePage;