<template>
    <ul class="pokeList">
        <li :key="i" v-for="(pokemon, i) in pokemons.results">{{pokemon.name}}</li>
    </ul>
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
                'getPokemons'
            ]),
            ...mapState([
                'pokemons',
            ])
        },
        mounted() {
            this.$store.dispatch('getPokemons');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .pokeList {
        /*width: 100%;*/
        /*height: 100%;*/
        /*background-color: black;*/
        /*float: right;*/
    }
</style>
