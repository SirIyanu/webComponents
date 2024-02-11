// const button = document.getElementById('plus')
// button((plus)=>{
//     plus.addEventListener('click', function(){
//         plus.innerHTML= plus.innerHTML==='+'?'-':'+';
//         const info = plus.info.toggle('hidden') 
//     })
// })




    const button = document.getElementById('plus');
    button.addEventListener('click', function() {
        button.innerHTML = button.innerHTML === '+' ? '-' : '+';
        const infoElements = document.querySelectorAll('.info');
        infoElements.forEach(function(info) {
            info.classList.toggle('hidden');
        });
    });


