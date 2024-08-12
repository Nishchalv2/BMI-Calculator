import { useMemo } from "react";
import { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(80);
  const [weight, setWeight] = useState(50);
  const [bmi, setBmi] = useState(0);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleBMI = useMemo(() => {
    const heightInMeters = height / 100;
    const weightInKg = weight;
    setBmi(weightInKg / heightInMeters ** 2);
  }, [height, weight]);

  return (
    <div>
      <div>
        <h1>BMI Calculator</h1>
        <div>
          <label htmlFor="">Weight : </label>
          <input
            type="range"
            max="150"
            min="40"
            step={1}
            value={weight}
            onChange={handleWeight}
          />
          <span>{weight} kg</span>
        </div>
        <div>
          <label htmlFor="">Height : </label>
          <input
            type="range"
            max="200"
            min="70"
            step={1}
            value={height}
            onChange={handleHeight}
          />
          <span>{height} cm</span>
        </div>
      </div>
      <div>
        <h3>BMI : </h3>
        <button onChange={handleBMI}>{bmi.toFixed(2)}</button>
      </div>
    </div>
  );
};

export default BMICalculator;
