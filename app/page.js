
import Navbar from "./components/Navbar";
import Home from "./components/Home";
export default function Main() {
  return (
    <div>
      <header className=" graident-bg h-auto md:h-screen w-full overflow-hidden">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}
