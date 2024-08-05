const axios = require('axios');
const linkMapaApi = 'https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1'

async function buscarMapa(cep){
    try {
        const response = await axios.get(`${linkMapaApi}&postalcode=${cep}`);
        if(!response.dados || response.dados.length === 0){
            return {erro: 'Localização não encontrada'}
        }

        const {latitude, longitude, display_name} = response.data[0]
        if (!latitude || !longitude || display_name){
            return {erro: 'Os dados não permitem encontrar a localização'}
        }

        return{latitude, longitude, display_name}
    } catch (error) {
        console.log(error)
        return {erro: 'Erro ao fazer a requisição da API de mapas'}
    }
}

async function buscarLinkGoogleMaps(local){
    try {
        const {latitude, longitude} = local

        const linkGoogleMaps = `https://www.google.com/maps?q=${latitude},${longitude}`

        return{linkGoogleMaps}

    } catch (error){
        console.log(error)
        return{erro: 'Erro ao gerar link do Google Maps'}
    }
}

module.exports = {
    buscarMapa,
    buscarLinkGoogleMaps
}