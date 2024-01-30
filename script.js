const localInfo = localStorage.getItem("jsonData");

if(localInfo){
    const info = JSON.parse(localInfo);
    document.getElementById("first-name").textContent = info.firstName;
         document.getElementById("last-name").textContent = info.lastName;
         document.getElementById("country").textContent = info.country;
         document.getElementById("phone-number").textContent = info.phone;
         document.getElementById("state").textContent = info.state;
         document.getElementById("city").textContent = info.city;
         document.getElementById("village").textContent = info.village;
}
else{
    start();
}

function start(){
        const firstName = prompt("Enter your first name:");
        const lastName = prompt("Enter your last name:");
        const country = prompt("Enter your country:");
        const phone = prompt("Enter your phone number:");
        const state = prompt("Enter your state:");
        const city = prompt("Enter your city:");
        const village = prompt("Enter your village:");
        const info = {
            firstName,
            lastName,
            country,
            phone,
            state,
            city,
            village
        }
        localStorage.setItem("jsonData", JSON.stringify(info));

         document.getElementById("first-name").textContent = info.firstName;
         document.getElementById("last-name").textContent = info.lastName;
         document.getElementById("country").textContent = info.country;
         document.getElementById("phone-number").textContent = info.phone;
         document.getElementById("state").textContent = info.state;
         document.getElementById("city").textContent = info.city;
         document.getElementById("village").textContent = info.village;
         
}
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  function toggleDarkMode() {
    // console.log("hi")
    const element = document.body;
    const toggleSwitch = document.getElementById("toggleSwitch");
    const modeImage = document.getElementById("image-container");

    document.body.classList.toggle("dark-mode");
    
    modeImage.innerHTML = toggleSwitch.checked
      ? `<i id="light"class="fa-solid fa-sun fa-xl"></i>`
      : `<i id="dark"class="fa-solid fa-moon fa-flip-horizontal fa-xl"></i>`;
  }

  document
    .getElementById("toggleSwitch")
    .addEventListener("click", toggleDarkMode);
});


