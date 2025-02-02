"use client";
import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Card from "./components/Card";
import useTodoList from "../../hooks/useTodoList";

const Home: React.FC = () => {
  const { todoList, addTodo, deleteTodo, editTodo } = useTodoList();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const handleAddTodo = () => {
    const newTodo = { title, description, status };
    addTodo(newTodo);
    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  const handleEditTodo = (index: number) => {
    const todo = todoList[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  // Save changes and update the todo item
  const handleSaveChanges = () => {
    if (editingIndex !== null) {
      editTodo(editingIndex, { title, description, status });
      setIsModalOpen(false);
      setTitle("");
      setDescription("");
      setStatus(status);
    }
  };

  const filteredTodos = todoList.filter((todo) =>
    todo.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border border-amber-200 rounded-xl h-full m-[2rem] p-[1rem]">
      <div className="grid grid-cols-[1fr_2fr] gap-x-[2rem]">
        <div className="grid">
          <Profile
            firstName="Podjanin"
            lastName="Wachirawittayakul"
            age={20}
            birthDate="07/10/2004"
            sex="Male"
            timestamp={formatTimestamp(Date.now())}
            status="Single"
          />
        </div>
        {/* Add Todo Section */}
        <div className="p-[2rem] border rounded-lg shadow-md bg-gray-100 text-black">
          <h2 className="text-3xl font-bold mb-[2rem]">Add Todo</h2>
          <div>
            {/* Title Input Field */}
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />

            {/* Description Input Field */}
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-[2rem] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />

            {/* Add Button */}
            <button
              onClick={() => {
                if (!title || !description) {
                  alert("Please enter both title and description.");
                } else {
                  handleAddTodo();
                }
              }}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Todo List Section */}
      <div className="mt-[2rem]">
        <div className="font-bold text-2xl pl-[2rem] pt-[2rem]">Todo List</div>
        {/* Search Section */}
        <div className="flex ml-[2rem] mt-[2rem] text-black justify-start">
          <input
            type="text"
            placeholder="Search by Status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-2/4 p-2 border rounded mb-4"
          />
        </div>
        <div className="grid grid-cols-2 p-[2rem] gap-x-[2rem]">
          {filteredTodos.map((todo, index) => (
            <div key={index} className="mb-[1rem]">
              <Card
                title={todo.title}
                description={todo.description}
                status={todo.status}
                onDelete={() => deleteTodo(index)}
                onEdit={() => {
                  handleEditTodo(index);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-black">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Edit Todo
            </h2>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded mb-2 h-24 resize-none"
            ></textarea>

            {/* Status Dropdown */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="Canceled">Canceled</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={
                  () => {
                    if (!title || !description) {
                      alert("Please enter both title and description.");
                    } else {
                      handleSaveChanges();
                    }
                  }
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
