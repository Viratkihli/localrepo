import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle completed status
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>

      {/* Input + Add Button */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {/* Task List */}
      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "70%",
    fontSize: "16px",
  },
  addBtn: {
    padding: "8px 12px",
    fontSize: "16px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
};

export default App;
