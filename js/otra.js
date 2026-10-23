function Cpresupuesto() {
  let invitados =parseFloat (document.getElementById("invitados").value);
  let comida =parseFloat(document.getElementById("comida").value);
  let bebida = parseFloat(document.getElementById("bebida").value);
  let decoracion = parseFloat(document.getElementById("decoracion").value);
  let musica = parseFloat(document.getElementById("musica").value);
  let propina = parseFloat(document.getElementById("propina").value);
  
  let total_comida = comida * invitados;
  let total_bebida = bebida * invitados;
  let subtotal= total_comida + total_bebida + decoracion + musica;
  let propi= subtotal * (propina / 100);
  let total = subtotal+propi;
  let cost_invitado = total / invitados;

  document.getElementById("rescomida").textContent=total_comida.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("resbebida").textContent =total_bebida.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("resdecoracion").textContent =decoracion.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("resmusica").textContent =musica.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("ressubtotal").textContent =subtotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("respropina").textContent =propi.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("restotal").textContent =total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  document.getElementById("rescosto").textContent =cost_invitado.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });


}
