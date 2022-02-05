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

function searchText(){
    var currentLocation = window.location.href;
    var search = document.querySelector("#search").value;
    search = search.toLowerCase();

    currentLocation = currentLocation.split("/");
    search=search.split(" ");
    console.log(currentLocation);

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