import React from 'react';
import GameCard from './GameCard';
import styles from '../styles/GameList.module.css'


import gta_pic from "../media/preview_GTA.jpg"
import nfs_pic from "../media/preview_NFS.jpg"
import dota_pic from "../media/preview_DOTA.jpg"

/* Замысел: зачем выводить все игры разом? 
    Мы пробрасываем заброс на сервер, согласно фильтрам, указанным пользователем
    Затем подгружаем, условно, массив из ~ 50-100 объектов 
    ? но там пикчи, может много весить, так что и 25-30, посмотрим
    дальше либо после промотки страницы, либо по нажатию на кнопку, 
    пользователю будут показываться кусочки игр
    как только игр в массиве осталось, допустим, на одну прокрутку,
    пробрасываем новый запрос
*/

export default function GameList() {
    // тут логика, запросы, все дела
    // итогом запроса будет массив объектов

    const CARDS = [
        {
            name: "GTA V",
            releaseDate: "17-09-2013",
            publisher: "RockStar",
            genre: "action",
            pictureLink: gta_pic
        },
        {
            name: "Need for Speed: Most Wanted",
            releaseDate: "15-11-2005",
            publisher: "Electronic Arts",
            genre: "racing",
            pictureLink: nfs_pic
        },
        {
            name: "Dota 2",
            releaseDate: "09-07-2013",
            publisher: "Valve",
            genre: "MOBA",
            pictureLink: dota_pic
        }
    ];

    return (
    <div className={styles.template}>
        {
            CARDS.map(game =>
                <GameCard
                    name = {game.name}
                    releaseDate = {game.releaseDate}
                    publisher = {game.publisher}
                    genre = {game.genre}
                    pictureLink = {game.pictureLink}
                />
            )
        }
    </div>
  )
}
