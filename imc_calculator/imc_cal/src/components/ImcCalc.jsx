import React, { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const handleHeightChange = (e) => {
    const updatedValue = e.target.value.substr(0, 4);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = e.target.value.substr(0, 4);
    setWeight(updatedValue);
  };

  return (
    <div>
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo 1,75"
                onChange={(e) => handleHeightChange(e)}
                value={height}
                maxLength={4}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70,5"
                onChange={(e) => handleWeightChange(e)}
                value={weight}
                maxLength={4}
              />
            </div>
          </div>
          <div className="action-control">
            <Button
              id="calc-btn"
              text="Calcular"
              action={(e) => calcImc(e, height, weight)}
            />
            <Button id="clear-btn" text="Limpar" action={(e) => clearForm(e)} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImcCalc;
