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
const coastData = [

    {
        title: "WEST COAST<br>ISLANDS",

        visit: "Visit from December to April",

        list: [
            "Hot but less humid",
            "Blue skies most days",
            "Perfect for beaches and island hopping"
        ],

        image: "img/westcoast.jpg"
    },

    {
        title: "EAST COAST<br>ISLANDS",

        visit: "Visit from April to September",

        list: [
            "Clear water",
            "Beaches look unreal",
            "Ferry routes operate smoothly"
        ],

        image: "img/eastcoast.jpg"
    },

    {
        title: "BORNEO COAST<br>ISLANDS",

        visit: "Visit from May to October",

        list: [
            "Dry season",
            "Less rainfall",
            "Clearer river waters perfect for wildlife spotting"
        ],

        image: "img/borneocoast.jpeg"
    }

];
