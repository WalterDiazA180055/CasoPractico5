//PRIMERA API CONSUMIDA
const aplicacion=document.querySelector('#container')
const API_URL='https://rickandmortyapi.com/api/character';

fetch(API_URL)
.then(res => res.json())
.then(data => {
    data.results.forEach(results =>{
        const p=document.createElement('p')
        const n1=document.createElement('p')
        const n2=document.createElement('p')
        const n3=document.createElement('p')
        const img=document.createElement('img')
        let nombre="Nombre: " + results.name
        let estado="Estado: " + results.status
        let especie="Especie: " + results.species
        let genero="Genero: " + results.gender
        let imagen=results.image
        p.innerHTML=nombre
        n1.innerHTML=estado
        n2.innerHTML=especie
        n3.innerHTML=genero
        img.src=imagen
        aplicacion.appendChild(p)
        aplicacion.appendChild(n1)
        aplicacion.appendChild(n2)
        aplicacion.appendChild(n3)
        aplicacion.appendChild(img)
    });
})
.catch(err=>console.log(err))




