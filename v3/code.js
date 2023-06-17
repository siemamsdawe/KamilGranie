document.getElementById("enter").addEventListener('click', check);
document.getElementById("cancel").addEventListener('click', cancel);
document.getElementById("clearAll").addEventListener('click', clearAll);

document.getElementById('settings').addEventListener('click', showSettings);
document.getElementById('closeSettings').addEventListener('click', closeStting);
document.querySelector("#DarkTheme").addEventListener("click", colorDarkTheme);
document.getElementById('ColorFullTheme').addEventListener('click', colorColorFullTheme);
document.querySelector("#switchbackground").addEventListener('click', function(){moveSwitch()});
document.querySelector("#switchbackground2").addEventListener('click', function(){moveSwitch2()});
document.querySelector('body').addEventListener('keydown', element => { writeInputKey(element, 1)});

document.querySelectorAll('.key').forEach( element => { 
    element.addEventListener('click', function(){
        keyboardAddLetter(element.getAttribute('data-value'))
        });
});

const words = ["ROWER", "RURKA", "MYSZA", "LAMPA", "KOTKI", "SKLEP", "TRAWA", "KARTY","TANIE", "KWIAT", "SZAFA", "MISKA","DUSZA","BŁOTO","KRATA","PRACA","SERCE","KUFEL","PLAMA","MISJA","KLATA","ZAMEK","PŁYTA","SŁOWO","BRAMA","WYSPA","ŚMIEĆ", "GRACZ","DROGA", "RANNY", "CHATA", "MUCHA","DESKA", "PRAWO", "NARTY", "PIŁKA", "ŁYDKA"];

let word = words[Math.floor(Math.random() * words.length-1)];
const randomWordArray = word.split("");
const randomWordString = word;
var helpArray = [0, 0, 0, 0, 0];
var counter = 0;
var currentCounter = 1;
var valueInput = document.getElementById("txt");

console.log(word)

function showSettings()
{
    document.querySelector("main").style.opacity = "0.6";
    document.querySelector("#settingsNav").style.display = "block";
}

function closeStting()
{
    document.querySelector("main").style.opacity = "1";
    document.getElementById('settingsNav').style.display = "none";
}

var currentTheme = true;
var currentColorTheme = true;

function moveSwitch()
{
    if(document.querySelector("#switch").classList != "switchMove")
    {
        document.querySelector("#switch").classList.add("switchMove");
        document.querySelector("#switch").classList.remove("switchMoveReverse");
    }
    else
    {
        document.querySelector("#switch").classList.add("switchMoveReverse");
        document.querySelector("#switch").classList.remove("switchMove");
    }
}

function moveSwitch2()
{
    if(document.querySelector("#switch2").classList != "switchMove")
    {
        document.querySelector("#switch2").classList.add("switchMove");
        document.querySelector("#switch2").classList.remove("switchMoveReverse");
    }
    else
    {
        document.querySelector("#switch2").classList.add("switchMoveReverse");
        document.querySelector("#switch2").classList.remove("switchMove");
    }
}

function colorDarkTheme()
{
    var containerHeaderHandle =  document.querySelector("#containerHeader");
    var keysHandle = document.querySelectorAll(".key");
    var keysSpecialv2Handle = document.querySelectorAll(".keysSpecialv2");
    var keysSpecialHandle = document.querySelector(".keysSpecial");
    var bodyHandle = document.querySelector("body");

    if(currentTheme)
    {
        containerHeaderHandle.style.color = "whitesmoke";
        containerHeaderHandle.style.borderBottom = "1px white solid";

        keysHandle.forEach(element => {
            element.style.background = "rgb(40, 40, 40)";
            element.style.color = "whitesmoke"});

        keysSpecialv2Handle.forEach(element => { 
            element.style.background = "rgb(40, 40, 40)";
            element.style.color = "whitesmoke"});

        keysSpecialHandle.style.color = "whitesmoke";
        keysSpecialHandle.style.background = "rgb(40, 40, 40)";

        bodyHandle.style.background = "linear-gradient(to right, rgb(5, 5, 5), rgb(5, 5, 5))";

        document.querySelector("#switchbackground").style.background = "black";

        currentTheme = false;
    }
    else
    {
        containerHeaderHandle .style.color = "black";
        containerHeaderHandle .style.borderBottom = "1px black solid";

        keysHandle.forEach(element => {
            element.style.background = "rgb(214, 215, 215)";
            element.style.color = "black"});

        keysSpecialv2Handle.forEach(element => { 
            element.style.background = "rgb(214, 215, 215)";
            element.style.color = "black"});

        keysSpecialHandle.style.color = "black";
        keysSpecialHandle.style.background = "rgb(214, 215, 215)";

        bodyHandle.style.background = "linear-gradient(to right, rgb(255, 255, 255),rgba(255, 255, 255, 0.801))";

        document.querySelector("#switchbackground").style.background = "rgb(183, 183, 183)";

        currentTheme = true;
    }
}

function colorColorFullTheme()
{
    if(currentColorTheme)
    {
        var bodyHandle = document.querySelector("body");
        bodyHandle.style.background = "linear-gradient(to right, rgb(66, 228, 185), rgba(220, 68, 195, 0.801))";
        document.querySelector("#switchbackground2").style.background = "black";
        currentColorTheme = false;
    }
    else 
    {
        document.querySelector("#switchbackground2").style.background = "rgb(183, 183, 183)";
        currentColorTheme = true;
        currentTheme = false;
        colorDarkTheme();
        moveSwitch(2);
    }
}

function writeInputKey(element, access)
{
    if(currentCounter <7)
    {
        var outputHandle = document.querySelector("#output"+(counter+1)+(" div.block:nth-child(")+currentCounter+(")"));

        if(access == 1)
        {
            //code for keyevents

            if(element.key == "Backspace") 
            {
                cancel();
            }
            else if(element.key == "Enter") 
            {
                check();
            }
            else if(element.keyCode >= 65 && element.keyCode <=90 && currentCounter < 6)
            {
                valueInput.value += element.key.toUpperCase();
                outputHandle.innerHTML = element.key.toUpperCase();
                currentCounter++;
            }

        }
        else if(access == 2 && currentCounter < 6)
        {
            valueInput.value += element.key;
            outputHandle.innerHTML = element.key;
            currentCounter++; 
        }
    }

}

function check() 
{
    if (valueInput.value.length == 5) 
    {
        var valueInputArray = valueInput.value.toUpperCase().split("");

        helpArray = [0, 0, 0, 0, 0];
        for (i = 0; i < 5; i++) 
        {
            if (valueInputArray[i] == randomWordArray[i])
            {
                helpArray[i] = 1;
                colorKeyboard(valueInputArray[i], "rgb(52, 116, 52)");
            } 
            else if (randomWordString.indexOf(valueInputArray[i]) > -1)
            {
                helpArray[i] = 2;
                colorKeyboard(valueInputArray[i], "rgb(171, 171, 23)");
            } 
            else
            {
                colorKeyboard(valueInputArray[i], "rgb(71, 72, 71)");
            }
        }

        let contentGenerated = "";
        for (i = 0; i < 5; i++)
        {
            if (helpArray[i] == 1)contentGenerated += `<div class="block green">${valueInputArray[i]}</div>`;
            else if (helpArray[i] == 2)contentGenerated += `<div class="block yellow">${valueInputArray[i]}</div>`;
            else contentGenerated += `<div class="block gray"> ${valueInputArray[i]}</div>`;
        }
        contentGenerated += "<div style='clear: both'></div>";

        document.querySelector(("#output" + (++counter))).innerHTML = contentGenerated;

        checIfWin();
        currentCounter = 1;
    }
}

function checIfWin() 
{
    let flag = 0;
    for (i = 0; i < 5; i++) 
    {
        if(helpArray[i] == 1) flag++;
    }
    if (flag == 5) 
    {
        valueInput.style.display = "none";
        let x = 'output'+counter;
        document.getElementById(x).classList.add('coolWin');
 
    }
    else if (counter == 6) 
    {
        alert("poprawne słoto to: " + randomWordString)
        valueInput.style.display = "none";
    }

    valueInput.value ="";
}

function colorKeyboard(value, color)
{
    document.querySelectorAll('.key').forEach(element => {
        if(element.getAttribute('data-value') == value) element.style.backgroundColor = color;
    })
}

function keyboardAddLetter(letter)
{
    writeInputKey({key: letter, code: letter},2);
}

function cancel()
{
    if(valueInput.value.length > 0)
    {
        let canceledOneLastLetter = valueInput.value.substring(0,valueInput.value.length-1)
        valueInput.value = canceledOneLastLetter;
        currentCounter--;
        var outputHandle = document.querySelector("#output"+(counter+1)+(" div.block:nth-child(")+currentCounter+(")"));
        outputHandle.innerHTML = "";
    }
}

function clearAll()
{
    valueInput.value = "";
    var outputHandlev2 = document.querySelectorAll("#output"+(counter+1)+" "+"div.block");
    outputHandlev2.forEach(element => { element.innerHTML = ""})
    currentCounter = 1;
}