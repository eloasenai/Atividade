const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i} `;
  }
};

const exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h3> Resposta da atividade</h3>";
  let num = document.getElementById("num").value;
  for (let i = 0; i <= num; i += 2) {
    console.log(i);
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 1) {
    error.innerText = `O número ${num} não é primo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei varariavel para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não  é primo!`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;

  document.getElementById("resultado").innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    document.getElementById("resultado").innerHTML += `${num} x ${i} = ${
      num * i
    } <br>`;
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let i = 0;

  document.getElementById("resultado").innerText = "";
  while (i <= num) {
    if (i % 2 != 0) document.getElementById("resultado").innerText += `#${i} `;
    i++;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let i = 0;
  let soma = 0;
  document.getElementById("resultado").innerText = "";
  while (i <= num) {
    if (i % 2 == 0) soma += i;
    i++;
  }
  document.getElementById("resultado").innerText = soma;
};

const exercicio7 = () => {
  let i = 10;
  document.getElementById("resposta").innerText = "";
  while (i >= 1) {
    console.log(i);
    document.getElementById("resposta").innerText += `#${i} `;
    i--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};

const exercicio9 = () => {
  let soma = 0;
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  document.getElementById("resposta").innerHTML += soma;
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let i = 0;
  let somar = 0;
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  while (i <= num) {
    somar += i;
    i++;
  }
  resultado.innerHTML += `A soma é: ${somar}<br>`;
  resultado.innerHTML += `A média é: ${somar / num}`;
};

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  resposta.innerHTML = "<h2>Resposta da Atividade</h2>";

  for (let i = 1; i <= 100; i++) {
    i % 3 == 0 && (resposta.innerHTML += `#${i} `);
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let somar = 0;
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let resposta = document.getElementById("resposta");
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (num <= 9) {
    erro.innerHTML = "Informe um número válido";
  } else {
    for (let i = 1; i <= num.length; i++) {
      somar += parseInt(num.charAt(num.length - i));
    }
    resultado.innerHTML += somar;
  }
};

const exercicio13 = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let maior, menor;

  if (num1 >= num2) {
    maior = num1;
    menor = num2;
  } else {
    maior = num2;
    menor = num1;
  }
  if (menor <= 1 && maior <= 1) {
    error.innerHTML = `Informe um numero valido.`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    result.innerHTML = "";

    for (var testarPrimo = menor; testarPrimo <= maior; testarPrimo++) {
      let primo = true; //declarei varariavel para primo
      for (let i = 2; i < testarPrimo; i++) {
        if (testarPrimo % i == 0) primo = false;
      }
      console.log(testarPrimo);
      primo && (result.innerHTML += `#${testarPrimo} `);
    }
  }
};
const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = document.getElementById("resultado");
  let area = 0;
  resultado.innerHTML = "";
  resultado.innerHTML = `A área do retângulo é ${num1 * num2}`;
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let erro = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let vogal = ["a", "e", "i", "o", "u"];

  let letra = "";
  for (let i = 0; i < palavra.length; i++) {
    letra = palavra[i];
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      result.innerHTML += `a letra ${letra} e vogal <br>`;
    } else {
      result.innerHTML += `a letra ${letra} e consoante <br>`;
    }
  }
};

const exercicio16 = () => {

};
const exercicio17 = () => {

};
const exercicio18 = () => {

};
const exercicio19 = () => {

};
const exercicio20 = () => {

};
const exercicio21 = () => {

};
const exercicio22 = () => {

};
const exercicio23 = () => {

};
const exercicio24 = () => {

};
const exercicio25 = () => {
  
};
