export default {
  //module
  namespaced:true,
  // data
  state: () =>({
    movies:[]
  }),
  // computed
  gatters:{
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  //비동기로 동작함
  actions:{
    searchMovies(context) {
      
    }
  }
}