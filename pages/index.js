import ModalWindow from "../components/ModalWindow";
import { useState } from "react";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Open Modal Window</button>
      <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
