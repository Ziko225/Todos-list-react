import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Main from "./Main"
import "./index.css";
import { useState } from "react";

function App() {
  const [hideCheck, setHideCheck] = useState(false);

  const toggleHideCheck = () => {
    setHideCheck(hideCheck => ! hideCheck);
  }


  const tasks = [
    { id: 1, content: "task1", check: true },
    { id: 2, content: "task2", check: false },
  ]

  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        buttons={<Buttons tasks={tasks} hideCheck={hideCheck} toggleHideCheck={toggleHideCheck}/>}
        content={<Tasks tasks={tasks} hideCheck={hideCheck} />}
      />
    </Main>
  );
}

export default App;
