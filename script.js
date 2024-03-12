const globalVariables = {
    hamburgerClicked: true
}



function hamburgerClick(){
    if (globalVariables.hamburgerClicked) {
        globalVariables.hamburgerClicked = false;
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