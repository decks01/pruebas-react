import React, { useState } from "react";
import ComponentsRender from "./componentsRender";
import Button from "../components/Button";

const Children2 = () => {
  // onChange con vanilla JavaScript
  function updateValue(e) {
    console.log(e.target.value);
  }

  // onChange con State
  const [nombre, setNombre] = useState("");
  function handleChange(e) {
    setNombre(e.target.value);
    console.log(nombre);
  }
  function submit(e) {
    e.preventDefault();
  }

  return (
    <ComponentsRender>
      <div>
        <Button
          width={"300"}
          height={"50"}
          name={"Enviar data"}
          class="black"
        />
        {/* class blue, grey, green, yellow*/}

        <form className="col-md-6">
          <div className="form-group ">
            <div>ONCHANGE con JavaScript</div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={updateValue}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <div>ONCHANGE con REACT</div>
            <label htmlFor="Nombre">Nombre</label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="Nombre"
              placeholder="Nombre"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </ComponentsRender>
  );
};

export default Children2;
