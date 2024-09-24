
const pickerBox = document.createElement("div");
pickerBox.style.width = '200px';
pickerBox.style.height ='200px';
pickerBox.style.border = '2px solid black';
document.body.append(pickerBox)
// document.insertBefore(btn) <---PROBLEM "don`t know the proper working theory "

 function rgbColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})` 
}

document.getElementById('btn').addEventListener('click',  function(){
    const bgColor = rgbColor();
    pickerBox.style.backgroundColor = bgColor;
})
