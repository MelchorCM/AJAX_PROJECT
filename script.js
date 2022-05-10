var fuente = 'marca';
var limite = 10;
var objeto;
var pagina = 1;
var busqueda = '';
var arr_noticias = [];
var noticiasHTML = '';

var url = 'https://newsapi.org/v2/everything?' +
'pageSize=10&page=' + pagina +'&'+ 
'sources=' + fuente + '&' +
'apiKey=202b6940dc45424b95c7b12163205a38';

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        objeto = JSON.parse(this.responseText);
        maquetar(objeto);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }


function maquetar(objeto){
  let contador = 0;
  noticiasHTML = '';
  for (i=0;i<objeto.articles.length;i++){
      contador += 1
      arr_noticias.push(objeto.articles[i]);
      noticiasHTML += `<div id = ${contador} class="noticia">
                                <div id='info'>
                                  <p id='date'>${objeto.articles[i].publishedAt}</p>
                                   <h2 id='fuente'>${objeto.articles[i].source.name}</h2>
                                   <p id='contenido'>${objeto.articles[i].content}</p>
                                   <a id='url' href="${url}">Leer más información</a>
                                </div>
                                <div id='imagen'>
                                   <img src=${objeto.articles[i].urlToImage}>
                                </div>
                               </div>`
  }
  noticias.innerHTML = noticiasHTML;
}

function cargarMas(e){
  pagina += 1;
  url = 'https://newsapi.org/v2/everything?' +
  'pageSize=10&page=' + pagina +'&'+ 
  'sources=' + fuente + '&' +
  'apiKey=202b6940dc45424b95c7b12163205a38';
  loadDoc();
}

function filtros(e){
  pagina = 1;
  fuente = '';

  if(document.formulario.marca.checked){
    fuente += 'marca,'
  }
  if(document.formulario.ing.checked){
    fuente += 'ing,'
  }
  if(document.formulario.wired.checked){
    fuente += 'wired,'
  }
  if(document.formulario.rt.checked){
    fuente += 'rt,'
  }
  if(document.formulario.bbcnews.checked){
    fuente += 'bbc-news,'
  }

  url = 'https://newsapi.org/v2/everything?' +
  'pageSize=10&page=' + pagina +'&'+ 
  'sources=' + fuente + '&' +
  'apiKey=202b6940dc45424b95c7b12163205a38';

  loadDoc();
}


function buscar(e){
  let contador = 0;
  noticiasHTML = '';
  busqueda = document.getElementById("busqueda").value;
  if(busqueda != ''){
    pagina = 1;
    //arr_mostrar = arr_noticias.filter(busqueda => arr_noticias.title);
    for (i=0;i<arr_mostrar.length;i++){
      contador += 1;
      noticiasHTML += `<div id = ${contador} class="noticia">
                                <div id='info'>
                                  <p id='date'>${arr_mostrar[i].publishedAt}</p>
                                   <h2 id='fuente'>${arr_mostrar[i].source.name}</h2>
                                   <p id='contenido'>${arr_mostrar[i].content}</p>
                                   <a id='url' href="${url}">Leer más información</a>
                                </div>
                                <div id='imagen'>
                                   <img src=${arr_mostrar[i].urlToImage}>
                                </div>
                               </div>`
  }

  noticias.innerHTML = noticiasHTML;
  }/* else{
    url = 'https://newsapi.org/v2/everything?' +
    'pageSize=10&page=' + pagina +'&'+ 
    'sources=' + fuente + '&' +
    'apiKey=202b6940dc45424b95c7b12163205a38';
  } */
}


window.onload = function() {
  loadDoc();
};