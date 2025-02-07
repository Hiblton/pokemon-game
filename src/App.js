import classes from "./App.module.css";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import PokemonCard from "./components/PokemonCard/PokemonCard";

import BgUrl from "./assets/bg3.jpg";
import CardBackSideImg from "./assets/card-back-side.jpg";

import pokemons from "./pokemons.json";

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout id="rules" title="Rules" urlBg={BgUrl}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
      </Layout>
      <Layout id="cards" title="Cards" colorBg="antiquewhite">
        <div className={classes.flex}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              type={pokemon.type}
              name={pokemon.name}
              img={pokemon.img}
              values={pokemon.values}
              cardBackSideImg={CardBackSideImg}
            />
          ))}
        </div>
      </Layout>
      <Layout id="about" title="About" urlBg={BgUrl} />
      <Footer />
    </>
  );
}

export default App;
