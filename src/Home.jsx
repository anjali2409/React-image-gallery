import { useRef } from "react";
import About from "./about";

function Home() {
  const inputRef = useRef();

  return (
    <div>
      <About ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default Home;
