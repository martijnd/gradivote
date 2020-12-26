import Nav from "../components/nav";
import { DataStore } from "aws-amplify";
import { Gradient } from "../models";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [gradients, setGradients] = useState([]);

  async function fetchGradients() {
    const gradientData = await DataStore.query(Gradient);
    setGradients(gradientData);
  }

  async function createPost() {
    await DataStore.save(
      new Gradient({
        "content": "Lorem ipsum dolor sit amet",
        "userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
        "Votes": []
      })
    );
  }

  useEffect(() => {
    fetchGradients();
  }, [])

  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Gradivote
        </h1>
        {gradients && gradients.map(gradient => <h3 key={gradient.id}>{gradient.content}</h3>)}
        <button onClick={createPost}>Create post</button>
      </div>
    </div>
  );
}
