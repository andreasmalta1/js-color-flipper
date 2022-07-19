var btn = document.getElementById("btn");
var currentColor = document.getElementById("current-color");
var span = document.getElementById("color-text");
var dict = {
    '10': 'a',
    '11': 'b',
    '12': 'c',
    '13': 'd',
    '14': 'e',
    '15': 'f'
}

btn.addEventListener('click', genColor);

function genColor(){
    var hexColor = '#'
    for (let i = 0; i < 6; i++){
        let x = Math.floor((Math.random() * 15));
        if (!(x in dict)){
            hexColor += x
        }
        if (x in dict){
            hexColor += dict[x]
        }
        document.body.style.background = hexColor;
        span.innerHTML = hexColor;
        span.style.color = hexColor;
    }

        // #ff5733 


}

genColor()
