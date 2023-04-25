import Calculator from "./components/Calculator";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="flex md:mt-0 mt-16 md:h-screen flex-col items-center justify-center gap-10">
      <img className="md:w-16 w-20" src={logo} alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
