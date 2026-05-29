import { FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="checkmark">
            <FaCheck />
          </span>
        </label>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
