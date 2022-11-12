//SEGUNDA API CONSUMIDA
const aplicacion=document.querySelector('#container2')
const API_URL='https://dragon-ball-super-api.herokuapp.com/api/characters';

fetch(API_URL)
.then(res => res.json())
.then(data => {
    data.forEach(data =>{
        const p=document.createElement('p')
        const n1=document.createElement('p')
        const n2=document.createElement('p')
        const n3=document.createElement('p')
        const n4=document.createElement('p')
        const n6=document.createElement('p')
        const img=document.createElement('img')
        let nombre="Nombre: " + data.name
        let especie="Especie: " + data.specie
        let rol="Rol: " + data.role
        let estado="Estado: " + data.status
        let universo="Universo: " + data.universe
        let planeta_de_origen="Planeta de Origen: " + data.originplanet
        let imagen=data.imageUrl
        p.innerHTML=nombre
        n1.innerHTML=especie
        n2.innerHTML=rol
        n3.innerHTML=estado
        n4.innerHTML=universo
        n6.innerHTML=planeta_de_origen
        img.src=imagen
        aplicacion.appendChild(p)
        aplicacion.appendChild(n1)
        aplicacion.appendChild(n2)
        aplicacion.appendChild(n3)
        aplicacion.appendChild(n4)
        aplicacion.appendChild(n6)
        aplicacion.appendChild(img)
    });
})
.catch(err=>console.log(err))