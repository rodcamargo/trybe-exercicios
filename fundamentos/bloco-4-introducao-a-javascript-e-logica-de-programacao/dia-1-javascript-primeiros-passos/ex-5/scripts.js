const a = 50;
const b = 70;
const c = -60;

somaAngulos = a + b + c;
angulosPositivos = a > 0 && b > 0 && c > 0;

if ( somaAngulos === 180) {
    if (angulosPositivos)
    console.log("true");
}

else {
    console.log ("false")
}