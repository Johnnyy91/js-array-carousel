console.log('JS OK!');

const images = [ '01', '02', '03', '04', '05'];

const container = document.getElementById('container');

for( i = 0 ; i < images.length ; i++ ){
    const imageclass = i === 0 ? 'd-block' : 'd-none'
    let img = '';
    img = img + `<img src="img/${images[i]}.jpg" class='${imageclass}' alt="img">`;
     container.innerHTML += img;
     }
 
 
 const skinUp =document.querySelector('.skin-up')
 const downUp = document.querySelector('.skin-down') 

 let activeIndex = 0

 skinUp.addEventListener('click', function(){
    if (activeIndex < images.length - 1){
        container.innerHTML = ''
        activeIndex++
        for(let i = 0; i < images.length; i++){
            const imageclass = i === activeIndex ? 'd-block' : 'd-none'
            let img = '';
            img = img + `<img src="img/${images[i]}.jpg" class='${imageclass}' alt="img">`;
            container.innerHTML += img
        }
    }

 }
 )

downUp.addEventListener('click', function () {
    if (activeIndex > 0) {
        container.innerHTML = ''
        activeIndex--
        for (let i = 0; i < images.length; i++) {
            const imageclass = i === activeIndex ? 'd-block' : 'd-none'
            let img = '';
            img = img + `<img src="img/${images[i]}.jpg" class='${imageclass}' alt="img">`;
            container.innerHTML += img
        }
    }

}
)