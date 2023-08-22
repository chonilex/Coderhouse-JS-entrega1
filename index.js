


function obtenerTipoCambio(tipoMoneda) {
    let tasas = {
      dolares: 710, 
      euros: 381,   
    };
    
    return tasas[tipoMoneda];
  }
  
  function casaDeCambio() {
    let intentos = 3;
    
    while (intentos > 0) {
      let monto = parseFloat(prompt('Ingresa la cantidad a convertir:'));
      let tipoMoneda = prompt('Ingresa el tipo de moneda (dolares/euros):');
      
      if (tipoMoneda === 'dolares' || tipoMoneda === 'euros') {
        let tipoCambio = obtenerTipoCambio(tipoMoneda);
        let resultado = monto / tipoCambio;
        console.log(`Resultado: ${resultado.toFixed(2)} ${tipoMoneda}`);
        break;
      } else {
        intentos--;
        if (intentos === 0) {
          throw new Error('Se han agotado los intentos. Por favor, contacta al servicio de atención al cliente.');
        }
        console.log(`Tipo de moneda no válido. Te quedan ${intentos} intentos.`);
      }
    }
  }
  
  try {
    casaDeCambio();
  } catch (error) {
    console.error(error.message);
  }
  


