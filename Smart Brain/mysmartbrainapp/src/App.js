import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
// import Particles from "react-particles-js";

// const ParticleOptions = {
//   params: {
//     polygon: {
//       enable: true,
//       type: "inside",
//       move: {
//         radius: 10,
//       },
//       url: "path/to/svg.svg",
//     },
//   },
// };

function App() {
  return (
    <div className="App">
      {/* <Particles params={ParticleOptions} /> */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
