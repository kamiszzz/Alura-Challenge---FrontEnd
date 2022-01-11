$(document).ready(function () {
    $('#editordecor').on("input change", function () {
      // Change Body Background Color
      $("#conteudo").css("background-color", $(this).val());
    });
  });