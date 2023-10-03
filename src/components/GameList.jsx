import {React, useState } from 'react';
import GameCard from './GameCard';
import styles from "../styles/gameList.module.css";

import { Pagination, ConfigProvider, Radio, Select } from 'antd';

import gta_pic from "../media/preview_GTA.jpg";
import nfs_pic from "../media/preview_NFS.jpg";
import dota_pic from "../media/preview_DOTA.jpg";
import assasin_pic from "../media/preview_AssasinValhalla.png";

const CATEGORIES = ["MOBA", "Action", "Racing", "Aa", "Bb", "Cc", "Dd", "Zz", "Xx"];


export default function GameList() {
    // // Фильтр по платформе
    // const [value1, setValue1] = useState('All');
    // const [value2, setValue2] = useState('All');
    // const [value3, setValue3] = useState('All');

    // const onChange1 = ({ target: { value } }) => {
    //     setValue1(value);
    //   };
    // const onChange2 = ({ target: { value } }) => {
    //     setValue2(value);
    // };
    // const onChange3 = ({ target: { value } }) => {
    //     setValue3(value);
    // };

    // categories вынимается GET запросом к Free-To-Play-Games API
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = CATEGORIES.filter((o) => !selectedItems.includes(o));


      // тут логика, запросы, все дела
    // итогом запроса будет массив объектов

    const CARDS = [ // Массив из 8ми, ещё раз, 8-МИ ИГР
      {
          name: "GTA V",
          releaseDate: "17-09-2013",
          publisher: "RockStar",
          genre: "Action",
          pictureLink: gta_pic
      },
      {
          name: "Need for Speed: Most Wanted",
          releaseDate: "15-11-2005",
          publisher: "Electronic Arts",
          genre: "Racing",
          pictureLink: nfs_pic
      },
      {
          name: "Dota 2",
          releaseDate: "09-07-2013",
          publisher: "Valve",
          genre: "MOBA",
          pictureLink: dota_pic
      },
      {
          name: "Assassin's Creed Valhalla",
          releaseDate: "10-11-2020",
          publisher: "Ubisoft",
          genre: "ACtion",
          pictureLink: assasin_pic
      },
      {
          name: "GTA V",
          releaseDate: "17-09-2013",
          publisher: "RockStar",
          genre: "Action",
          pictureLink: gta_pic
      },
      {
          name: "Need for Speed: Most Wanted",
          releaseDate: "15-11-2005",
          publisher: "Electronic Arts",
          genre: "Racing",
          pictureLink: nfs_pic
      },
      {
          name: "Dota 2",
          releaseDate: "09-07-2013",
          publisher: "Valve",
          genre: "MOBA",
          pictureLink: dota_pic
      },
      {
          name: "Assassin's Creed Valhalla",
          releaseDate: "10-11-2020",
          publisher: "Ubisoft",
          genre: "Action",
          pictureLink: assasin_pic
      }
  ];

  return (

    <div className={styles.gameList}>

        <div className={styles.head}>
          
          <div className={styles.heading}>Game List</div>
          <div className={styles.options}>
            <ConfigProvider
              theme={{
                token: {
                    colorBorder: "transparent",
                    fontFamily: "Jua-Regular",
                    colorBgContainer: '#f6ffed',

                },
                components: {
                  Select: {
                  // Не нашёл, как исправить:
                  // Кнопка удаления всего при наведении чёрная
                  // В оповещении "empty description" текст должен быть белым, но он, почему-то, остаётся чёрным + alpha 0.25
                  selectorBg: "#643225",
                  multipleItemBg: 'rgba(248,222,34,0.75)',
                  clearBg: "#643225",
                  colorText: "#ffffff",
                  colorTextDescription: "#ffffff",
                  colorTextPlaceholder: "#ffffff",
                  colorTextTertiary: "rgb(248,222,34)",
                  colorTextQuaternary: "#ffffff", // Стрелка, ClearButton
                  colorTextDisabled: "#ffffff",

                  colorPrimaryHover: "transparent",
                  controlOutline: "rgba(248,222,34,0.5)",
                  colorBgElevated: "#643225",

                  controlItemBgHover: "rgba(248,222,34,0.5)",

                  },
                  Radio: {
                    buttonBg: "#643225",
                    buttonColor: "#ffffff",
                    buttonSolidCheckedActiveBg: "rgba(248,222,34,0.5)",
                    buttonSolidCheckedBg: "rgba(248,222,34,0.75)",
                    buttonSolidCheckedColor: "#fff",
                    buttonSolidCheckedHoverBg: "rgb(248,222,34)",
                    colorPrimary: "fff",
                    colorPrimaryHover: "transparent",
                    colorPrimaryActive: "transparent",
                  }
                }
              }}
            >
              <Radio.Group 
                defaultValue="all" 
                buttonStyle="solid"
              
              >
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="pc">PC</Radio.Button>
                <Radio.Button value="browser">Browser</Radio.Button>
              </Radio.Group>
              <Select
                mode="multiple"
                placeholder="Filter by genre"
                value={selectedItems}
                allowClear
                maxTagCount={3}
                onChange={setSelectedItems}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
                
                style={{
                  width: "70%",
                }}
              />
            </ConfigProvider>
          </div>
        </div>

          <div className={styles.games}>
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

        <div className={styles.pagination}>
          {
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#F8DE22",
                  colorText: "#959595",
                  lineHeight: "1",
                  colorTextDisabled: "rgba(149,149,149, 0.4)",
                  fontFamily: "Jua-Regular",

                  colorBgContainer: "#900C3F",
                  controlOutline: "#F8DE22",
                  controlItemBgActiveDisabled: "#959595",
                  colorBorder: "#959595",

                  colorBgTextHover: "rgba(255,255,255,0.03)",
                  colorBgTextActive: "rgba(255,255,255,0.06)",
                  colorPrimaryHover: "#FFF294",
                  colorTextPlaceholder: "#F8DE22",
                },
                components: {
                  Pagination: {
                    itemInputBg: "#000000",
                    itemActiveBg: "#F94C10",
                    itemSize: 50,
                  },
                },
              }}
            >

              <Pagination 
                itemBg = {"#F94C10"}
                defaultCurrent={1} 
                total={500} // Динамически сюда надо будет прокидывать общее количество игр
                pageSize={8} // По сколько элементов на странице скипается
                showSizeChanger={false} // В пизду его, хрен перекрсишь и бессмысленный
              />

            </ConfigProvider>
          }
        </div>

    </div>
  )
}
