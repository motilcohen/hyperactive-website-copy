const globalVariables = {
    hamburgerClicked: true,
    headerSubNavDropboxClicked: false,
    howItsWorkStep01Clicked: false,
    howItsWorkStep02Clicked: false,
    howItsWorkStep03Clicked: false,
    howItsWorkStep04Clicked: false,
}
document.getElementById("desktop-header-sub-nav-link").addEventListener('mouseover', function() {
    document.getElementById("desktop-header-sub-nav").classList.remove("display-none");
    globalVariables.desktopHeaderSubNavLinkHover = true;
});
document.getElementById("desktop-header-sub-nav").addEventListener('mouseover', function() {
    globalVariables.desktopHeaderSubNavHover = true;
});
document.getElementById("desktop-header-sub-nav-link").addEventListener('mouseleave', function() {

        document.getElementById("desktop-header-sub-nav").classList.add("display-none");
});


function step01button(){
    if(!globalVariables.howItsWorkStep01Clicked){     
        document.getElementById("step01-content").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("step01-content").classList.remove("max-height-0");
        }, 20);
        globalVariables.howItsWorkStep01Clicked = true;
        document.getElementById("step-header-button-01").classList.add("rotate-right-45deg");
    }else{
        document.getElementById("step01-content").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("step01-content").classList.add("display-none");
        }, 300); 
        globalVariables.howItsWorkStep01Clicked = false;
        document.getElementById("step-header-button-01").classList.remove("rotate-right-45deg");
    }
}
function step02button(){
    if(!globalVariables.howItsWorkStep02Clicked){     
        document.getElementById("step02-content").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("step02-content").classList.remove("max-height-0");
        }, 20);
        globalVariables.howItsWorkStep02Clicked = true;
        document.getElementById("step-header-button-02").classList.add("rotate-right-45deg");
    }else{
        document.getElementById("step02-content").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("step02-content").classList.add("display-none");
        }, 300); 
        globalVariables.howItsWorkStep02Clicked = false;
        document.getElementById("step-header-button-02").classList.remove("rotate-right-45deg");
    }
}
function step03button(){
    if(!globalVariables.howItsWorkStep03Clicked){     
        document.getElementById("step03-content").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("step03-content").classList.remove("max-height-0");
        }, 20);
        globalVariables.howItsWorkStep03Clicked = true;
        document.getElementById("step-header-button-03").classList.add("rotate-right-45deg");
    }else{
        document.getElementById("step03-content").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("step03-content").classList.add("display-none");
        }, 300); 
        globalVariables.howItsWorkStep03Clicked = false;
        document.getElementById("step-header-button-03").classList.remove("rotate-right-45deg");
    }
}
function step04button(){
    if(!globalVariables.howItsWorkStep04Clicked){     
        document.getElementById("step04-content").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("step04-content").classList.remove("max-height-0");
        }, 20);
        globalVariables.howItsWorkStep04Clicked = true;
        document.getElementById("step-header-button-04").classList.add("rotate-right-45deg");
    }else{
        document.getElementById("step04-content").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("step04-content").classList.add("display-none");
        }, 300); 
        globalVariables.howItsWorkStep04Clicked = false;
        document.getElementById("step-header-button-04").classList.remove("rotate-right-45deg");
    }
}





function headerSubNavDropbox(){
    if(!globalVariables.headerSubNavDropboxClicked){
        globalVariables.headerSubNavDropboxClicked = true;
        document.getElementById("header-sub-nav-dropbox").classList.remove("display-none");
        document.getElementById("header-sub-nav-dropbox-link").classList.add("header-sub-nav-dropbox-link");
    }else{
        globalVariables.headerSubNavDropboxClicked = false;
        document.getElementById("header-sub-nav-dropbox").classList.add("display-none");
        document.getElementById("header-sub-nav-dropbox-link").classList.remove("header-sub-nav-dropbox-link");
    }
}
function hamburgerClick(){
    if (globalVariables.hamburgerClicked) {
        globalVariables.hamburgerClicked = false;
        document.getElementById("dropbox-header-nav").classList.remove("display-none");
        document.getElementById("ham-middle").classList.add("hidden");
        document.getElementById("ham-top").classList.add("rotate-down");
        document.getElementById("ham-bottom").classList.add("rotate-up");
        setTimeout(function(){
            document.getElementById("ham-top").classList.remove("rotate-down");
            document.getElementById("ham-bottom").classList.remove("rotate-up");
            document.getElementById("ham-top").classList.add("stay-rotate-down");
            document.getElementById("ham-bottom").classList.add("stay-rotate-up");
        },230)
    }else{
        globalVariables.hamburgerClicked = true;
        document.getElementById("dropbox-header-nav").classList.add("display-none");
        document.getElementById("ham-top").classList.remove("stay-rotate-down");
            document.getElementById("ham-bottom").classList.remove("stay-rotate-up");
            document.getElementById("ham-top").classList.add("reverse-rotate-down");
            document.getElementById("ham-bottom").classList.add("reverse-rotate-up");
            setTimeout(function(){
                document.getElementById("ham-middle").classList.remove("hidden");
                document.getElementById("ham-top").classList.remove("reverse-rotate-down");
                document.getElementById("ham-bottom").classList.remove("reverse-rotate-up");
            },230)
    }
}