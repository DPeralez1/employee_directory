import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex justify-center space-x-2 py-3"
      onSubmit={() => {
        navigate("/dictionary/" + word); //could have done encodeURIComponent(word)
      }}
    >
      <input
        className="shrink  min-w-0 px-2 py-1 rounded" // higher box and rounded corners
        placeholder="Placeholder..."
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}
