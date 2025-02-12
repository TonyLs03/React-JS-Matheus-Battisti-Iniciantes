//Componente PAI

import "./App.css";

//importar o componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <>
      <h1>Hello World React o/</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="Azulyno" idade={35} />
    </>
    
  )
}

export default App
