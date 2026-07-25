// JavaScript Document
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");
const islandToggle = document.getElementById("islandToggle");
const dropdown = document.querySelector(".dropdown");

// Sidebar
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");

    // Close dropdown when sidebar closes
    if(!sidebar.classList.contains("active")){
        dropdown.classList.remove("active");
    }

});

// Dropdown
islandToggle.addEventListener("click", function(e){

    e.preventDefault();

    dropdown.classList.toggle("active");

});

// Close sidebar after clicking a link
document.querySelectorAll(".submenu a, .sidebar nav > a").forEach(link=>{

    link.addEventListener("click",()=>{

        sidebar.classList.remove("active");
        menuBtn.classList.remove("active");
        dropdown.classList.remove("active");

    });

});