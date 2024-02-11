import React, { useEffect, useState } from "react";

export default function Todoapp() {
  const [newtodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [texttodo, setTexttodo] = useState("");
  const [edittodo, setEdittodo] = useState([]);

  function addFunc() {
    setTodos([...todos, newtodo]);
    setNewtodo("");
  }

  function delFunc(index) {
    const delItem = [...todos];
    delItem.splice(index, 1);
    setTodos(delItem);
  }

  useEffect(() => {
    localStorage.setItem("App Name:", JSON.stringify(todos));
  });
  //====================================

  function updateFunc() {
    const update = [...todos];
    update[edittodo] = texttodo;
    setTodos(update);
    setEdittodo(null);
    setTexttodo("");
  }

  function editFunc(index, item) {
    setEdittodo(index);
    setTexttodo(item);
  }
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <input
          id="main_input"
          type="text"
          required
          placeholder="Enter Your Massages"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        />
        <button onClick={addFunc} className="add">
          <i class="fa-solid fa-plus"></i>
        </button>

        {todos.map((item, index) => {
          return (
            <div key={index} className="list">
              {edittodo === index ? (
                <>
                  <input
                    id="input_upd"
                    type="text"
                    value={texttodo}
                    onChange={(e) => setTexttodo(e.target.value)}
                  />
                  <button onClick={updateFunc}>
                    <i class="fa-solid fa-angle-right"></i>
                  </button>
                </>
              ) : (
                <>
                  <h2>{item}</h2>
                  <button onClick={() => editFunc(index, item)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </>
              )}

              <button onClick={() => delFunc(index)}>
                <i class="fa-solid fa-trash-arrow-up"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
