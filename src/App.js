import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <MainPage />
      </div>
    </>
  );
}

export default App;
