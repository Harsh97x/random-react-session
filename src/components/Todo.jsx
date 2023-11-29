import "./CSS/Todo.css";
const Todo = () => {
  return (
    <div className="Todo">
      <div className="Todo-header">Todo List</div>
      <div className="Todo-add">
        <input
          type="text"
          placeholder="Enter your todo item"
          className="todo-input-item"
        />
        <div className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default Todo;
