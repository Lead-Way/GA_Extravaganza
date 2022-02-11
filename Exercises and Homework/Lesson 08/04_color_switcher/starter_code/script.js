// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)

// Remember to try one step at a time, testing each stage as you go!

//Funtion to turn on graymode
function turnIsGray (){
    // target body tag and set the class to be grey
    document.querySelector("body").setAttribute ("class", "grayMode")
} 
// funtion to turn on light mode
function turnItLight () {
    // target body tag and remove gray class
    document.querySelector("body").classlistremove{"grayMode"}
}

// liten for clicks on gray button
doumnet.querySelector ("#graybutton")