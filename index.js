const tableBody = document.getElementById('data')
const boxUno = document.getElementById('stock1')
const boxDos = document.getElementById('stock2')
const arr = ['AAPL', 'ABT', 'ACN', 'ADBE', 'AMZN', 'ASML', 'AVGO', 'BABA', 'GOOG', 'FB']

function returnTickerData () {
    arr.forEach((e) => {
        return fetch (`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${e}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
        .then(response => response.json())
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
        })})
    }
    
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
        returnTickerData()
    });
    
    const balanceBtn = document.getElementById('balance')
    const cashBtn = document.getElementById('cash')
    const incomeBtn = document.getElementById('income')
    
    incomeBtn.addEventListener('click', () => incomeStatementTableData())
    
    const currentTableHead = document.getElementById('table-head')
    const currentTableHeadRow = document.getElementById('table-head-row')
    const table = document.getElementById('table')

    function incomeStatementTableData () {
        //create table elements
        currentTableHeadRow.remove()
        const newTableRow = document.createElement('tr')
        const y = currentTableHead.appendChild(newTableRow)
        //create table header info
        fetch(`https://financialmodelingprep.com/api/v3/income-statement/BABA?apikey=dfc166b85e605991cfd559cf91be0d4c`)
        .then(response => response.json())
        .then(data => {
            dataAtZeroHead= data[0]
            let inc=0
            for (const [key] of Object.entries(dataAtZeroHead)) {
                if (inc < 50) {
                    inc++;
                    let newTableHeadContent = document.createElement('th')
                    newTableHeadContent.innerHTML = `${key}`;
                    y.appendChild(newTableHeadContent)
                }
            }})
            //save ticker symbols into new array so we can delete old data
            const symbols = [...document.getElementsByClassName('s')]
            const x = symbols.map(function(item){
                const y = item.textContent
                return y
                })
            console.log(x)
            tableBody.remove()
            const newTableBody = document.createElement('tbody')
            table.appendChild(newTableBody)
            arr.forEach(function(ticker) {
                fetch(`https://financialmodelingprep.com/api/v3/income-statement/${ticker}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
                .then(resp => resp.json())
                .then(d => {
                    //accessing the first object with all the data
            dataAtZero= d[0]
            let i = 0
            const r = document.createElement('tr')
            newTableBody.appendChild(r)
            for (const [key, value] of Object.entries(dataAtZero)) {
                console.log(value)
                if (i < 50) {
                    i++;
                    let newTableData = document.createElement('td')
                    newTableData.innerHTML = `${value}`;
                    r.appendChild(newTableData)
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
    })
}

balanceBtn.addEventListener('click', () => balanceStatementTableData())
    function balanceStatementTableData () {
        //create table elements
        currentTableHeadRow.remove()
        const newTableRow = document.createElement('tr')
        const y = currentTableHead.appendChild(newTableRow)
        //create table header info
        fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=120&apikey=dfc166b85e605991cfd559cf91be0d4c`)
        .then(response => response.json())
        .then(data => {
            dataAtZeroHead= data[0]
            let inc=0
            for (const [key] of Object.entries(dataAtZeroHead)) {
                if (inc < 50) {
                    inc++;
                    let newTableHeadContent = document.createElement('th')
                    newTableHeadContent.innerHTML = `${key}`;
                    y.appendChild(newTableHeadContent)
                }
            }})
            //save ticker symbols into new array so we can delete old data
            const symbols = [...document.getElementsByClassName('s')]
            const x = symbols.map(function(item){
                const y = item.textContent
                return y
                })
            console.log(x)
            tableBody.remove()
            const newTableBody = document.createElement('tbody')
            table.appendChild(newTableBody)
            arr.forEach(function(ticker) {
                fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${ticker}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
                .then(resp => resp.json())
                .then(d => {
                    //accessing the first object with all the data
            dataAtZero= d[0]
            let i = 0
            const r = document.createElement('tr')
            newTableBody.appendChild(r)
            for (const [key, value] of Object.entries(dataAtZero)) {
                console.log(value)
                if (i < 50) {
                    i++;
                    let newTableData = document.createElement('td')
                    newTableData.innerHTML = `${value}`;
                    r.appendChild(newTableData)
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
    })
}

cashBtn.addEventListener('click', () => cashStatementTableData())
    function cashStatementTableData () {
        //create table elements
        currentTableHeadRow.remove()
        const newTableRow = document.createElement('tr')
        const y = currentTableHead.appendChild(newTableRow)
        //create table header info
        fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=dfc166b85e605991cfd559cf91be0d4c`)
        .then(response => response.json())
        .then(data => {
            dataAtZeroHead= data[0]
            let inc=0
            for (const [key] of Object.entries(dataAtZeroHead)) {
                if (inc < 50) {
                    inc++;
                    let newTableHeadContent = document.createElement('th')
                    newTableHeadContent.innerHTML = `${key}`;
                    y.appendChild(newTableHeadContent)
                }
            }})
            //save ticker symbols into new array so we can delete old data
            const symbols = [...document.getElementsByClassName('s')]
            const x = symbols.map(function(item){
                const y = item.textContent
                return y
                })
            console.log(x)
            tableBody.remove()
            const newTableBody = document.createElement('tbody')
            table.appendChild(newTableBody)
            arr.forEach(function(ticker) {
                fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${ticker}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
                .then(resp => resp.json())
                .then(d => {
                    //accessing the first object with all the data
            dataAtZero= d[0]
            let i = 0
            const r = document.createElement('tr')
            newTableBody.appendChild(r)
            for (const [key, value] of Object.entries(dataAtZero)) {
                console.log(value)
                if (i < 50) {
                    i++;
                    let newTableData = document.createElement('td')
                    newTableData.innerHTML = `${value}`;
                    r.appendChild(newTableData)
                }
            }
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
        fetch (`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${stockName.toUpperCase()}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
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
                const symbols = [...document.getElementsByClassName('s')]
                console.log(symbols)
                symbols.forEach(function(item) {
                    item.addEventListener('click', function (e){
                        const x = item.innerHTML
                        console.log(e)
                    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${x}?limit=40&apikey=dfc166b85e605991cfd559cf91be0d4c`)
                    .then(response => response.json())
                    .then(data => {
                        //accessing the first object with all the data
                        const dataAtZero = data[0]
                        let i = 0
                        for (const [key, value] of Object.entries(dataAtZero)) {
                            let ele = document.createElement('p')
                            ele.setAttribute('class', 'key-metrics')
                            if (value > 0 &&  i < 3) {
                                i++;
                                ele.innerHTML = `${key} : ${value}`;
                                boxUno.appendChild(ele)
                                console.log(ele)
                            } 
                            else if ( value === null) {
                                console.log('hello')
                            }
                        }
                    })
                            })
                        })
                    })
                }})
                
            .catch((error) => {
                console.log(error);
            })
    form.reset()
        })


const searchUno = document.getElementById('stock1Search')
const searchDos = document.getElementById('stock2Search')
const inputUno = document.getElementById('search1')
const inputDos = document.getElementById('search2')

searchUno.addEventListener('submit', (e) => {
    e.preventDefault()
    x = inputUno.value
    console.log(x)
    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${x.toUpperCase()}?limit=40&apikey=dfc166b85e605991cfd559cf91be0d4c`)
                    .then(response => response.json())
                    .then(data => {
                        //accessing the first object with all the data
                        const dataAtZero = data[0]
                        let i = 0
                        for (const [key, value] of Object.entries(dataAtZero)) {
                            let ele = document.createElement('p')
                            ele.setAttribute('class', 'key-metrics-1')
                            if (value > 0 &&  i < 3) {
                                i++;
                                ele.innerHTML = `${key} : ${value}`;
                                boxUno.appendChild(ele)
                                console.log(ele)
                            } 
                            else if ( value === null) {
                                console.log('hello')
                            }
                        }
                    })
                
            .catch((error) => {
                console.log(error);
            })
    form.reset()
})
searchDos.addEventListener('submit', (e) => {
    e.preventDefault()
    x = inputUno.value
    console.log(x)
    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${x.toUpperCase()}?limit=40&apikey=dfc166b85e605991cfd559cf91be0d4c`)
                    .then(response => response.json())
                    .then(data => {
                        //accessing the first object with all the data
                        const dataAtZero = data[0]
                        let i = 0
                        for (const [key, value] of Object.entries(dataAtZero)) {
                            let ele = document.createElement('p')
                            ele.setAttribute('class', 'key-metrics-2')
                            if (value > 0 &&  i < 3) {
                                i++;
                                ele.innerHTML = `${key} : ${value}`;
                                boxDos.appendChild(ele)
                                console.log(ele)
                            } 
                            else if ( value === null) {
                                console.log('hello')
                            }
                        }
                    })
                
            .catch((error) => {
                console.log(error);
            })
    form.reset()
})

const compareBtn = document.getElementById('compare')

compareBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    const keyMetricsDos = [...document.getElementsByClassName('key-metrics-2')]
    const keyMetricsUno = [...document.getElementsByClassName('key-metrics-1')]
    const uno = keyMetricsUno.map(function(item) {
        return item.textContent
    })
    console.log(uno)
})
    


        // data.forEach(key => {
        // console.log(key)

    // Stock Price: 171.8001
    // date: "2021-10-26"
    // dcf: 294.0866299519437
    // symbol: "BABA"