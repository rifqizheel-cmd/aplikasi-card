import TodoItem from './TodoItem';
import { FaClipboard } from 'react-icons/fa';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <FaClipboard className="empty-icon" />
        <p className="empty-text">Belum ada tugas</p>
        <p className="empty-subtext">Tambahkan tugas baru untuk memulai</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
