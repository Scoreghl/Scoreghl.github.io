function xiangyinshi (){
    var one=document.querySelector('.one')
    var two=document.querySelector('.two')
    window.addEventListener('resize',function(){
        console.log('宽'+window.innerWidth);
        console.log('高'+window.innerHeight);
        if(window.innerWidth<900){
            one.children[0].style.display='none'
            two.children[0].style.display='none'
        }
        if(window.innerWidth>900){
            one.children[0].style.display='block'
            two.children[0].style.display='block'
        }
    })}