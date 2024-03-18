const globalVariables = {
    hamburgerClicked: true,
    headerSubNavDropboxClicked: false,
    howItsWorkStep01Clicked: false,
    howItsWorkStep02Clicked: false,
    howItsWorkStep03Clicked: false,
    howItsWorkStep04Clicked: false,
    question01clicked: false,
    question02clicked: false,
    question03clicked: false,
    question04clicked: false,
    question05clicked: false,
    question06clicked: false,
    question07clicked: false,
    question08clicked: false,
    question09clicked: false,
    question10clicked: false,
    question11clicked: false,
    question12clicked: false,
    question13clicked: false,
    question14clicked: false,
    question15clicked: false,
    question16clicked: false,
    question17clicked: false,
    question18clicked: false,
    question19clicked: false
}

function question01(){
    if(!globalVariables.question01clicked){
        document.getElementById("arrow-down-01").classList.add("arrow-up");
        globalVariables.question01clicked = true;
        document.getElementById("q1-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q1-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-01").classList.remove("arrow-up");
        globalVariables.question01clicked = false;
        document.getElementById("q1-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q1-answer").classList.add("display-none");
        }, 300); 
    }
}
function question02(){
    if(!globalVariables.question02clicked){
        document.getElementById("arrow-down-02").classList.add("arrow-up");
        globalVariables.question02clicked = true;
        document.getElementById("q2-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q2-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-02").classList.remove("arrow-up");
        globalVariables.question02clicked = false;
        document.getElementById("q2-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q2-answer").classList.add("display-none");
        }, 300); 
    }
}
function question03(){
    if(!globalVariables.question03clicked){
        document.getElementById("arrow-down-03").classList.add("arrow-up");
        globalVariables.question03clicked = true;
        document.getElementById("q3-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q3-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-03").classList.remove("arrow-up");
        globalVariables.question03clicked = false;
        document.getElementById("q3-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q3-answer").classList.add("display-none");
        }, 300); 
    }
}
function question04(){
    if(!globalVariables.question04clicked){
        document.getElementById("arrow-down-04").classList.add("arrow-up");
        globalVariables.question04clicked = true;
        document.getElementById("q4-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q4-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-04").classList.remove("arrow-up");
        globalVariables.question04clicked = false;
        document.getElementById("q4-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q4-answer").classList.add("display-none");
        }, 300); 
    }
}
function question05(){
    if(!globalVariables.question05clicked){
        document.getElementById("arrow-down-05").classList.add("arrow-up");
        globalVariables.question05clicked = true;
        document.getElementById("q5-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q5-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-05").classList.remove("arrow-up");
        globalVariables.question05clicked = false;
        document.getElementById("q5-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q5-answer").classList.add("display-none");
        }, 300); 
    }
}
function question06(){
    if(!globalVariables.question06clicked){
        document.getElementById("arrow-down-06").classList.add("arrow-up");
        globalVariables.question06clicked = true;
        document.getElementById("q6-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q6-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-06").classList.remove("arrow-up");
        globalVariables.question06clicked = false;
        document.getElementById("q6-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q6-answer").classList.add("display-none");
        }, 300); 
    }
}
function question07(){
    if(!globalVariables.question07clicked){
        document.getElementById("arrow-down-07").classList.add("arrow-up");
        globalVariables.question07clicked = true;
        document.getElementById("q7-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q7-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-07").classList.remove("arrow-up");
        globalVariables.question07clicked = false;
        document.getElementById("q7-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q7-answer").classList.add("display-none");
        }, 300); 
    }
}
function question08(){
    if(!globalVariables.question08clicked){
        document.getElementById("arrow-down-08").classList.add("arrow-up");
        globalVariables.question08clicked = true;
        document.getElementById("q8-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q8-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-08").classList.remove("arrow-up");
        globalVariables.question08clicked = false;
        document.getElementById("q8-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q8-answer").classList.add("display-none");
        }, 300); 
    }
}
function question09(){
    if(!globalVariables.question09clicked){
        document.getElementById("arrow-down-09").classList.add("arrow-up");
        globalVariables.question09clicked = true;
        document.getElementById("q9-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q9-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-09").classList.remove("arrow-up");
        globalVariables.question09clicked = false;
        document.getElementById("q9-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q9-answer").classList.add("display-none");
        }, 300); 
    }
}
function question10(){
    if(!globalVariables.question10clicked){
        document.getElementById("arrow-down-10").classList.add("arrow-up");
        globalVariables.question10clicked = true;
        document.getElementById("q10-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q10-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-10").classList.remove("arrow-up");
        globalVariables.question10clicked = false;
        document.getElementById("q10-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q10-answer").classList.add("display-none");
        }, 300); 
    }
}
function question11(){
    if(!globalVariables.question11clicked){
        document.getElementById("arrow-down-11").classList.add("arrow-up");
        globalVariables.question11clicked = true;
        document.getElementById("q11-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q11-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-11").classList.remove("arrow-up");
        globalVariables.question11clicked = false;
        document.getElementById("q11-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q11-answer").classList.add("display-none");
        }, 300); 
    }
}
function question12(){
    if(!globalVariables.question12clicked){
        document.getElementById("arrow-down-12").classList.add("arrow-up");
        globalVariables.question12clicked = true;
        document.getElementById("q12-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q12-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-12").classList.remove("arrow-up");
        globalVariables.question12clicked = false;
        document.getElementById("q12-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q12-answer").classList.add("display-none");
        }, 300); 
    }
}
function question13(){
    if(!globalVariables.question13clicked){
        document.getElementById("arrow-down-13").classList.add("arrow-up");
        globalVariables.question13clicked = true;
        document.getElementById("q13-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q13-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-13").classList.remove("arrow-up");
        globalVariables.question13clicked = false;
        document.getElementById("q13-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q13-answer").classList.add("display-none");
        }, 300); 
    }
}
function question14(){
    if(!globalVariables.question14clicked){
        document.getElementById("arrow-down-14").classList.add("arrow-up");
        globalVariables.question14clicked = true;
        document.getElementById("q14-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q14-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-14").classList.remove("arrow-up");
        globalVariables.question14clicked = false;
        document.getElementById("q14-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q14-answer").classList.add("display-none");
        }, 300); 
    }
}
function question15(){
    if(!globalVariables.question15clicked){
        document.getElementById("arrow-down-15").classList.add("arrow-up");
        globalVariables.question15clicked = true;
        document.getElementById("q15-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q15-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-15").classList.remove("arrow-up");
        globalVariables.question15clicked = false;
        document.getElementById("q15-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q15-answer").classList.add("display-none");
        }, 300); 
    }
}
function question16(){
    if(!globalVariables.question16clicked){
        document.getElementById("arrow-down-16").classList.add("arrow-up");
        globalVariables.question16clicked = true;
        document.getElementById("q16-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q16-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-16").classList.remove("arrow-up");
        globalVariables.question16clicked = false;
        document.getElementById("q16-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q16-answer").classList.add("display-none");
        }, 300); 
    }
}
function question17(){
    if(!globalVariables.question17clicked){
        document.getElementById("arrow-down-17").classList.add("arrow-up");
        globalVariables.question17clicked = true;
        document.getElementById("q17-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q17-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-17").classList.remove("arrow-up");
        globalVariables.question17clicked = false;
        document.getElementById("q17-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q17-answer").classList.add("display-none");
        }, 300); 
    }
}
function question18(){
    if(!globalVariables.question18clicked){
        document.getElementById("arrow-down-18").classList.add("arrow-up");
        globalVariables.question18clicked = true;
        document.getElementById("q18-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q18-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-18").classList.remove("arrow-up");
        globalVariables.question18clicked = false;
        document.getElementById("q18-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q18-answer").classList.add("display-none");
        }, 300); 
    }
}
function question19(){
    if(!globalVariables.question19clicked){
        document.getElementById("arrow-down-19").classList.add("arrow-up");
        globalVariables.question19clicked = true;
        document.getElementById("q19-answer").classList.remove("display-none");
        setTimeout(() => {
            document.getElementById("q19-answer").classList.remove("max-height-0");
        }, 20);
    }else{
        document.getElementById("arrow-down-19").classList.remove("arrow-up");
        globalVariables.question19clicked = false;
        document.getElementById("q19-answer").classList.add("max-height-0");
        setTimeout(() => {
            document.getElementById("q19-answer").classList.add("display-none");
        }, 300); 
    }
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