import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";

import BgUrl from "./assets/bg3.jpg";

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout
        id="1"
        title="This is title"
        descr="This is Description!"
        urlBg={BgUrl}
      />
      <Layout
        id="2"
        title="This is title"
        descr="This is Description!"
        colorBg="antiquewhite"
      />
      <Layout
        id="3"
        title="This is title"
        descr="This is Description!"
        urlBg={BgUrl}
      />
      <Footer />
    </>
  );
}

export default App;
