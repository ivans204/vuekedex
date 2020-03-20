import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
    },
    mutations: {
        savePokemons(state, data) {
            state.pokemons = data;
        }
    },
    actions: {
        getPokemons({commit}) {
            axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then(data => {
                    console.log(data.data);
                    commit('savePokemons', data.data)
                })
        }
    },
    getters: {
        getPokeById: state => id => {
            return state.pokemons.find(poke => poke.id === id)
        }
    },
    modules: {}
})
