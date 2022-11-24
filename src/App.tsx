import * as S from "./App.styles";
import Title from "./components/title/Title";
import DubSiren from "./components/dubSiren/DubSiren";
import PatchBay from "./components/patchBay/PatchBay";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <S.App>
      <Title />
      <DubSiren />
      <PatchBay />
      <Footer />
    </S.App>
  );
};

export default App;
