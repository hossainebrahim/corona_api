fetch('https://coronavirus-19-api.herokuapp.com/countries')
.then(Response => Response.json())
.then(data =>{
    data.forEach(value => {
        var table=
        `<tr>
        <td>${value.country}</td>
        <td>${value.cases}</td>
        <td>${value.todayCases}</td>
        <td>${value.deaths}</td>
        <td>${value.todayDeaths}</td>
        <td>${value.recovered}</td>
        <td>${value.active}</td>
        <td>${value.critical}</td>
        <td>${value.casesPerOneMillion}</td>
        <td>${value.deathsPerOneMillion}</td>
        <td>${value.totalTests}</td>
        <td>${value.testsPerOneMillion}</td>
        </tr>`
        let covid=document.querySelector('#tbody');
            covid.innerHTML +=table;
        // document.querySelector('#tbody').insertAdjacentHTML('beforeend',table)
        
    })
})