const balanceBtn = document.getElementById('balance')
const cashBtn = document.getElementById('cash')
const incomeBtn = document.getElementById('income')
const tableBody = document.getElementById('data')
const boxUno = document.getElementById('stock1')
const boxDos = document.getElementById('stock2')


const table = document.getElementById('table')
let arr = ['AAPL', 'GOOG', 'AMZN', 'BABA', 'FB']

const mainStockSearch = document.getElementById('stockSearch')
function updateArr (){
    const inputValue = document.getElementById('search').value
    x = arr.push(inputValue)
    return x
    
    
}

mainStockSearch.addEventListener('submit', () => {
    updateArr()
})

function returnTickerData () {
    arr.forEach((ticker) => {
        return fetch (`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/${ticker}?apikey=dfc166b85e605991cfd559cf91be0d4c`)
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
function moveOn1(emptyTableHead) {
    let currentTableHead = emptyTableHead
    return currentTableHead
}
function moveOn(){
let currentTableHeadRow = document.createElement('tr')
return currentTableHeadRow
}

    function clearTableHead () {
        let currentTableHead = document.getElementById('table-head')
        let currentTableHeadRow = document.getElementById('table-head-row')
        moveOn1()
        moveOn
        currentTableHeadRow.remove()
        const newTableRow = document.createElement('tr')
        let emptyTableHead = currentTableHead.appendChild(newTableRow)
        emptyTableHead.setAttribute('id', 'table-head')
        return emptyTableHead
    }
    
    function getCurrentSymbolsArray () {
        //construct new symbols
        const symbols = [...document.getElementsByClassName('s')]
        const newSymbols = symbols.map(function(item){
            const y = item.textContent
            return y
        })
        return newSymbols
    }

function createTableHead (url, emptyTableHead) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dataAtZeroHead= data[0]
        let inc=0
        for (const [key] of Object.entries(dataAtZeroHead)) {
            if (inc < 60) {
                inc++;
                const newTableHeadContent = document.createElement('th')
                newTableHeadContent.textContent = key;
                emptyTableHead.appendChild(newTableHeadContent)
            }
        }
        return 
    })
}
    incomeBtn.addEventListener('click', () => incomeStatementTableData())
    
    

    function incomeStatementTableData () {
        createTableHead('https://financialmodelingprep.com/api/v3/income-statement/BABA?apikey=dfc166b85e605991cfd559cf91be0d4c',clearTableHead())
        getCurrentSymbolsArray()
        //save ticker symbols into new array so we can delete old data
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
        createTableHead('https://financialmodelingprep.com/api/v3/income-statement/BABA?apikey=dfc166b85e605991cfd559cf91be0d4c',clearTableHead())
        getCurrentSymbolsArray()
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
        createTableHead('https://financialmodelingprep.com/api/v3/income-statement/BABA?apikey=dfc166b85e605991cfd559cf91be0d4c',clearTableHead())
        getCurrentSymbolsArray()
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
    removeOld1()
    x = inputUno.value
    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${x.toUpperCase()}?limit=40&apikey=dfc166b85e605991cfd559cf91be0d4c`)
    .then(response => response.json())
    .then(data => {
        //accessing the first object with all the data
        // removeEle()
        const dataAtZero = data[0]
        let i = 0
        for (const [key, value] of Object.entries(dataAtZero)) {
            let ele = document.createElement('p')
            ele.setAttribute('class', 'key-metrics-1')
            if (  i < 60) {
                i++;
                ele.innerHTML = `${key} : <span class='value1'>${parseFloat(value)}</span>`;
                boxUno.appendChild(ele)
            } 
            // else if ( value === null) {
                //     console.log('hello')
                // }
            }
        })
        
            .catch((error) => {
                console.log(error);
            })
    searchUno.reset()
})

function removeOld2 () {
    const stocksUnoDiv= document.getElementById(`stock2`)
    return stocksUnoDiv.innerHTML = ""
}
function removeOld1 () {
    const stocksUnoDiv= document.getElementById(`stock1`)
    return stocksUnoDiv.innerHTML = ""
}
searchDos.addEventListener('submit', (e) => {
    e.preventDefault()
    removeOld2()
    x = inputDos.value
    fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${x.toUpperCase()}?limit=40&apikey=dfc166b85e605991cfd559cf91be0d4c`)
                    .then(response => response.json())
                    .then(data => {
                        //accessing the first object with all the data
                        const dataAtZero = data[0]
                        let i = 0
                        for (const [key, value] of Object.entries(dataAtZero)) {
                            let ele = document.createElement('p')
                            ele.setAttribute('class', 'key-metrics-2')
                            if (  i < 60) {
                                i++;
                                ele.innerHTML = `${key} : <span class='value2'>${parseFloat(value)}</span>`;
                                boxDos.appendChild(ele)
                            } 
                            // else if ( value === null) {
                            //     console.log('hello')
                            // }
                        }
                    })
                
            .catch((error) => {
                console.log(error);
            })
    searchDos.reset()
})
//because i created the keyvalues in the golbal scope it wont pick up the newly entered elements
const compareBtn = document.getElementById('compare')




compareBtn.addEventListener('submit', (e) => {
            e.preventDefault()
            const keyvaluesUno = [...document.getElementsByClassName('value1')]
            const unoNumbers = keyvaluesUno.map(function(item) {
                console.log(item.textContent)
                return item.innerHTML
            })
            const keyvaluesDos = [...document.getElementsByClassName('value2')]
            const dosNumbers = keyvaluesDos.map(function(item) {
                return item.innerHTML
            })
            console.log(unoNumbers.length)
            console.log(dosNumbers.length)
            for (let i=0; i < unoNumbers.length; i++) {
            if (unoNumbers[i] > dosNumbers[i]) {
                const keyMetricsUno = [...document.getElementsByClassName('key-metrics-1')]
                keyMetricsUno[i].style.color = 'green'
                const keyMetricsDos = [...document.getElementsByClassName('key-metrics-2')]
                keyMetricsDos[i].style.color = 'red'
            }
            else if (unoNumbers[i] < dosNumbers[i]) {
                const keyMetricsDos = [...document.getElementsByClassName('key-metrics-2')]
                keyMetricsDos[i].style.color = 'green'
                const keyMetricsUno = [...document.getElementsByClassName('key-metrics-1')]
                keyMetricsUno[i].style.color = 'red'
            }

            else if (unoNumbers[i] || dosNumbers[i] === 'NaN')
                console.log('bye')
        }
    })
    


        // data.forEach(key => {
        // console.log(key)

    // Stock Price: 171.8001
    // date: "2021-10-26"
    // dcf: 294.0866299519437
    // symbol: "BABA"
    //div.innerHTML = " "