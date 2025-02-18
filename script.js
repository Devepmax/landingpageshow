document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const menuSound = document.getElementById("menuSound");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");

        });
    });
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active")
        }
    });

})

//Codigo para agregar whatsapp via javascript

//document.addEventListener("DOMContentLoaded", function () {
   // const whatsappButton = document.createElement("a");
  //  whatsappButton.href = "https://wa.me/XXXXXXXXXXX";
    //whatsappButton.className = "whatsapp-button";
    //whatsappButton.target = "_blank";
    //whatsappButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">';
    
    //document.body.appendChild(whatsappButton);
//}); 
