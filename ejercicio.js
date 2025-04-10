function operación(numUno, numDos, numTres, numCuatro) {
    multiplicación = (numUno + numDos) * (numTres + numCuatro);
    if (multiplicación > 50) {
        return "¡El número es mayor que 50!";
    } else {
        return "¡El número es menor que 50!";
    }
}

console.log(operación(2, 3, 6, 7));
