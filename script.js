  // createweather(weather);
     function createcountries(countries){
     
      countries.map((countrys) => {
            document.body.innerHTML+=`
            
            <div class="container">
            <h2 class="name" id="${countrys.name.common}">
            ${countrys.name.common}</h2>
            <img src="${countrys.flags.svg}" alt="${countrys.name.common}"> 
            <div class="content-container"><p>CAPITAL:${countrys.capital}</p>
            <p>REGION:${countrys.region}</p>
            <p>COUNTRYCODE:${countrys.car.cca2}</p>
            <div>
            <h4 id="${countrys.name.common}"></h4>
            ${countrys.latlng[0]},${countrys.latlng[1]}
            <button onclick="createweather(${countrys.latlng[0]},${countrys.latlng[1]},${countrys.name.common})">weather</button>
            </div>
           </div>
        </div>`       
        });       
     };
  

     function createweather(a,b,id){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=367261ea67167733e6e17d88b7110e22`)
      .then((data)=>data.json())
      // .then((weather)=>console.log(weather.main.temp))
      .then((weather)=>    
    document.getElementById(`${id}`).innerHTML = `<div>
      <p class="lead">Weather:${weather.weather[0].description}</p>
  </div>`     
    )}
 fetch("https://restcountries.com/v3.1/all").then((data)=>data.json())

.then((countries)=>createcountries(countries));











