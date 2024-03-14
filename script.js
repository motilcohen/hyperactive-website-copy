const globalVariables = {
    hamburgerClicked: true,
    headerSubNavDropboxClicked: false,
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