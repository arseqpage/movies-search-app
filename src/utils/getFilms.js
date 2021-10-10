export const API_KEY = process.env.REACT_APP_USER_TOKEN;
export const URL = 'http://www.omdbapi.com/?apikey=';

// export const getFilms = async (params = 's', filmName='matrix') => {
//     const data = await fetch(URL + API_KEY + '&' + params + '=' + filmName)
//         .then(resp => resp.json())
//         .then(data => data.search)
//         .catch(err => console.log(err))
//
//     console.log(data)
//
//     return data;
// }