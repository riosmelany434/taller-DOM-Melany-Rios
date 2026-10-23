function Cpromedio(){
    let nota1=parseFloat(document.getElementById("nota1").value);
    let nota2=parseFloat(document.getElementById("nota2").value);
    let nota3=parseFloat(document.getElementById("nota3").value);
    
    if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
        alert("Las notas deben estar entre 0.0 y 5.0.");
        return;
    }
    let promedio=(nota1+nota2+nota3)/3;
    document.getElementById("promedio").value=promedio.toFixed(2);
}