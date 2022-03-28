
/* MODALE */
const activator = document.getElementById('activator');

const modale = document.querySelector('.modale');

const back = document.getElementById('go-back');

const content = document.querySelector('.modale__content');

activator.addEventListener('click', modaleActivate);

back.addEventListener('click', modaleDeactivate);

modale.addEventListener('click', e =>{
    if(e.target !== modale) return;
    console.log(e.target);
    modaleDeactivate();
})

function modaleActivate(){
    modale.classList.add('modale--active');
}

function modaleDeactivate(){
    modale.classList.remove('modale--active');
}


/* ACCORDION */

const accordion = document.getElementsByClassName('accordion__part');

/* console.log(accordion); */
for(var i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        var fold = this.nextElementSibling;
        if(fold.classList.contains('accordion__fold--folded')){
            fold.classList.remove('accordion__fold--folded');
        }else{
            fold.classList.add('accordion__fold--folded');
        }
    });
}


/* carousel */

const slider = document.querySelector('.carousel__slider');

const pages = document.getElementsByClassName('paginator__dot');

let interval = setInterval(next, 4000);

let selectedPage = 3;
console.log(pages);
for(let i = 3; i < 6; i++){
    
    pages[i].addEventListener('click', function(){
        const oldPage = selectedPage;
        pages[oldPage].classList.remove('paginator__dot--selected');
        pages[i].classList.add('paginator__dot--selected');
        selectedPage = i;
        console.log(oldPage - i);
        
        if((oldPage - i) === 2){
            nextFast();           
        }else if((oldPage - i) === 1){
            nextFast();
            nextFast();
        }else if((oldPage - i) === -2){
            nextFast();
            nextFast();
        }else if((oldPage - i) === -1){           
            nextFast();
        }
        
    });
}




function next(){
    slider.classList.add('carousel__slider--slide');
    let children = [];
    
    let timeOut = setTimeout(()=>{
        for(let i = 0; i<4; i++){
            children[i] = slider.removeChild(slider.firstElementChild);
            //console.log(children);
        }
        
        for(let i = 0; i<4; i++){
            slider.appendChild(children[i]);
        }

        slider.classList.remove('carousel__slider--slide');
        progressPage();
    },500);
    
    children = [];
}


function nextFast(){
    //clearInterval(interval);

    slider.classList.add('carousel__slider--fast-slide');
    let children = [];
    console.log('chiamata nextFast');
    for(let i = 0; i<4; i++){
        children[i] = slider.removeChild(slider.firstElementChild);
        //console.log(children);
    }
    
    for(let i = 0; i<4; i++){
        slider.appendChild(children[i]);
    }

    slider.classList.remove('carousel__slider--fast-slide');
    
    
    children = [];
}

function progressPage(){
    pages[selectedPage].classList.remove('paginator__dot--selected');
    //console.log(selectedPage);
    selectedPage++;
    if(selectedPage === 6){
        selectedPage = 3;
    }
    pages[selectedPage].classList.add('paginator__dot--selected');
}