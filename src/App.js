import "./App.css";
import ListaTareas from "./components/Listatareas";
import logo from "./img/logo.webp";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="contenedor-logo">
          <h1>App Tarea TodoList</h1>
          <img alt="logo" src={logo} className="logo-img" />
        </div>
        <div className="contenedor-lista-tarea">
          <h1>Mis tareas</h1>
          <ListaTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
