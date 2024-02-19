// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Alert on button click by id
$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

// Color change on element double click by tag
$(document).ready(function () {
  $("main div div h3").on("dblclick", function () {
    $(this).css("color", "#dc3545");
  });
});

// Toggle card content on card title click by class
$(document).ready(function () {
  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});

// Carousel buttons color change on click
$(document).ready(function () {
  $("#slide2").on("click", function () {
    $(this).addClass("carousel-btn-active");
    $("#slide1").removeClass("carousel-btn-active");
  });
  $("#slide1").on("click", function () {
    $(this).addClass("carousel-btn-active");
    $("#slide2").removeClass("carousel-btn-active");
  });
});
