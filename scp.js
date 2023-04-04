let n1=prompt("Digite sua nota 1:");
document.write("<br>nota 1: ", n1);

let n2 = prompt("Digite sua nota 2:");
document.write("<br>nota 2: ",(n2));

let n3 = prompt("Digite sua nota 3:");
document.write("<br>nota 3: ",(n3));

let n4 = prompt("Digite sua nota 4:");
document.write("<br>nota 4: ",(n4));

let n5 = prompt("Digite sua nota 5:");
document.write("<br>nota 5: ",(n5));

let n6 = prompt("Digite sua nota 6:");
document.write("<br>nota 6: ",(n6));

let n7 = prompt("Digite sua nota 7:");
document.write("<br>nota 7: ",(n7));

console.log(parseInt(n1));
console.log(parseInt(n2));
console.log(parseInt(n3));
console.log(parseInt(n4));
console.log(parseInt(n5));
console.log(parseInt(n6));
console.log(parseInt(n7));

let media = (n1+n2+n3+n4+n5+n6+n7)/ 7;
console.log(parseFloat(media));
document.write("Sua Média é: ", media);
