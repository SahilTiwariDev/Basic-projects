import React, { useRef, useState } from "react";
import List_items from "./List_items";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center gap-5">
      <div className="relative z-10 h-1/12 w-11/12 sm:w-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-10">
        <div className="flex items-center bg-gray-200 rounded-full h-12 w-full justify-between">
          <input
            ref={inputRef}
            className="bg-transparent outline-none border-0 p-3 w-3/4 text-lg"
            type="text"
            placeholder="Enter new task"
          />
          <button
            onClick={add}
            className="bg-blue-600 text-white text-lg h-12 rounded-full w-1/4 cursor-pointer duration-200 active:brightness-200 hover:brightness-110"
          >
            Add
          </button>
        </div>
      </div>
      <div className="relative z-10 h-3/5 w-11/12 sm:w-1/2 flex flex-col items-center bg-white rounded-lg shadow-lg p-5 gap-10">
        <div>
          {todoList.map((item, index) => {
            return <List_items key={index} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
