function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date : document.getElementById("date").value,
    sillas1 : document.getElementById("sillas1").value,
    sillas2 : document.getElementById("sillas2").value,
  };

  const serviceID = "service_ud1ca5s";
  const templateID = "template_0dy8a7a";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("date").value = "";
        document.getElementById("sillas2").value = "";
        document.getElementById("sillas1").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

