const prompt = require("prompt-sync")();

let quantidadeExperiencia = parseFloat(prompt("Pontos de experência que você tem: "));
const nomeHeroi = "trinity";
let nivel = 0;

if (quantidadeExperiencia < 1000){
    nivel = "Ferro";
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000){
    nivel = "Bronze";
} else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000){
    nivel = "Prata";
} else if (quantidadeExperiencia >= 6001 && quantidadeExperiencia <= 7000){
    nivel = "Ouro";
} else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000){
    nivel = "Platina";
} else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000){
    nivel = "Ascendente";
} else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10.000){
    nivel = "Imortal"
} else if (experiencia => 10.001){
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)