const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite ) => {            
    if(!Number(base) || !Number(base)){
        reject(`La base introducida ${ base } o el limite introducido ${ limite } no son un número`);
        return;
    }

    console.log('===================='.green);
    console.log(`==table de ${ base }==`.red);
    console.log('===================='.blue);

    for(let i = 1; i <= limite; i++){
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = ( base, limite ) => {
    return new Promise( (resolve,reject) => {
        
        if(!Number(base) ){
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        
        let data = '';

        for(let i = 1; i <= limite; i++){
            data+=`${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`,data,(err) =>{
            if( err ){
                reject(err);
            }else{
                resolve(`tabla-${ base }.txt`);
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}