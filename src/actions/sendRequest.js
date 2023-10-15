export default function sendRequest(url) {

    const headers = {

    }

    return fetch(url, {
        headers: headers
    }).then(response => {

        if(response.ok) {
            return response.json();
        }

        return response.json().then(error => { 
            const e = new Error("Something went wrong");
            e.data = error;
            throw e
        })
    })
}