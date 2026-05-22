import Section1 from "../components/Section1.jsx";
import Section2 from "../components/Section2.jsx";

const App = () => {
  const user = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661412978231-b87d3fe5407c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661598503906-011f2707594e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Unbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661665318707-d681aa75e137?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
    },
  ];
  return (
    <div>
      <Section1 user = {user}/>
      <Section2 />
    </div>
  );
};

export default App;
