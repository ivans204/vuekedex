<template>
    <div class="poke">
        <!--        <div :key="i" v-for="(pokemon, i) in pokemons.results">{{pokemon.name}}</div>-->
        <div class="singlePoke">
        </div>
        <PokeList class="pokeAll"/>
        <br style="clear: both">
    </div>
</template>

<script>
    import PokeList from "../components/PokeList";

    export default {
        components: {PokeList},
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .poke {
        border: 1px solid black;
        padding: 20px;
    }

    .singlePoke {
        float: left;
        border-right: 1px solid black;
        width: 50%;
    }

    .pokeAll {
        float: right;
        width: 50%;
    }
</style>
