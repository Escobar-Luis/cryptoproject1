const tableBody = document.getElementById('data')
const boxUno = document.getElementById('stock1')
const boxDos = document.getElementById('stock2')
const arr = ['AAPL', 'ABT', 'ACN', 'ADBE', 'AMZN', 'ASML', 'AVGO', 'BABA', 'GOOG', 'FB']

function returnTickerData () {
    arr.forEach((e) => {
    return fetch (`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${e}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
    .then(response => response.json())
    .then(data => { console.log(data)
        //create elements
        const tableRow = document.createElement('tr')
        const stockPrice = document.createElement('td')
        const date = document.createElement('td')
        const dcf = document.createElement('td')
        const symbol  = document.createElement('td')
        //fill in elements with data
        stockPrice.innerHTML = data[ 'Stock Price' ]
        date.innerHTML = data.date
        dcf.innerHTML = data.dcf
        symbol.innerHTML = data.symbol
        symbol.setAttribute('class', 's')
        //append the elements
        tableBody.appendChild(tableRow)
        tableRow.appendChild(symbol)
        tableRow.appendChild(stockPrice)
        tableRow.appendChild(dcf)
        tableRow.appendChild(date)
    })})
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    returnTickerData()
});

const practice = document.getElementById('practice')

practice.addEventListener('click', () => incomeStatementTableData())
function incomeStatementTableData () {
    const symbols = [...document.getElementsByClassName('s')]
    symbols.forEach(function(item){
        const x = item.textContent 
        console.log(x)
        const tableRow = document.createElement('tr')
        fetch(`https://financialmodelingprep.com/api/v3/income-statement/${x.toUpperCase()}?limit=120apikey=dfc166b85e605991cfd559cf91be0d4c`)
                        .then(response => console.log(response.json()))
                        .then(data => {
                            //accessing the first object with all the data
                            const dataAtZero = data[0]
                            let i = 0
                            for (const [key, value] of Object.entries(dataAtZero)) {
                                let ele = document.createElement('p')
                                ele.setAttribute('class', 'key-metrics')
                                if ([value] === null) {
                                    console.log('hello')
                                }
                                else if ([value] > 0 &&  i< 3) {
                                    i++;
                                    ele.innerHTML = `${key} : ${value}`;
                                    boxUno.appendChild(ele)} }
                                    })
                        .catch((error) => {
                        console.log(error);
                    })
                    })
                }



       //addEventListener
    const search = document.getElementById('search')
    const form = document.getElementById('stockSearch')

    form.addEventListener ('submit', (e) =>{
        e.preventDefault();
        stockName = search.value
        fetch (`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${stockName.toUpperCase()}?apikey=97e3e99e10b8a54d8832bd62a5440ded`)
        .then(response => {
            if (response.ok) {
                response.json()

                .then(data => {
        //create elements
                const tableRow = document.createElement('tr')
                const stockPrice = document.createElement('td')
                const date = document.createElement('td')
                const dcf = document.createElement('td')
                const symbol  = document.createElement('td')
            //fill in elements with data
                stockPrice.innerHTML = data[ 'Stock Price' ]
                date.innerHTML = data.date
                dcf.innerHTML = data.dcf
                symbol.innerHTML = data.symbol
                symbol.setAttribute('class', 's')
                //append the elements
                tableBody.appendChild(tableRow)
                tableRow.appendChild(symbol)
                tableRow.appendChild(stockPrice)
                tableRow.appendChild(dcf)
                tableRow.appendChild(date)
                //looping through the  classesafter the event listener of adding a stock
                const symbols = [...document.getElementsByClassName('s')].forEach(function(item) {
                    //item here are the classes
                    //everytime we click on the classes
                    item.addEventListener('click', function() {
                    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stockName.toUpperCase()}?apikey=97e3e99e10b8a54d8832bd62a5440ded`)
                    .then(response => response.json())
                    .then(data => {
                        //accessing the first object with all the data
                        const dataAtZero = data[0]
                        let i = 0
                        for (const [key, value] of Object.entries(dataAtZero)) {
                            let ele = document.createElement('p')
                            ele.setAttribute('class', 'key-metrics')
                            if ([value] === null) {
                                console.log('hello')
                            }
                            else if ([value] > 0 &&  i< 3) {
                                i++;
                                ele.innerHTML = `${key} : ${value}`;
                                boxUno.appendChild(ele)} }
                                })
                            })
                        })
                    })

                    // const p = document.createElement('p')
                }})
                
            .catch((error) => {
                console.log(error);
            })
    form.reset()
        })

    


        // data.forEach(key => {
        // console.log(key)

    // Stock Price: 171.8001
    // date: "2021-10-26"
    // dcf: 294.0866299519437
    // symbol: "BABA"