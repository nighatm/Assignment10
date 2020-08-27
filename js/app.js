// querySelector()
// querySelectorAll()
// getElementById()
// getElementsByClassName()
// getElementsByTagName
// createElement()
// createTextNode()
// removeChild()
// classList add(), remove(), toggle()

//QuerySelector()
var firstPTag = document.querySelector("body p");
firstPTag.style.color = "blue";
firstPTag.fontSize = "40px";

// querySelectorAll()
var allPTags = document.querySelectorAll(" body p");
for (var index=0; index< allPTags.length; index++)
{
   allPTags[index].style.color="orange";
 }


// getElementById()
var header = document.getElementById ("header1Text");
header.style.color="blue";

// getElementsByClassName()
var infoTags = document.getElementsByClassName("pText")
for (var index=0; index< infoTags.length; index++)
{
    infoTags[index].style.fontWeight = "bold";

}

// getElementsByTagName

var newHeaderTag= document.getElementsByTagName("h2");
for (var index=0; index< newHeaderTag.length; index++)
{
 newHeaderTag[index].style.backgroundColor = "green";

 }

 // createElement()
var newHeaderElement = document.createElement("h3");
var parent = document.getElementById("parent");
parent.append(newHeaderElement);
newHeaderElement.innerHTML = "This H3 is an Injected Tag!"
newHeaderElement.style.color = "green";

// removeChild()
var newHeader = document.getElementById("header2Text");
header2Text.remove();

// classList add(), remove(), toggle()

var changeText= document.getElementsByClassName("pText");
for (var index=0; index< changeText.length; index++)
{
    changeText[index].classList.add("textp");

}

// classList add(), remove(), toggle() for Images
var cake = document.getElementById("image1");
cake.classList.add("imageCake");

cake.classList.remove("imageCake"); //will remove the class

function toggleCake()
{
    var cake = document.getElementById("image1");
    cake.classList.toggle("imageCake");
}