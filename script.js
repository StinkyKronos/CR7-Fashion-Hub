function changePage(text){
    text = text.innerText;
    text = text.toLowerCase();

    let location = window.location.href;

    if (text=="new"){
        window.location.href = "/index.html";

    }
    else if (location.includes("pages/")){
        window.location.href = text+".html";
    }
    else{
        window.location.href = "pages/" + text+".html";

    }
}

const searchbar = document.getElementById("search");
let opened = false;
function searchText(){
    if (screen.width <= 1000 && opened == false) {
        searchbar.style.height = "20px";
        document.querySelector(".bottomnav").style.marginTop = "25px";
        searchAndroid();
        opened = true
        return;
    }
    else if (screen.width > 1000){
        searcher();
    }
    else if (opened == true){
        searcher();
    }
}
searchbar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }});

function searcher(){
    var currentLocation = window.location.href;
    var search = document.querySelector("#search").value;
    search = search.toLowerCase();

    currentLocation = currentLocation.split("/");
    search=search.split(" ");

    if (search.includes("shirt") || search.includes("shirts")){
        if (currentLocation.includes("pages")){
            window.location.href = "shirts.html";
        }
        else{
            window.location.href = "pages/shirts.html";
        }
    }
    else if (search.includes("pant") || search.includes("pants") || search.includes("jeans")){
        if (currentLocation.includes("pages")){
            window.location.href = "pants.html";
        }
        else{
            window.location.href = "pages/pants.html";
        }
    }
    else if (search.includes("t-shirt") || search.includes("t-shirts") || search.includes("tshirt") || search.includes("tshirts")){
        if (currentLocation.includes("pages")){
            window.location.href = "t-shirts.html";
        }
        else{
            window.location.href = "pages/t-shirts.html";
        }
    }
    else if (search.includes("jacket") || search.includes("jackets")){
        if (currentLocation.includes("pages")){
            window.location.href = "jackets.html";
        }
        else{
            window.location.href = "pages/jackets.html";
        }
    }
    else{
        confirm = confirm("No results found. Do you want to check out other products?");
        if (confirm == true){
            if (currentLocation.includes("pages")){
                window.location.href = "t-shirts.html";
            }
            else{
                window.location.href = "pages/t-shirts.html";
            }
        }
        else{
            return
        }
    }
    
}

function scrollTop(){
    var bottom = document.querySelector(".topnav");
    location.href = ".topnav";
}

function contact(){
    window.location.href = "tel:8848361748";
}

if (screen.width <= 1000){
}

function searchAndroid(){
    document.getElementById("search").placeholder= "Search for products...";

 
}