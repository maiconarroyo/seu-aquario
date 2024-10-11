function hidem() {
    const botomCalculator = document.querySelector('.icon-calculator');
    const aboutDiv = document.querySelector('.about-amonia');
    const calcularDiv = document.querySelector('.calcular-amonia');
    aboutDiv.style.display = 'none';
    calcularDiv.style.display = 'flex';
    botomCalculator.style.display = 'none';
}

function amonia() {
    const amoniaInput = document.querySelector('input[name="amonia"]');
    const phInput = document.querySelector('input[name="ph"]');
    const temperaturaInput = document.querySelector('input[name="temperatura"]');

    let amoniaTotal = parseFloat(amoniaInput.value);
    let ph = parseFloat(phInput.value);
    let temperatura = parseFloat(temperaturaInput.value);

    if (isNaN(temperatura) || isNaN(ph) || isNaN(amoniaTotal)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    function calcularPK(temperatura) {
        return 0.09018 + (2729.92 / (273.15 + temperatura));
    }

    const pK = calcularPK(temperatura);
    const fracaoToxica = 1 / (1 + Math.pow(10, (pK - ph)));
    const amoniaToxica = amoniaTotal * fracaoToxica;

    const resultadoDiv = document.getElementById('resultado');
    const resultadoTexto = resultadoDiv.querySelector('.sub-title.-resultado');
    resultadoDiv.style.display = 'block';

    if (amoniaToxica <= 0.001) {
        resultadoDiv.style.backgroundColor = 'green';
        resultadoTexto.style.color = 'white';
        resultadoTexto.textContent = "Níveis de Amônia Seguros";
    } else if (amoniaToxica <= 0.039    ) {
        resultadoDiv.style.backgroundColor = 'yellow';
        resultadoTexto.style.color = 'black';
        resultadoTexto.textContent = "Cuidado! Níveis de Amônia Moderado";
    } else {
        resultadoDiv.style.backgroundColor = 'red';
        resultadoTexto.style.color = 'white';
        resultadoTexto.textContent = "Níveis de Amônia Críticos!!";
    }
}
