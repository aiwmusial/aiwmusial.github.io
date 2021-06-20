// defining the variables from the form to be filled in
let country = document.getElementById('country');
let currency = document.getElementById('currency');
let rate = document.getElementById('rate');
let currencyUsed = document.getElementsByClassName('currencyUsed');
// // getting the trip length from the slider
let tripLength;

// function tripLengthFind(){
//     tripLength = document.getElementById('tripLength').value;
// }

// setting up variables used within the code
let tabela;
let currencyISOcode;
let dailyRate;
let budgetTrip;
let midLowTrip;
let midHighTrip;
let topEndTrip;
let dailyRateNum;
let budgetTripNum;
let midLowTripNum;
let midHighTripNum;
let topEndTripNum;


// defininga variable for the API data
// let currencyAPI = new currencyAPI();

function currencyExchange(id){
    // checking whether the map is correctly linked
    // alert('działa!' + id);

    // finding index of selected element in avgCost array
    let indexOfElement = avgCost.findIndex(item => item.index === id);

    // adding to the HTML the name of the country selected on the map 
        country.innerHTML = avgCost[indexOfElement]['country'];
    
    // special information regarding Wenezuela
        if(avgCost[indexOfElement]['country'] == 'Wenezuela'){
            alert("Ministerstwo Spraw Zagranicznych odradza wszelkie podróże do Wenezueli!")
        }
    // adding to the HTML the currency of the country selected on the map 
        currency.innerHTML = avgCost[indexOfElement]['currency'];
    // // displaying daily rate
    //     rate.innerHTML = `1 zł = ${dailyRate}`;

    // adding the currency used in calculations to the output
    currencyISOcode = avgCost[indexOfElement]['code'];
    // several class elements in HTML document can be accessed via an array, hence
        currencyUsed[0].innerHTML = currencyISOcode;
        currencyUsed[1].innerHTML = currencyISOcode;
        currencyUsed[2].innerHTML = currencyISOcode;
        currencyUsed[3].innerHTML = currencyISOcode;

    // adding average daily costs for selected country
        budgetTrip = avgCost[indexOfElement]['budgetTrip'];
        midLowTrip = avgCost[indexOfElement]['midLowTrip'];
        midHighTrip = avgCost[indexOfElement]['midHighTrip'];
        topEndTrip = avgCost[indexOfElement]['topEndTrip'];
        document.getElementById('budgetTrip').innerHTML = budgetTrip;
        document.getElementById('midLowTrip').innerHTML = midLowTrip;
        document.getElementById('midHighTrip').innerHTML = midHighTrip;
        document.getElementById('topEndTrip').innerHTML = topEndTrip;
    // console.log(avgCost[indexOfElement]['code']);

    // rates presented within varous NBP tables

    switch(currencyISOcode){
        case 'USD':
            tabela = 'a';
            break;
        case 'BRL':
            tabela = 'a';
            break;
        case 'CLP':
            tabela = 'a';
            break;
        case 'EUR':
            tabela = 'a';
            break;
        case 'GBP':
            tabela = 'a';
            break;
        case 'BOB':
            tabela = 'b';
            break;
        case 'COP':
            tabela = 'b';
            break;
        case 'GYD':
            tabela = 'b';
            break;
        case 'PEN':
            tabela = 'b';
            break;
        case 'SRD':
            tabela = 'b';
            break;
    }
    // console.log(tabela);


    async function getCurrencies(){
    // //loading API with the currency exchange rates 
    let codLowerCase = currencyISOcode.toLowerCase();
        fetch(`http://api.nbp.pl/api/exchangerates/rates/${tabela}/${codLowerCase}/`).then(res => res.json()).then(data =>{
            dailyRate = data.rates[0].mid;
            // console.log(data);
            console.log(data.rates[0].effectiveDate);
            console.log(dailyRate);

            // displaying daily rate within the HTML
            rate.innerHTML = `1 zł = ${dailyRate} ${currencyISOcode}`;

                    
                }).catch(error => console.log('API ERROR!'))
    }

    getCurrencies();
}

// calculating the estimated cost of the trip 
function tripEstimator(slider){
    let daysTrip = slider;

    let budgetTripEstmBudget = dailyRate * Number(budgetTrip) * daysTrip;
    let budgetTripEstmMidLow = dailyRate * Number(midLowTrip) * daysTrip;
    let budgetTripEstmMidHigh = dailyRate * Number(midHighTrip) * daysTrip;
    let budgetTripEstmTopEnd = dailyRate * Number(topEndTrip) * daysTrip;

    // presenting the results of the analysis
    if(isNaN(budgetTripEstmBudget)){
        alert("Wybierz kraj, a następnie ilość dni!")
    }else{
        return document.getElementById('costEstimate').innerHTML = 
                                                    `
                                                        <div class="mx-auto mt-3">
                                                        <p class="form-label text-center">
                                                            Jeśli pojedziesz na ${slider} dni, to za cały pobyt zapłacisz:
                                                        </p>
                                                            <ul class="mx-auto">
                                                                <li class="m-3 text-center p-2"><span class="priceTrip">${budgetTripEstmBudget.toFixed()}zł</span> <br> jeśli podróżujesz z plecakiem i nie straszne ci hostele, a na wycieczki wybierasz się transportem publicznym</li>
                                                                <li class="m-3 text-center p-2"><span class="priceTrip">${budgetTripEstmMidLow.toFixed()}zł</span> <br> możesz pozwolić sobie na noclegi w pensionatach i posiłki w małych restauracyjkach, przemieszczasz się transportem publicznym</li>
                                                                <li class="m-3 text-center p-2"><span class="priceTrip">${budgetTripEstmMidHigh.toFixed()}zł</span> <br> oprócz noclegów w mniejszych hotelach, od czasu do czasu możesz wynająć samochód na dłuższe wycieczki</li>
                                                                <li class="m-3 text-center p-2"><span class="priceTrip">${budgetTripEstmTopEnd.toFixed()}zł</span> <br> stołujesz się w fajnych restauracjach, możesz sobie pozwolić na noclegi w ekscluzywnych hotelach</li>
                                                            </ul>
                                                            <p class="my-3 p-2 text-center checkBeforeYouGo col-8 mx-auto">
                                                                Przygotuj się do swojej podróży i sprawdź <a href="https://www.gov.pl/web/dyplomacja/informacje-dla-podrozujacych" target="_blank">informacje dla podróżujących przygotowane przez MSZ.</a><br>
                                                                Pamiętaj, przed podróżą zarejestruj się w systemie <a href="https://odyseusz.msz.gov.pl/" target="_blank">Odyseusz!</a>
                                                            </p>
                                                        <p class="text-center disclaimer">
                                                            Podane średnie koszty podróży to tylko ceny szacunkowe pobytu, z wyłączeniem kosztów przelotu do danego kraju.
                                                        </p>
                                                    </div>
                                                        `;
    }
    console.log(budgetTripEstmBudget);
    console.log(budgetTripEstmMidLow);
    console.log(budgetTripEstmMidHigh);
    console.log(budgetTripEstmTopEnd);
}


//creating an array containing average trip cost
avgCost=[
    {index:"argentina", country:'Argentyna', currency: 'Peso argentyńskie (ARS)', code:'USD', budgetTrip:'60', midLowTrip:'80', midHighTrip:'149', topEndTrip:'150'}, 
    {index:"bolivia", country:'Boliwia', currency: 'Boliviano (BOB)', code:'BOB', budgetTrip:'199', midLowTrip:'200', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"brazil", country:'Brazylia', currency: 'Real brazylijski (BRL)', code:'BRL', budgetTrip:'199', midLowTrip:'200', midHighTrip:'399', topEndTrip:'400'}, 
    {index:"chile", country:'Chile', currency: 'Peso chilijskie (CLP)', code:'CLP', budgetTrip:'24999', midLowTrip:'25000', midHighTrip:'74999', topEndTrip:'75000'}, 
    {index:"colombia", country:'Kolumbia', currency: 'Peso kolumbijskie (COP)', code:'COP', budgetTrip:'99999', midLowTrip:'100000', midHighTrip:'249999', topEndTrip:'250000'}, 
    {index:"ecuador", country:'Ekwador', currency: 'Dolar amerykański (USD)', code:'USD', budgetTrip:'39', midLowTrip:'40', midHighTrip:'99', topEndTrip:'100'}, 
    {index:"guyana", country:'Gujana', currency: 'Dolar gujański (GYD)', code:'GYD', budgetTrip:'29999', midLowTrip:'30000', midHighTrip:'59999', topEndTrip:'60000'}, 
    {index:"french-guiana", country:'Gujana Francuska', currency: 'Euro (EUR)', code:'EUR', budgetTrip:'99', midLowTrip:'100', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"paraguay", country:'Paragwaj', currency: 'Guaraní (PYG)', code:'USD', budgetTrip:'49', midLowTrip:'50', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"peru", country:'Peru', currency: 'Sol (PEN)', code:'PEN', budgetTrip:'189', midLowTrip:'190', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"suriname", country:'Surinam', currency: 'Dolar surinamski (SRD)', code:'SRD', budgetTrip:'249', midLowTrip:'250', midHighTrip:'599', topEndTrip:'600'}, 
    {index:"uruguay", country:'Urugwaj', currency: 'Peso urugwajskie (UYU)', code:'USD', budgetTrip:'74', midLowTrip:'75', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"venezuela", country:'Wenezuela', currency: 'Boliwar (VES)', code:'USD', budgetTrip:'7', midLowTrip:'', midHighTrip:'', topEndTrip:''}, 
    {index:"falkland-islands", country:'Falklandy Malwiny', currency: 'Funt falklandzki (FKP)', code:'GBP', budgetTrip:'no data available', midLowTrip:'no data available', midHighTrip:'no data available', topEndTrip:'no data available'} 
]