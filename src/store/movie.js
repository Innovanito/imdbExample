import axios from 'axios'

export default {
  //module
  namespaced:true,
  // data
  state: () =>({
    movies:[],
    message:'',
    loading: false
  }),
  // computed
  gatters:{},
  // methods
  mutations: {
    updateState(state, payload) {
      //['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  //비동기로 동작함
  actions:{
    async searchMovies( { commit }, payload) {
      const { title, type, number, year} = payload
      const OMDB_API_KEY = '7035c60c'
      const res =  await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults} = res.data
      commit('updateState', {
        movies: Search,
      })
    }
  }
}