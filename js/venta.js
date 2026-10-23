function Calcular (){
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("pU").value;
    
    let subtotal = cantidad * precio;
    document.getElementById("sub").value = subtotal.toFixed(2);

    let iva = subtotal * 0.19;
    document.getElementById("iva").value = iva.toFixed(2); 

    let descuento = subtotal * 0.10;
    document.getElementById("descuento").value = descuento.toFixed(2); 

    let total = subtotal + iva - descuento;
    document.getElementById("total").value = total.toFixed(2); 
}
