const colors = ['red','blue','gray','brown','yellow','pink'];
const color = document.querySelector('.color')
document.getElementById('btn').addEventListener('click', function(){

    const afk = switchA()
    document.body.style.background = colors[afk]
    color.innerHTML = colors[afk]
})

function switchA(){
    return Math.floor(Math.random() * colors.length);
}