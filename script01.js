function verificarNumero() {
    let num = Number(window.prompt('Diga um número'));
    let res_num = document.getElementById('res_num');
  
    if (num === 0) {
      res_num.innerHTML = `O número ${num} é neutro`;
    }
    else if(num <0){
      res_num.innerHTML = `O número ${num} é negativo`;
    }
    else if(num>0){
      res_num.innerHTML = `O número ${num} é positivo`;
    }
    else{
      res_num.innerHTML = `Isso não é um numero`;
  }
  }
  function verificarIdade(){
    let idade = Number(window.prompt('Diga a sua idade'));
    let res_idade = document.getElementById('res_idade')

    if (idade<=15){
      res_idade.innerHTML = `Você não tem idade o suficiente para votar com ${idade} anos`
    }

    else if (idade <18 || idade>=70){
      res_idade.innerHTML =`Você tem a opção de votar com ${idade} anos`
    }
    else if (idade >=18){
      res_idade.innerHTML =`Você é obrigado de votar com ${idade} anos`
    }
  }
  function calcularIMC() {
    let res_imc = document.getElementById("res_imc");
    res_imc.innerHTML = "";

  for (let pessoa = 1; pessoa <= 5; pessoa++) {
      let peso = parseFloat(window.prompt("Digite o peso da pessoa " + pessoa + " em kg:"));
      let altura = parseFloat(window.prompt("Digite a altura da pessoa " + pessoa + " em metros:"));  
      let imc = peso / (altura * altura);
      let classificacao;
      if (imc < 18.5) {
          classificacao = "abaixo do peso";
      } else if (imc < 25) {
          classificacao = "com peso normal";
      } else if (imc < 30) {
          classificacao = "com sobrepeso";
      } else {
          classificacao = "obesa";
      }
        res_imc.innerHTML += "A pessoa " + pessoa + " está " + classificacao + ".<br>";
    }
}
function frutas(){
  let fruta = window.prompt("Diaga uma fruta");

switch (fruta) {
  case "banana":
    console.log("Estamos com escassez de banana.");
    break;
  case "melancia":
    console.log("Aqui está, são 3 reais o quilo.");
    break;
  case "maçã":
    console.log("Não vendemos esta fruta.");
    break;
  default:
    console.log("Não vendemos essa fruta aqui.");
}

}
function carros(){
  let carros = window.prompt("Diga o tipo de carro")
switch (carros) {
  case "hatch":
    console.log("Compra realizada com sucesso.");
    break;
  case "motocicletas":
    console.log("Tem certeza de que não prefere um modelo hatch?");
    break;
  case "caminhonetes":
    console.log("Tem certeza de que não prefere um modelo hatch?");
    break;
  case "sedans":
    console.log("Tem certeza de que não prefere um modelo hatch?");
    break;
  default:
    console.log("Não trabalhamos com este tipo de automóvel aqu");
}
}
  
