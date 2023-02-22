function calcularDescuento(origen, destino, precioBase) {
    let descuento = 0;
    
    if (origen === "La Palma" && destino === "Costa del Sol") {
      descuento = 0.05;
    } else if (destino === "Panchimalco") {
      descuento = 0.1;
    } else if (destino === "Puerto el Triunfo") {
      descuento = 0.15;
    }
    
    let precioFinal = precioBase - (precioBase * descuento);
    return precioFinal;
  }
  