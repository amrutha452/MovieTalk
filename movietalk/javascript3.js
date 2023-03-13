const A="api_key=bc8679c384aae9eaa97563221f10e157";
const BASE="https://api.themoviedb.org/3";

const POPULAR= BASE+"/discover/movie?sort_by=popularity.desc&"+A;
///discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10
///discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&

const IMG='https://image.tmdb.org/t/p/w500';
const main =document.getElementById("main");
const form=document.getElementById("form");
const search=document.getElementById("search");
const search2=BASE + '/search/movie?'+A;
let size=document.getElementById('res')
let menu=document.querySelector('.btn')
size.onclick=function()
{
menu.classList.toggle("btn2")

}



getM(POPULAR);

function getM(url)
{

    fetch(url).then(result => result.json()).then(data=>{
    console.log(data.results);
        show(data.results);
    })
  
}


function getN(url,n)
{
    fetch(url).then(result => result.json()).then(data=>{
    //console.log(data.results);
        show(data.results);
    })
    if(n=='1')
    {
        document.getElementById('a1').innerHTML="<h2>POPULAR</h2>"
    }
    if(n=='2')
    {
        document.getElementById('a1').innerHTML="<h2>COMEDY</h2>"
    }
    if(n=='3')
    {
        document.getElementById('a1').innerHTML="<h2>Scientific Fiction</h2>"
    }
    if(n=='4')
    {
        document.getElementById('a1').innerHTML="<h2>DRAMA</h2>"
    }
    if(n=='5')
    {
        document.getElementById('a1').innerHTML="<h2>KIDS-SHOW</h2>"
    }
}

function show(data){
    main.innerHTML='';
data.forEach(movie => {
    const {title, poster_path ,vote_average,overview} = movie;
      const m=document.createElement('div');
      m.classList.add('movie');
      m.innerHTML=`
      <img src="${IMG+poster_path}" alt="${title}">
      <div class="info">
          <h2>${title}</h2>
          <span class="${color(vote_average)}">${vote_average}</span>
      </div>
          <div class="overview">
              <h3>Overview</h3>
              ${overview}
          </div>
      `
     
      main.appendChild(m);
      
    })
    
}




function color(v)
{
    if(v>=8)
    {
        return 'green'
    }
    else if(v>=5)
    {
        return 'orange'
    }
    else{
        return 'red'
    }
}
form.addEventListener('submit',(e)=>{
 
    e.preventDefault();
    const s=search.value;
    if(s)
    {
        document.getElementById('a1').innerHTML=search.value;
        document.getElementById('a1').style.fontSize=30;
        
        getM(search2+'&query='+s)
    }
    else{
        getM(POPULAR);
    }

})
