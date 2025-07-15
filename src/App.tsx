import { useEffect, useState } from "react";
import "./styles.css";
import { trafficData } from "./trafficData";

const Traffic = (data) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (activeIndex === 1) {
      setTimeout(() => {
        setForward(true);
        setActiveIndex(2);
      }, 3000);
    } else if (activeIndex === 2) {
      setTimeout(() => {
        if (forward) {
          setActiveIndex(3);
        } else {
          setActiveIndex(1);
        }
      }, 1000);
    } else if (activeIndex === 3) {
      setTimeout(() => {
        setForward(false);
        setActiveIndex(2);
      }, 1000);
    }
  }, [activeIndex]);

  return (
    <div className="container">
      {trafficData?.map((t, index) => (
        <div
          className="light"
          style={{ background: activeIndex === t.id ? `${t.color}` : "none" }}
        ></div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Traffic Signal</h1>
      <Traffic data={trafficData} />
    </div>
  );
}
