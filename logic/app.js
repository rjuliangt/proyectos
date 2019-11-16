$(document).ready(init);

function init(){
    $("#libro_tres").booklet(
        {
            width:800,
            height:600,
            
            // De entrada de la pagina
            closed: true, //Da la pinta que el libro esta cerrado
            covers:true,
            autoCenter:true,

            // para modificar las paginas
            pagePadding:1,
            hoverWidth: 80,
        }
    );
}