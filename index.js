const tableBody = document.getElementById('data')

// function createTable() {
//     const tableRow = document.createElement('tr')
//     const stockPrice = document.createElement('th')
//     const date = document.createElement('th')
//     const dcf = document.createElement('th')
//     const symbol  = document.createElement('th')

// }


fetch ('https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/BABA?apikey=97e3e99e10b8a54d8832bd62a5440ded')
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
        //append the elements
        tableBody.appendChild(tableRow)
        tableRow.appendChild(stockPrice)
        tableRow.appendChild(date)
        tableRow.appendChild(dcf)
        tableRow.appendChild(symbol)
    })
        // data.forEach(key => {
        // console.log(key)

    // Stock Price: 171.8001
    // date: "2021-10-26"
    // dcf: 294.0866299519437
    // symbol: "BABA"