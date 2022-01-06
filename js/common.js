
// $('.trigger-menu').click(function(){
//     $('.aside-on').toggleClass('active');
// })


const btnBurger = document.querySelector('.trigger-menu');
const elNav = document.querySelector('.aside-on');
btnBurger.onclick = function(){
    if( !elNav.classList.contains('active') ){
        elNav.classList.add('active');
    }else{
        elNav.classList.remove('active');
    }
}


