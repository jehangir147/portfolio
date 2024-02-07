import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <head>
        <title>my Portfolio</title>
      </head>
      <body>
        <Navbar />
        <Main />
        <About />
      </body>
    </div>
  );
}
