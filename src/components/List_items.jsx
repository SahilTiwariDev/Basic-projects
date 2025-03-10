import React from "react";
import unclicked from "../assets/unclicked_icon.png";
import clicked from "../assets/clicked_icon.png";
import deleteIcon from "../assets/delete_icon.png";

const List_items = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="flex w-2xl justify-between items-center p-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex gap-2"
      >
        <img
          className="h-7 w-7 cursor-pointer duration-200 active:scale-125 hover:scale-110"
          src={isCompleted ? clicked : unclicked}
          alt="unclicked_icon"
        />
        <p className={`text-lg Fcursor-pointer ${isCompleted ? "line-through" : ""}`}>{text}</p>
      </div>
      <div>
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          className="h-7 w-7 cursor-pointer duration-200 active:scale-125 hover:scale-110"
          src={deleteIcon}
          alt="deleteIcon_icon"
        />
      </div>
    </div>
  );
};

export default List_items;
