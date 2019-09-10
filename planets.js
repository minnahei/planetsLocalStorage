let sistemaSolar = {
    planetas: [
        {
            nombre: "mercurio",
            color: "gris",
            imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg"
        },
        {
            nombre: "venus",
            color: "blanco",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg"
        },
        {
            nombre: "tierra",
            color: "azul",
            imagen: "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg"
        },
        {
            nombre: "marte",
            color: "rojo",
            imagen: "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg"
        },
        {
            nombre: "jupiter",
            color: "marrón",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg"
        },
        {
            nombre: "saturno",
            color: "amarillo",
            imagen: "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg"
        },
        {
            nombre: "urano",
            color: "azul",
            imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg"
        },
        {
            nombre: "neptuno",
            color: "azul",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg"
        }
    ]
};

let planetas = sistemaSolar.planetas;

for(let i = 0; i < planetas.length; i++) {

    let caja = document.createElement('div');
    caja.setAttribute('class', 'planets');

    let name = document.createElement('h1');
    name.appendChild(document.createTextNode(planetas[i].nombre));

    let color = document.createElement('h2');
    color.appendChild(document.createTextNode(planetas[i].color));

    let image = document.createElement('img');
    image.setAttribute('style', 'height: 200px');
    image.src = planetas[i].imagen;


    let button = document.createElement('button');
    button.innerHTML= 'favourite';
    button.addEventListener('click', function (){

        sessionStorage.setItem("favourite",planetas[i].nombre, planetas[i].color, JSON.stringify(planetas[i].imagen));
    })

    
    caja.appendChild(name);
    caja.appendChild(color);
    caja.appendChild(image);
    caja.appendChild(button);
    container.appendChild(caja);

}
    let parrafo = document.getElementById('container');
    let favourite = JSON.parse(localStorage.getItem('favourite'));
    parrafo.innerHTML = favourite.nombre + " " + favourite.color + " " + favourite.imagen;