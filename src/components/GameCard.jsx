import React from 'react'
import styles from "../styles/GameCard.module.css";

/*
    название
    дата релиза (в российском формате)
    издатель
    жанр
    картинка
*/

class Card {
    constructor(name, releaseDate, publisher, genre, pictureLink) { // всё это должно лежать на сервере
        this.name = name;
        this.releaseDate = releaseDate;
        this.publisher = publisher;
        this.genre = genre;
        this.pictureLink = pictureLink;  
    }
}

const exampleCard = {
    name: "Какая-то игра",
    releaseDate: "Недавно",
    publisher: "Очень влиятельный",
    genre: "Самый интересный",
    pictureLink: "../../media/preview_GTA.jpg"
}

export default function GameCard(props) { 
    return (
    <div className={styles.card}>
        <img className={styles.pic} src={props.pictureLink} alt="game cover" />
        <div className={styles.text}>
            <p className={styles.head}>Название: {props.name}</p>
            <p className={styles.description}>Описание: Это крутая игра</p>
            <p className={styles.genre}>Жанр: {props.genre}</p>
            <p className={styles.release}>Выпущена: {props.releaseDate}</p>
        </div>
    </div>
  )
}
