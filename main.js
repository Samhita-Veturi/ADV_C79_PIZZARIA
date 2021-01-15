Menu_List = [
    "Chicken Tandoori",
    "Tandoori Paneer",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza",
    "Peppy Paneer",
    "Veggie Delight",
    "Veg Supreme"
];

function Get_Menu(){
    var htmlData;
    htmlData="<ol class='menulist'>"
    Menu_List.sort()
    for(var i=0;i<Menu_List.length;i++){
        htmlData = htmlData+'<li>' + Menu_List[i] +'</li>'
    }
    htmlData= htmlData+"</ol>"
    document.getElementById("Display-Menu").innerHTML = htmlData;

}

function Add_Item(){
    var htmlDATA;
    var item = document.getElementById("add_item").value;
    Menu_List.push(item);
    Menu_List.sort;
    htmlDATA = "<section class='cards'>"
    for(var j=0;j<Menu_List.length;j++){
    htmlDATA = htmlDATA+ "<div class='cards'>" + "<img src='pizzaImg.png'>" + Menu_List[j] +"</div>";
    htmlDATA = htmlDATA + "</section>";
    }
    document.getElementById("Display_AddedMenu").innerHTML = htmlDATA;
}