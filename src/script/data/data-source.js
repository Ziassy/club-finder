// import clubs from "./clubs.js";

class DataSource {
  //using fetch
  static searchClub(keyword) {
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.teams) {
          console.log(responseJson)
          return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
