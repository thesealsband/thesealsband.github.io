var menuBoxes = document.getElementsByClassName('clicker');
for (var i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['color'] = color;
    }  
}