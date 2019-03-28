var section3 = document.querySelector(".section3")


section3.addEventListener('click', event =>{
    const targe = event.target;
    
    if(targe.classList.contains('show-more')){
        let list = targe.parentElement.querySelector('.wrapper-list'); 
        list.classList.toggle("d-none");
        targe.classList.toggle('transform');
    }
});