import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <Header />
          <TodoList />
        </div>
      </body>

    </div>
  );
}

export default App;
