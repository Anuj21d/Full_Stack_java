import Card from "../components/Card";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
