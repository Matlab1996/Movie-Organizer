let initialState = {
    movies: [
        // {Title: 'Iron Man', Year: '2008', imdbID: 'tt0371746', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'},
        // {Title: 'Iron Man 3', Year: '2013', imdbID: 'tt1300854', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg'},
        // {Title: 'Spider-Man', Year: '2002', imdbID: 'tt0145487', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMj…TRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'},
        // {Title: 'Iron Man 2', Year: '2010', imdbID: 'tt1228705', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg'},
        // {Title: 'Man of Steel', Year: '2013', imdbID: 'tt0770828', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg'},
        // {Title: 'Spider-Man: No Way Home', Year: '2021', imdbID: 'tt10872600', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYT…TU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg'},
        // {Title: 'Ant-Man', Year: '2015', imdbID: 'tt0478970', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg'},
        // {Title: 'The Amazing Spider-Man', Year: '2012', imdbID: 'tt0948470', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg'},
        // {Title: 'Spider-Man 2', Year: '2004', imdbID: 'tt0316654', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4Nm…TU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
        // {Title: 'Spider-Man: Homecoming', Year: '2017', imdbID: 'tt2250912', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg'},
    ],
    favoriteList: [
        // {Title: 'Iron Man', Year: '2008', imdbID: 'tt0371746', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'},
    ],
    title: '',

};

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'SEARCH_MOVIES':
            let movies = [...action.payload.movies];
            return{
                movies: movies,
                favoriteList: state.favoriteList,
                title: state.title,
            }
        case 'ADD_FAVORITE':
            let favoriteList = [...action.payload.favoriteList];   
            return{
                movies: state.movies,
                favoriteList: favoriteList,
                title: state.title,
            }
        
        case 'CHANGE_TITLE':
            let title = action.payload.title;
            return{
                movies: state.movies,
                favoriteList: state.favoriteList,
                title: title,
            }

        default:
            return state;
    }
}