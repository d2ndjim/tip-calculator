import Calculator from "./components/Calculator";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-10 md:mt-0 md:h-screen">
      <img className="w-20 md:w-16" src={logo} alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
