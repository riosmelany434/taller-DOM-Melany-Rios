function Csalario (){
    let Horas_trabajadas=document.getElementById("HorasTrabajadas").value;
    let valor_hora=document.getElementById("ValorHora").value;

    let salario=(Horas_trabajadas*valor_hora)
    document.getElementById("SalarioPagar").value=salario.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}