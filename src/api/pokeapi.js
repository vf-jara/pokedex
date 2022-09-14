import axios from "axios";

export const getPokemonsList = async () => {
    await axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/',
        params: {
            limit: 50
        }
    })
}
