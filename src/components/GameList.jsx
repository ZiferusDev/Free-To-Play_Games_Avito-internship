import {React, useState } from 'react';
import { DownOutlined, SortAscendingOutlined, CalendarOutlined, FireOutlined, TeamOutlined } from "@ant-design/icons";
import { Pagination, ConfigProvider, Dropdown, Space, Button, Radio, Select, message } from 'antd';

import GameCard from './GameCard';

import styles from "../styles/gameList.module.css";


import gta_pic from "../media/preview_GTA.jpg";
import nfs_pic from "../media/preview_NFS.jpg";
import dota_pic from "../media/preview_DOTA.jpg";
import assassin_pic from "../media/preview_AssassinValhalla.png";

const CATEGORIES = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", 
"pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", 
"permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", 
"military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"
];

function changePage(page, pageSize) { 
  console.log(page);
} 

// Сортировка по 

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('Sorting method ', e.key); // ! ключ из e нужен для сортировки
};

const sortingOptions = {
  items: [ // ключи отсюда будут прокидываться в запрос
    {
      label: 'Alphabet',
      key: 'alphabetical',
      icon: <SortAscendingOutlined />,
    },
    {
      label: 'Relevance',
      key: 'relevance',
      icon: <FireOutlined />,
    },
    {
      label: 'Popularity',
      key: 'popularity',
      icon: <TeamOutlined />,
    },
    {
      label: 'Release Date',
      key: 'release-date',
      icon: <CalendarOutlined />,
    }
  ],
  onClick: handleMenuClick,
};

// сортировка по ^




export default function GameList() {
    // categories вынимается GET запросом к Free-To-Play-Games API
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = CATEGORIES.filter((o) => !selectedItems.includes(o));
    
    // ! console.log(selectedItems); // теги для фильтрации. Вид: ["tag1", "tag2", ...]

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
          pictureLink: assassin_pic
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
          pictureLink: assassin_pic
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
                    colorPrimaryHover: "rgb(248,222,34)",
                    colorPrimaryActive: "rgb(248,222,34)",
                    colorPrimaryBorderHover: "transparent",
                    
                    fontFamily: "Jua-Regular",
                    colorBgContainer: '#643225',
                    colorText: "#ffffff",
  
                    colorBgElevated: "#643225",
                    controlItemBgHover: "rgba(248,222,34,0.5)",

                },
                components: {
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
                  },
                  
                  Select: {
                    // Не нашёл, как исправить:
                    // В оповещении "empty description" текст должен быть белым, но он, почему-то, остаётся чёрным + alpha 0.25
                    selectorBg: "#643225",
                    multipleItemBg: 'rgba(248,222,34,0.75)',
                    clearBg: "#643225",
                    colorTextDescription: "#ffffff",
                    colorTextPlaceholder: "#ffffff",
                    colorTextTertiary: "rgb(248,222,34)",
                    colorTextQuaternary: "#ffffff", // Стрелка, ClearButton
                    colorTextDisabled: "#ffffff",

                    colorPrimaryHover: "transparent",
                    controlOutline: "rgba(248,222,34,0.5)",
                  },
                }
              }}
            >
            <Dropdown menu={sortingOptions}>
              <Button>
                <Space>
                  Sort by
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

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
                  width: "60%",
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
                onChange={changePage}
              />

            </ConfigProvider>
          }
        </div>

    </div>
  )
}
