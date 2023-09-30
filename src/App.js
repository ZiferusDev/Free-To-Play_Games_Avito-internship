import styles from "./styles/App.module.css";
import GameList from "./components/GameList";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className={styles.App}>
    Ну и где
      <GameList>

      </GameList>
    </div>
  );
}

export default App;
