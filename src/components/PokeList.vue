<template>
    <div>
        <ul class="pokeList">
            <li :key="i" v-for="(pokemon, i) in pokemons.results">{{pokemon.name}}</li>
        </ul>
        <button @click="getPrev">Prev</button>
        <button @click="getNext">Next</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";

    export default {
        props: {},
        computed: {
            ...mapGetters([
                'getPokeById',
            ]),
            ...mapActions([
                'getPokemons',
                'nextPokemons',
                'prevPokemons'
            ]),
            ...mapState([
                'pokemons',
            ])
        },
        mounted() {
            this.$store.dispatch('getPokemons');
        },
        methods: {
            getNext() {
                this.$store.dispatch('nextPokemons')
            },
            getPrev() {
                this.$store.dispatch('prevPokemons')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    ul {
        padding: 20px;
        list-style: none;
    }
</style>
