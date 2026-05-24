import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   if (count <= 0) {
  //     setCount(0);
  //   }else {
  //   setCount(count - 1);
  //   }
  // }
  // function reset(){
  //   setCount(0);
  // }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [show, setShow] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setShow(true);
  // }

  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10">
      {/* <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
      {/* <form
        action=""
        onSubmit={handleSubmit}
        className="bg-gray-200 flex flex-col gap-5 p-10"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl py-4 px-3 border-2 border-gray-400"
          placeholder="Enter Your Name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="rounded-xl py-4 px-3 border-2 border-gray-400"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <label htmlFor="pass">Password:</label>
        <input
          type="text"
          className="rounded-xl py-4 px-3 border-2 border-gray-400"
          id="pass"
          placeholder="Enter Your Password"
        />
        <button
          type="submit"
          className="p-3 bg-black text-white font-bold rounded-full"
        >
          Submit
        </button>
      </form>
      {show && (
        <div>
          <h3>hello ,{name}!!!!!</h3>
          <h3>Your email Is: {email}</h3>
        </div>
      )} */}

      <button
        onClick={handleLike}
        className={`
    px-15 py-10 rounded-full
    flex gap-4 text-2xl items-center justify-center
    text-white font-[700]
    cursor-pointer
    hover:translate-y-[-2px]
    transition-all duration-300

    ${
      like
        ? "bg-red-400 hover:shadow-[6px_6px_2px_pink]"
        : "bg-gray-600 hover:shadow-[4px_4px_3px_black]"
    }
  `}
      >
        <ThumbsUp />
        Like
      </button>
    </div>
  );
};

export default App;
