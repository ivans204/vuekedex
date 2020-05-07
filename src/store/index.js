import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
        prevPokemons: [],
    },
    mutations: {
        savePokemons(state, data) {
            state.pokemons = data;
        },
        savePrevPokemons(state) {
            state.pokemons = state.prevPokemons;
        }
    },
    actions: {
        getPokemons({commit}) {
            axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then(data => {
                    console.log(data.data);
                    commit('savePokemons', data.data)
                })
        },
        nextPokemons({commit}) {
            this.state.prevPokemons = this.state.pokemons;
            axios.get(this.state.pokemons.next)
                .then(data => {
                    console.log(data.data);
                    commit('savePokemons', data.data)
                })
        },
        prevPokemons({commit}) {
            commit('savePrevPokemons')
        }
    },
    getters: {
        /**
         * Upisi id koji oces da dobijes taj item getPokeById(id)
         */
        getPokeById: state => id => {
            return state.pokemons.find(poke => poke.id === id)
        },
    },
})
