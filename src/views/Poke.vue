<template>
    <div class="poke">
        <div :key="i" v-for="(pokemon, i) in pokemons.results">{{pokemon.name}}</div>
    </div>
</template>

<script>

    import {mapActions, mapGetters, mapState} from "vuex";

    export default {

        data() {
            return {}
        },
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
            // console.log(this.$store.getters.getPokeById(1));
            this.$store.dispatch('getPokemons');
            // console.log(this.$store.state.pokemons);
        }
    }
</script>
