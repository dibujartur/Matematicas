
function calcular() {

    let precio = parseFloat(document.getElementById("txtPrecio").value);       
    let porcentaje = parseFloat(document.getElementById("txtPorcentaje").value);
    let resultado = 0;
    
    // Verificamos si los valores son números válidos
    if (isNaN(precio) || isNaN(porcentaje)) {
        alert("Por favor ingresa números válidos.");
        return;
    }    
    
  switch (document.getElementById("operacion").value) {
    case "Descuentos":
      resultado = precio - (porcentaje / 100) * precio;
      document.getElementById("resultado").value = resultado;
      break;
    case "PreciosOriginales":
      let porcentajePagado = 100 - porcentaje;
      resultado = (precio * 100) / porcentajePagado;
      document.getElementById("resultado").value = resultado;
      break;
    default:
      alert("Por favor selecciona una operación válida.");
      return;
  }


    
}
