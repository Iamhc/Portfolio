import "../App.css";
//import { Unity, useUnityContext } from "react-unity-webgl";
//import ui from "./module.mjs";
import Iframe from "./Iframe";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Summary from "./Summary";
import Heading from "./Heading";
import Contact from "./Contact";
function Home() {
  return (
    <div id="Home">
      <Links />
      <Bar />

      <Iframe />
      <Summary />
      <Heading />
    </div>
  );
}

export default Home;
