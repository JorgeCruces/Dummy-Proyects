var move = document.getElementById('move');

move.addEventListener('click',(e) =>{
    let objs = document.querySelectorAll('div');

    objs.forEach((o) =>{
        o.classList.toggle('moved');
    });
});