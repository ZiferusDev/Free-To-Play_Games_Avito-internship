import styles from "../styles/app.module.css";
import GameList from "./GameList";
import Header from "./Header";


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
