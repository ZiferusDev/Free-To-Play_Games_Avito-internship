import styles from "../styles/app.module.css";
import GameList from "./GameList";
import Header from "./Header";

// Во всех основных компонентах всё должно быть зелёным, нужно меньше вёрстки!

function App() {
  return (
    <div className={styles.App}>
      <Header>
        
      </Header>
      <GameList></GameList>
    </div>
  );
}

export default App;
