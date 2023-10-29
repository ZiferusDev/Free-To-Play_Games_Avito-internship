import {React, useState, useEffect } from 'react';
import { DownOutlined, SortAscendingOutlined, CalendarOutlined, FireOutlined, TeamOutlined } from "@ant-design/icons";
import { Pagination, ConfigProvider, Dropdown, Space, Button, Radio, Select, message } from 'antd';
import { getGames } from '../actions/freeToGameRequests';


// components / styles
import Games from './Games';
import styles from "../styles/gameList.module.css";

export default function GameList() {
  
  const CATEGORIES =  [ 
    "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", 
    "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", 
    "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", 
    "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"
  ];

  // ! console.log(tags); // теги для фильтрации. Вид: ["tag1", "tag2", ...]
  const [gamesToRender, setGamesToRender] = useState([]),
        [page, setPage] = useState(1),
        [sortingMethod, setSortingMethod] = useState(""),
        [tags, setTags] = useState([]),
        [platform, setPlatform] = useState("all");

  const filteredOptions = CATEGORIES.filter((o) => !tags.includes(o)); // убираем выбранные категории из списка предложенных 

  //handlers // * вынес их сюда для наглядности и упрощения чтения кода
  
  const handleClick = {
    sort: function (event) {
            // message.info('Changed sorting method');
            setSortingMethod(event.key);
            console.log("Выбран метод сортировки:", event.key);
          },
    platform: function (event) {
                setPlatform(event.target.value);
                console.log("Выбрана платформа:", event.target.value)
              },
    page: function (page, pageSize) { 
            setPage(page)
            console.log("Выбрана страница", page);
          },
    tags: function (newTags) { // newTags: array
            setTags(newTags);
            console.log("Выбраны теги: ", newTags);
          },
  }



  useEffect( () => {
    // console.log("My Sorting method", sortingMethod);
    getGames()
        .then(data => {
            setGamesToRender(data);
        })
    }, [tags, sortingMethod, platform]) // МАССИВ ЗАВИСИМОСТЕЙ: Порядок, теги, платформа

  // console.log(gamesToRender);
  

  // Сортировка по 
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
    onClick: handleClick.sort,
  };
  
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
                onChange={handleClick.platform}
              >
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="pc">PC</Radio.Button>
                <Radio.Button value="browser">Browser</Radio.Button>
              </Radio.Group>
              
              <Select
                mode="multiple"
                placeholder="Filter by genre"
                value={tags}
                allowClear
                maxTagCount={3}
                onChange={handleClick.tags}
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

          <Games 

          />



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
                onChange={handleClick.page}
              />

            </ConfigProvider>
          }
        </div>

    </div>
  )
}
