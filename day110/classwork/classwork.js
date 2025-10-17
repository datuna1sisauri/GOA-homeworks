async function getFootballData() {
    const url= "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }  catch (error) {
        console.error("error",error)
    }
}
getFootballData()