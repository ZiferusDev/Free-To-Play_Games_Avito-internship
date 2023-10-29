import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import styles from "../styles/gameList.module.css";

// media
import gta_pic from "../media/preview_GTA.jpg";
import nfs_pic from "../media/preview_NFS.jpg";
import dota_pic from "../media/preview_DOTA.jpg";
import assassin_pic from "../media/preview_AssassinValhalla.png";



export default function Games(props) { // data to show
    const CARDS = [ // Массив из 8ми, ещё раз, 8-МИ ИГР
    {
        title: "GTA V",
        release_date: "17-09-2013",
        publisher: "RockStar",
        genre: "Action",
        thumbnail: gta_pic
    },
    {
        title: "Need for Speed: Most Wanted",
        release_date: "15-11-2005",
        publisher: "Electronic Arts",
        genre: "Racing",
        thumbnail: nfs_pic
    },
    {
        title: "Dota 2",
        release_date: "09-07-2013",
        publisher: "Valve",
        genre: "MOBA",
        thumbnail: dota_pic
    },
    {
        title: "Assassin's Creed Valhalla",
        release_date: "10-11-2020",
        publisher: "Ubisoft",
        genre: "ACtion",
        thumbnail: assassin_pic
    },
    {
        title: "GTA V",
        release_date: "17-09-2013",
        publisher: "RockStar",
        genre: "Action",
        thumbnail: gta_pic
    },
    {
        title: "Need for Speed: Most Wanted",
        release_date: "15-11-2005",
        publisher: "Electronic Arts",
        genre: "Racing",
        thumbnail: nfs_pic
    },
    {
        title: "Dota 2",
        release_date: "09-07-2013",
        publisher: "Valve",
        genre: "MOBA",
        thumbnail: dota_pic
    },
    {
        title: "Assassin's Creed Valhalla",
        release_date: "10-11-2020",
        publisher: "Ubisoft",
        genre: "Action",
        thumbnail: assassin_pic
    }
    ];

    const [loadedCARDS, setLoadedCARDS] = useState([]);
    // console.log(myCards);

    // ! if(!props.param) return 0; 

    // console.log(loadedCARDS);

    return (
        <div className={styles.games}>
            { 
            // здесь должна быть логика аля !games ? "Ничего не найдено" : список игр 
                CARDS.map(game =>
                    <GameCard
                        name = {game.title}
                        releaseDate = {game.release_date}
                        publisher = {game.publisher}
                        genre = {game.genre}
                        pictureLink = {game.thumbnail}
                    />
                )
            }
        </div>
  )
}
