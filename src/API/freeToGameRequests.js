
const defaultReq = "https://free-to-play-games-database.p.rapidapi.com/api/";

async function sendRequest(url) { // ! axios меньше кода, больше понятности

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6b4618021fmsh2074fdc1d2ef2dep1b5d56jsn03ff73080691',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("Успешный запрос");

        return result
    } catch (error) {
        console.log("Неуспешный запрос");
        console.error(error);
        return error;
    }
}

/*
    * params interface:
        platform: string // "pc" or "browser" or "all", 
        category: string // "mmorpg" or "shooter" or "pvp" or "mmofps"... // ? in url: caterogy="..."
        tags:     array  // ["mmorpg", "shooter", "pvp", "mmofps"...]
        sortBy:   string // "release-date" or "popularity" or "alphabetical" or "relevance" // ? in url: sort-by="..."
*/

export function getGames(params = null) {

    let myReq = defaultReq;

    if(params.tags.length) { // при фильтрации с помощью тегов, путь запроса меняется
        myReq += `filter?tag=` + params.tags.join(".");
    } else {
        myReq += "games?";
        if(params.category) {
            myReq +=`category=${params.category}`
        }
    
    }

    if(params.platform) {
        
        if(myReq[myReq.length - 1] !== "?") { // проверяем, случай, когда этот параметр - первый
            myReq += "&"
        }  

        myReq += `platform=${params.platform}`
    }

    if(params.sortingMethod) {

        if(myReq[myReq.length - 1] !== "?") { 
            myReq += "&"
        }  

        myReq += `sort-by=${params.sortingMethod}`
    }

    console.log(myReq);

    return sendRequest(myReq)
}

export async function getSpecificGame(id = 0) {
    return await sendRequest(`${defaultReq}game?id=${id}`)
}

