
  $(
    function(){
      let guardadas= localStorage.getItem("tareas");
      if(guardadas !=null){
        $("section").html(guardadas);
      }
    }
    )
    
    $("#agregar").on("click",function(){
      $("aside").css("display","block")
    })
    
    $("#cerrar").on("click",function(){
      $("aside").css("display","none");
      $("form")[0].reset();
    })

    $(".btn-form").on("click", function(){
      let titulo = $("#titulo").val()
      let contenido = $("#contenido").val()
      
    let div = $("<div></div>");
    div.addClass("tareas")
    let header = $('<header></header>');
    header.addClass('nota'); 
    header.html(`<h2>${titulo}</h2><a href="" class="eliminar">X</a>`);
    let p = $(`<p>${contenido}</p>`);
    div.append(header);
    div.append(p);
      
    if ($(this).attr('id') == "guardar-importante") {
      header.addClass('importante');
      $("section").prepend(div);
    } else {
      $("section").append(div);
    }
      
      
    $("form")[0].reset();
    $("aside").css("display","none");
      
    guardarTareas()
      
    return false;
    })
    
   
    function guardarTareas(){
      let actuales = $("section").html();
      localStorage.setItem("tareas",actuales)
    }
    
$("section").on("click",".tareas .eliminar", function(){
    let resp_confirmar = confirm("¿Querés eliminar la tarea?")
    if(resp_confirmar){
        $(this).parent().parent().remove();
        guardarTareas();
    }
    return false;
})



$('#openModal').on('click', function() {
  $('#myModal').removeClass('esconder');
})

$('.close').on('click', function() {
  $('#myModal').addClass('esconder');
})

var modal = document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modal) {
    $('#myModal').addClass('esconder');
  }
}
