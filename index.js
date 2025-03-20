
function sendMail(event) {
  event.preventDefault(); // Prevenir el envío automático si falta información.

  // Obtener valores de los campos
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var date = document.getElementById("date").value;
  var partySize = document.querySelector('input[name="partySize"]:checked');

  // Validar campos vacíos
  if (!name || !email || !phone || !date || !partySize) {
    alert("Por favor, complete todos los campos antes de confirmar la reserva.");
    return;
  }

  var params = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    partySize: partySize.value,
  };

  const serviceID = "service_ud1ca5s";
  const templateID = "template_0dy8a7a";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Limpiar los campos después del envío exitoso
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("date").value = "";
      document.querySelectorAll('input[name="partySize"]').forEach(radio => radio.checked = false);

      console.log(res);
      alert("¡Su reserva ha sido enviada con éxito!");
    })
    .catch(err => console.log("Error al enviar el correo:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("confirmReservationButton").addEventListener("click", sendMail);
});

