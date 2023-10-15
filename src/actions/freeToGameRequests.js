
import sendRequest from "./sendRequest"

const defaultReq = "https://www.freetogame.com/api/";

export function getGames(params = null) {

    if(!params) {
        return sendRequest(defaultReq + "games"); // if we just want the whore game list
    }

    /* paraps may have: 
        platform: "pc" or "browser" or "all", 
        category: "mmorpg" or "shooter" or "pvp" or "mmofps"... // ? in url: caterogy="..."
        tag: ["mmorpg", "shooter", "pvp", "mmofps"...]
        sortBy: "release-date" or "popularity" or "alphabetical" or "relevance" // ? in url: sort-by="..."

    */

    let myReq = defaultReq;

    if(params.tags) { // if we need to filter games by tags, we'll need other default path
        myReq += `/filter?tag=` + params.tag.join(".");

        return sendRequest(tagsReq)
    } else {
        myReq += "/games"
    }

    // now we add params
    if()



}

export function getSpecificGame(id = 0) {
    return sendRequest(`${defaultReq}game?id=${id}`)
}


// fetch( "https://www.freetogame.com/api/games", {mode: "no-cors"} )
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     }

//     return response
// })
// .then(games => {
//     return games ? JSON.parse(games) : {}
// }) 