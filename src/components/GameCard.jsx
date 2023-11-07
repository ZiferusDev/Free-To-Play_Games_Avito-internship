import React from 'react'
import styles from "../styles/gameCard.module.css";

/*
    название
    дата релиза (в российском формате)
    издатель
    жанр
    картинка
*/

class Card { // ! убрать. Должны генерировать разные объекты
    constructor(name, releaseDate, publisher, genre, pictureLink) { // всё это должно лежать на сервере
        this.name = name;
        this.releaseDate = releaseDate;
        this.publisher = publisher;
        this.genre = genre;
        this.pictureLink = pictureLink;  
    }
}

const shortenText = (str, n) => { // эта функция сокращает текст, если он слишком длинный
    if(str.length > n) {
        while(/\W|_/g.test(str[n-1])) {
            n--
        }
        return str.slice(0,n) + "..."
    } else {
        return str
    }
}

export default function GameCard(props) { 
    return (
        // Потом будет роутинг, сейчас надо якорь :)
    <div onClick={() => {window.location.assign('#')}} className={styles.card}>
        <div className={styles.gamePreview}>
            <img className={styles.pic} src={props.pictureLink ? props.pictureLink : ""} alt="no picture" />
        </div>
        <div className={styles.info}>
            <div className={styles.heading}>{ shortenText(props.name, 16) }</div>
            <div className={styles.description}>Publisher: {shortenText(props.publisher, 18)}</div>
            <div className={styles.description}>Released: {props.releaseDate}</div>
            {/* Прикольно было бы добавить несколько жанров и попытаться их впихнуть */}
            <div className={styles.genre}>{props.genre}</div> 
        </div>
    </div>
  )
}
