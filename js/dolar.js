    fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
      let div = document.querySelector("#dolar");
      
      data.forEach(e => {       
        let nuevo = document.createElement("div");
        nuevo.classList.add("dolar-card");
        nuevo.innerHTML = `
          <h5>${e.nombre}</h5>
          <p>Compra: ${e.compra}</p>
          <p>Venta: ${e.venta}</p>
        `;
        
        div.appendChild(nuevo);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

  
  
  
  
  
  


