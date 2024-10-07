function amonia() {
    alert("Em Desenvolvimento");
    
    let temperatura = parseFloat(prompt("Qual a Temperatura (°C)?"));
    let ph = parseFloat(prompt("Qual o pH?"));
    let amoniaTotal = parseFloat(prompt("Qual valor do Teste de Amônia (mg/L)?"));

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
    resultadoDiv.style.display = 'block';

    if (amoniaToxica <= 0.001) {
        resultadoDiv.style.backgroundColor = 'green';
        resultadoDiv.textContent = "Níveis de Amônia Seguros";
    } else if (amoniaToxica <= 0.086) {
        resultadoDiv.style.backgroundColor = 'yellow';
        resultadoDiv.style.color = 'black'; 
        resultadoDiv.textContent = "Cuidado! Níveis de Amônia Moderado";
    } else {
        resultadoDiv.style.backgroundColor = 'red';
        resultadoDiv.textContent = "Níveis de Amônia Críticos!!";
    }
}
