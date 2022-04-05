const {controller} = require('./map-marker/dist/controller/controller.js');

mapMarkers();

async function mapMarkers(){
    const ocorrencias = await controller();
    console.log(ocorrencias.lista);
}

