import "./index.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function App() {
  const squareOne = useRef(null);
  const squareTwo = useRef(null);
  const squareThree = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: 0, delay: 0.5 });

    timeline.to(squareOne.current, { x: 200, duration: 1 });
    timeline.to(squareTwo.current, { x: 400, duration: 1 });
    timeline.to(squareThree.current, { x: 600, duration: 1 });
  }, []);

  return (
    <div className="App">
      <h3>hi</h3>
      <div className="square squareOne" ref={squareOne}></div>
      <div className="square squareTwo" ref={squareTwo}></div>
      <div className="square squareThree" ref={squareThree}></div>
    </div>
  );
}

export default App;
