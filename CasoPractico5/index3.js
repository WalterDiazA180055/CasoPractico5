//TERCERA API CONSUMIDA
const aplicacion=document.querySelector('#container3')
const API_URL='https://api.thecatapi.com/v1/images/search';
fetch(API_URL)
.then(res => res.json())
.then(data => {
    data.forEach(data =>{
        const img=document.createElement('img')
        let imagen=data.url
        img.src=imagen
        //GENERA IMAGENES DE GATOS ALEATORIO
        aplicacion.appendChild(img)
    });
})
.catch(err=>console.log(err))