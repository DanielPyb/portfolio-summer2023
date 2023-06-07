import Logo from "./Components/Logo";
import CardList from "./Components/cardList/CardList";
import Footer from "./Components/footer/Footer";
import Modal from "./Components/modal/Modal";

function App() {
  return (
    <>
      <div className="background">
        <Logo />
        <h2>School work</h2>
        <CardList />

        <Modal />
      </div>
      <Footer />
    </>
  );
}

export default App;
