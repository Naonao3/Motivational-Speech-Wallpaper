function createWallpaper(wallpaperObject){
    let container = document.createElement("div");
    container.classList.add("container","justify-content-center","d-flex","py-4");

    let wallpaperDiv = document.createElement("div");

     //position & background
    let verticalPosition = wallpaperObject.getVertical();
    let horizontalPosition = wallpaperObject.getHorizontal();
    wallpaperDiv.classList.add("d-flex","vh-75","imgBackGroung",verticalPosition,horizontalPosition);
    wallpaperDiv.style = "background-image:url(" + wallpaperObject.url +")";

    container.append(wallpaperDiv);



    //text & color
    let textDiv = document.createElement("div");
    textDiv.classList.add("paperText","col-8");
    textDiv.innerHTML = wallpaperObject.text;
    textDiv.style.color = wallpaperObject.color;
    wallpaperDiv.append(textDiv);

    return container;


}

class Wallpaper{
    constructor(text,color,url,vertical,horizontal){
        this.text = text;
        this.color = color;
        this.url = url;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }

    getVertical(){
        if(this.vertical=="top") return "align-items-start";
        else if(this.vertical=="center") return "align-items-center";
        else return "align-items-end";
    }

    getHorizontal(){
        if(this.horizontal=="left")return "justify-content-start";
        else if(this.horizontal=="right")return "justify-content-end";
        else return "justify-content-center"
    }
}

let domObj = document.getElementById("target");

let  wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint","2c3e50" ,"https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");
domObj.append(createWallpaper(wallpaper1));

let wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "#007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
domObj.append(createWallpaper(wallpaper2));

let wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "#ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");;
domObj.append(createWallpaper(wallpaper3));