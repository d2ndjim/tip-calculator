import Calculator from "./components/Calculator";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <img className="w-16" src={logo} alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
