import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTask = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'completed') return matchesSearch && todo.completed;
    if (filter === 'pending') return matchesSearch && !todo.completed;
    return matchesSearch;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="home">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">{todos.length}</span>
              <span className="stat-label">Total Tugas</span>
            </div>
            <div className="stat-item completed">
              <span className="stat-number">{completedCount}</span>
              <span className="stat-label">Selesai</span>
            </div>
            <div className="stat-item pending">
              <span className="stat-number">{pendingCount}</span>
              <span className="stat-label">Belum Selesai</span>
            </div>
          </div>

          <div className="todo-card">
            <h1 className="todo-title">Daftar Tugas</h1>
            <TodoForm
              onAddTask={addTask}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filter={filter}
              onFilterChange={setFilter}
            />
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
