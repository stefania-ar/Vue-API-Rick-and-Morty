import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: { //mutations modificans a los state
    setCharacters(state, payload){
      state.characters= payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){ //recibe un commit para acceder a las mutations
      try {
        const url= 'https://rickandmortyapi.com/api/character';
        const response= await fetch(url);
        if(response.ok){
          let t = await response.json();
          console.log(t);
        }
      } catch (error) {
        
      }
    } 
  },
  modules: {
  }
})
