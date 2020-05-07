<template>
    <div class="poke">
        <!--        <div :key="i" v-for="(pokemon, i) in pokemons.results">{{pokemon.name}}</div>-->
        <div class="poke-list">
        </div>
        <PokeList class="poke-list"/>
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
        display: flex;
    }

    .poke-list {
        flex: 1;

        &:first-of-type {
            border-right: 1px solid black;
        }
    }

</style>
