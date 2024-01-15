import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <head>
        <title>my Portfolio</title>
      </head>
      <body>
        <Navbar></Navbar>
      </body>
    </div>
  );
}
