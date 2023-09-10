(function(){

    const pictures = ['1','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'];

    const imgContainer =document.querySelector(".img-container");
    const buttons = document.querySelectorAll(".btn");

    let counter=0;

    buttons.forEach(function(button) {
        button.onclick = function(){
            if(this.classList.contains('btn-left')){
                counter--;
                if(counter < 0){
                    counter = pictures.length - 1;
                }
                imgContainer.style.background =`url('./images/${pictures[counter]}.jpg')`
            }

            if(this.classList.contains('btn-right')){
                counter++;
                if(counter > pictures.length -1){
                    counter = 0 ;
                }
                imgContainer.style.background =`url('./images/${pictures[counter]}.jpg')`
            }
        }
    });

})()