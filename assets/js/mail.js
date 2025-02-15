document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WObjN3lRwV3EdcpiT"); // Replace with your EmailJS Public Key

  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      let form = event.target; // Reference to the form

      // Collect form data
      let formData = {
          fullName: form.fullName.value,
          email: form.email.value,
          phone: form.phone.value,
          message: form.message.value
    };
    
    console.log(formData)

      // Send email using EmailJS
      emailjs.send("service_d0oxao6", "template_q98pulf", formData)
          .then(function (response) {
              alert("Message sent successfully!");
              document.getElementById("contact-form").reset();
          })
          .catch(function (error) {
              alert("Failed to send message. Please try again.");
              console.error("EmailJS Error:", error);
          });
  });
});
