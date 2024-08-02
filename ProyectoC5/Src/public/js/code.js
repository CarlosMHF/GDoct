
//const modaleditarDocente = new bootstrap.Modal(document.getElementById('modaleditarDocente'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.closest('tr');
   // const fila = e.currentTarget.closest('tr'); // Encontrar la fila más cercana al botón clicado
    if (!fila) return; 

   
    const [id, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Especialidad] = fila.querySelectorAll('td');


   id_editar.value = id.textContent;
   PrimerNombre_editar.value = PrimerNombre.textContent;
   SegundoNombre_editar.value = SegundoNombre.textContent;
   PrimerApellido_editar.value = PrimerApellido.textContent; 
   SegundoApellido_editar.value = SegundoApellido.textContent; 
   Especialidad_editar.value = Especialidad.textContent;


  //  modaleditarDocente.show();
});

 