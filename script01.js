function verificarNumero() {
    let num = Number(window.prompt('Diga um número'));
    let res_num = document.getElementById('res_num');
  
    if (num === 0) {
      res_num.innerHTML = `O número ${num} é neutro`;
    }
    else if(num <0){
      res_num.innerHTML = `O número ${num} é negativo`;
    }
    else if(num !=Number){
        res_num.innerHTML = `Isso não é um numero`;
    }
    else {
      res_num.innerHTML = `O número ${num} é positivo`;
    }
  }