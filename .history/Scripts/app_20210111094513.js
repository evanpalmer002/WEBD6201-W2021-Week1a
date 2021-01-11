//IIFE - Immediately Invoked Function Expression
//Anonymous Self-Executing Function

(function()
{

    function Start()
    {
        console.log("App Started...")
    }   

    //Add an event listener to the window object 
    //When the browser window finishes loading
    //Call the start function
    window.addEventListener("load", Start);











})();
