$(function() {
  initValidateLoginForm();
});


function login(event) {
	event.preventDefault();
	var usuario = $('#username').val();
	var contra = $('#password').val();
};


function initValidateLoginForm() {
  //Tambien se puede con #loginForm
  $("#formulario_login").validate({ //#register-form is form id
      rules: {
          username: {
              required: true,
              minlength: 6
          },
          password: {
              required: true,
              minlength: 8
          },
      },
      // Mensajes de errores
      messages: {
          username: {
              required: "Introduce un nombre de usuario",
              minLength: "El nombre de usuario debe contener 6 caracteres"
          },
          password: {
            required: "Introduce una contraseña",
            minLength: "La contraseña debe contener 8 caracteres"
          },
      },
      submitHandler: function(form) {
          window.location.href = "index.html";
      }
  });
}