import React from "react";
import List_items from "./List_items";

const Todo = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="relative z-10 h-3/4 w-11/12 sm:w-1/2 flex flex-col items-center  bg-white rounded-lg shadow-lg p-5 gap-10">
        <div className="flex items-center bg-gray-200 rounded-full h-12 w-2xl justify-between">
          <input
            className="bg-transparent outline-none border-0 p-3 w-3/4 text-lg"
            type="text"
            placeholder="Enter new task"
          />
          <button className="bg-blue-600 text-white text-lg h-12 rounded-full w-1/4 cursor-pointer duration-200 active:brightness-150 hover:brightness-110">
            Add
          </button>
        </div>
        <div>
          <List_items />
        </div>
      </div>
    </div>
  );
};

export default Todo;
