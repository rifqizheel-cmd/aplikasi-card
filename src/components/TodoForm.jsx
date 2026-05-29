import { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const TodoForm = ({ onAddTask, searchTerm, onSearchChange, filter, onFilterChange }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask(input.trim());
      setInput('');
    }
  };

  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Tambah tugas baru..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="add-btn">
            <FaPlus />
            <span>Tambah</span>
          </button>
        </div>
      </form>

      <div className="search-filter-wrapper">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Cari tugas..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-wrapper">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Semua
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => onFilterChange('completed')}
          >
            Selesai
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => onFilterChange('pending')}
          >
            Belum Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
