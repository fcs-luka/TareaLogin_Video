const getCine = async () =>{
    const id = new URLSearchParams(window.location.search).get(`id`);
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`);
    if (data.status === 200){
        const cine = await data.json();
        const cines = cine.data;
        let html = `
        
				<h2>${cines.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cines.Direccion} - ${cines.Distrito}</p>
						<p>Teléfono: ${cines.Telefonos} anexo 865</p>
						<br/>
						<div class="tabla">
                            ${cines.tarifas.map((tarifa,index)=> `
                            <div class= "fila${index % 2 === 0 ? `impar` : ``}">
                                <div class="celda-titulo">${tarifa.DiaSemana}</div>
                                <div class="celda">${tarifa.Precio}</div>
                                
                            `).join ('')}
						<div class="aviso">
							<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
						</div>
					</div>
					<img src="img/cine/${cines.id}.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
                                ${cines.peliculas.map((pelicula,index) =>`
							<div class="fila${index % 2 === 0 ? `impar` : ``}">
								<div class="celda-cabecera">${pelicula.Titulo}</div>
								<div class="celda-cabecera">${pelicula.Horarios}</div>
							</div>
                                                            `).join ('')}
						</div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/1.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, Siempre pensando en tí. 
					</span>		
				</div>
				
        `;

        document.getElementById(`contenido-interno`).innerHTML = html;
    }
}

getCine();