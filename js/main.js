
//* Dashboard //
const globalCountry = document.getElementById("global-country");
const globalCity = document.getElementById("global-city");
const globalYear = document.getElementById("global-year");
const globalSearchBtn = document.getElementById("global-search-btn");
const statSaved = document.getElementById("stat-saved");
const plansCount = document.getElementById("plans-count");

//* globalCountry//
const countrySelectTrigger = document.getElementById("country-select-trigger");
const countryDropdown = document.getElementById("country-dropdown");
const countrySearch = document.getElementById("country-search");
const countryOptions = document.getElementById("country-options");
const countrySelectWrapper = document.getElementById("country-select-wrapper");
const customSelectedText = document.getElementById("custom-selected-text");
const customSelectedFlag = document.getElementById("custom-selected-flag");
let allCountries = [];

//* City Dropdown Elements //
const citySelectWrapper = document.getElementById("global-city-simple");
const citySelectTrigger = citySelectWrapper.querySelector(".simple-select-trigger");
const cityDropdown = citySelectWrapper.querySelector(".simple-select-dropdown");
const citySelectedText = citySelectTrigger.querySelector(".selected-text");
let allCities = [];

//? Cities Data //

const citiesByCountry = {

    EG: [
        { name: "Cairo", lat: 30.0444, lon: 31.2357 },
        { name: "Alexandria", lat: 31.2001, lon: 29.9187 }
    ],

    BE: [
        { name: "Brussels", lat: 50.8503, lon: 4.3517 },
        { name: "Antwerp", lat: 51.2194, lon: 4.4025 },
        { name: "Bruges", lat: 51.2093, lon: 3.2247 }
    ],

    BR: [
        { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
        { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 }
    ],

    CZ: [
        { name: "Prague", lat: 50.0755, lon: 14.4378 },
        { name: "Brno", lat: 49.1951, lon: 16.6068 }
    ],

    DK: [
        { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
        { name: "Aarhus", lat: 56.1629, lon: 10.2039 }
    ],

    FI: [
        { name: "Helsinki", lat: 60.1699, lon: 24.9384 }
    ],

    FR: [
        { name: "Paris", lat: 48.8566, lon: 2.3522 },
        { name: "Lyon", lat: 45.7640, lon: 4.8357 },
        { name: "Marseille", lat: 43.2965, lon: 5.3698 },
        { name: "Nice", lat: 43.7102, lon: 7.2620 },
        { name: "Bordeaux", lat: 44.8378, lon: -0.5792 }
    ],

    DE: [
        { name: "Berlin", lat: 52.5200, lon: 13.4050 },
        { name: "Munich", lat: 48.1351, lon: 11.5820 },
        { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
        { name: "Hamburg", lat: 53.5511, lon: 9.9937 },
        { name: "Cologne", lat: 50.9375, lon: 6.9603 }
    ],

    GR: [
        { name: "Athens", lat: 37.9838, lon: 23.7275 },
        { name: "Thessaloniki", lat: 40.6401, lon: 22.9444 }
    ],

    IE: [
        { name: "Dublin", lat: 53.3498, lon: -6.2603 },
        { name: "Cork", lat: 51.8985, lon: -8.4756 }
    ],

    IT: [
        { name: "Rome", lat: 41.9028, lon: 12.4964 },
        { name: "Milan", lat: 45.4642, lon: 9.1900 },
        { name: "Florence", lat: 43.7696, lon: 11.2558 },
        { name: "Venice", lat: 45.4408, lon: 12.3155 },
        { name: "Naples", lat: 40.8518, lon: 14.2681 }
    ],

    JP: [
        { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
        { name: "Osaka", lat: 34.6937, lon: 135.5023 },
        { name: "Kyoto", lat: 35.0116, lon: 135.7681 }
    ],

    MX: [
        { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
        { name: "Cancun", lat: 21.1619, lon: -86.8515 }
    ],

    NL: [
        { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
        { name: "Rotterdam", lat: 51.9244, lon: 4.4777 },
        { name: "The Hague", lat: 52.0705, lon: 4.3007 },
        { name: "Utrecht", lat: 52.0907, lon: 5.1214 }
    ],

    NO: [
        { name: "Oslo", lat: 59.9139, lon: 10.7522 },
        { name: "Bergen", lat: 60.3913, lon: 5.3221 }
    ],

    PL: [
        { name: "Warsaw", lat: 52.2297, lon: 21.0122 },
        { name: "Krakow", lat: 50.0647, lon: 19.9450 },
        { name: "Gdansk", lat: 54.3520, lon: 18.6466 }
    ],

    PT: [
        { name: "Lisbon", lat: 38.7223, lon: -9.1393 },
        { name: "Porto", lat: 41.1579, lon: -8.6291 },
        { name: "Faro", lat: 37.0194, lon: -7.9304 }
    ],

    ES: [
        { name: "Madrid", lat: 40.4168, lon: -3.7038 },
        { name: "Barcelona", lat: 41.3874, lon: 2.1686 },
        { name: "Seville", lat: 37.3891, lon: -5.9845 },
        { name: "Valencia", lat: 39.4699, lon: -0.3763 },
        { name: "Bilbao", lat: 43.2630, lon: -2.9350 }
    ],

    SE: [
        { name: "Stockholm", lat: 59.3293, lon: 18.0686 },
        { name: "Gothenburg", lat: 57.7089, lon: 11.9746 },
        { name: "Malmo", lat: 55.6050, lon: 13.0038 }
    ],

    CH: [
        { name: "Zurich", lat: 47.3769, lon: 8.5417 },
        { name: "Geneva", lat: 46.2044, lon: 6.1432 },
        { name: "Bern", lat: 46.9480, lon: 7.4474 }
    ],

    GB: [
        { name: "London", lat: 51.5072, lon: -0.1276 },
        { name: "Manchester", lat: 53.4808, lon: -2.2426 },
        { name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
        { name: "Birmingham", lat: 52.4862, lon: -1.8904 },
        { name: "Liverpool", lat: 53.4084, lon: -2.9916 }
    ],

    US: [
        { name: "New York", lat: 40.7128, lon: -74.0060 },
        { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
        { name: "Chicago", lat: 41.8781, lon: -87.6298 },
        { name: "Miami", lat: 25.7617, lon: -80.1918 },
        { name: "San Francisco", lat: 37.7749, lon: -122.4194 }
    ],
    AT: [
    { name: "Vienna", lat: 48.2082, lon: 16.3738 },
    { name: "Salzburg", lat: 47.8095, lon: 13.0550 },
    { name: "Innsbruck", lat: 47.2692, lon: 11.4041 }
],

};

//* Year Dropdown Elements //
const yearSelectWrapper = document.getElementById("global-year-simple");
const yearSelectTrigger = yearSelectWrapper.querySelector(".simple-select-trigger");
const yearDropdown = yearSelectWrapper.querySelector(".simple-select-dropdown");
const yearSelectedText = yearSelectTrigger.querySelector(".selected-text");

//* selected Destination Elemets//
const selectedDestinationCard = document.getElementById("selected-destination");
const selectedCountryFlag = document.getElementById("selected-country-flag");
const selectedCountryName = document.getElementById("selected-country-name");
const selectedCityName = document.getElementById("selected-city-name");
const clearSelectionBtn = document.getElementById("clear-selection-btn");


//* Dashboard Country Info Section //
const dashboardCountryInfoSection = document.getElementById("dashboard-country-info-section");
const dashboardCountryInfo = document.getElementById("dashboard-country-info");

//* Navigation //
const navItems = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");
const currentDatetime = document.getElementById("current-datetime")

//* loading Overlay //
const loadingOverlay = document.getElementById("loading-overlay");
const loadingText = document.getElementById("loading-text");

//* Page Header Content //
const pageContent = {
    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome back! Ready to plan your next adventure?"
    },
    holidays: {
        title: "Holidays",
        subtitle: "Explore public holidays around the world"
    },
    events: {
        title: "Events",
        subtitle: "Find concerts, sports, and entertainment"
    },
    weather: {
        title: "Weather",
        subtitle: "Check forecasts for any destination"
    },
    "long-weekends": {
        title: "Long Weekends",
        subtitle: "Find the perfect mini-trip opportunities"
    },
    currency: {
        title: "Currency Converter",
        subtitle: "Convert currencies with live exchange rates"
    },
    "sun-times": {
        title: "Sun Times",
        subtitle: "Check sunrise and sunset times worldwide"
    },
    "my-plans": {
        title: "My Plans",
        subtitle: "Your saved holidays and events"
    }
};
//* Holiday Section //
const holidaysSelection = document.getElementById("holidays-selection");
const holidaysFlag = document.getElementById("holidays-flag");
const holidaysCountryName = document.getElementById("holidays-country-name");
const holidaysYear = document.getElementById("holidays-year");
const holidaysContent = document.getElementById("holidays-content");
const holidaysDescription = document.getElementById("holidays-description");

//* Events Section //
const eventsSelection = document.getElementById("events-selection");
const eventsDescription = document.getElementById("events-description");
const eventsFlag = document.getElementById("events-flag");
const eventsCountryName = document.getElementById("events-country-name");
const eventsCityName = document.getElementById("events-city-name");
const eventsContent = document.getElementById("events-content");


//* Weather Section //
const weatherDescription = document.getElementById("weather-description");
const weatherSelection = document.getElementById("weather-selection");
const weatherFlag = document.getElementById("weather-flag");
const weatherCountryName = document.getElementById("weather-country-name");
const weatherCityName = document.getElementById("weather-city-name");
const weatherContent = document.getElementById("weather-content");


//* Long Weekend Section //
const lwSelection = document.getElementById("lw-selection");
const lwDescription = document.getElementById("lw-description");
const lwFlag = document.getElementById("lw-flag");
const lwCountryName = document.getElementById("lw-country-name");
const lwYear = document.getElementById("lw-year");
const lwContent = document.getElementById("lw-content");


//* currency section//
const currencyAmount = document.getElementById("currency-amount");
const currencyFrom = document.getElementById("currency-from-custom");
const swapCurrenciesBtn = document.getElementById("swap-currencies-btn");
const currencyTo = document.getElementById("currency-to-custom");
const convertBtn = document.getElementById("convert-btn");
const currencyResult = document.getElementById("currency-result");
const popularCurrencies = document.getElementById("popular-currencies");

//* Currency Result Elements //
const resultFromAmount = document.getElementById("result-from-amount");
const resultFromCode = document.getElementById("result-from-code");
const resultToAmount = document.getElementById("result-to-amount");
const resultToCode = document.getElementById("result-to-code");
const rateFrom = document.getElementById("rate-from");
const rateValue = document.getElementById("rate-value");
const rateTo = document.getElementById("rate-to");
const rateDate = document.getElementById("rate-date");

//* Sun Time Section //
const sunCurrentSelectionBadge = document.getElementById("sun-current-selection-badge");
let sunCityName = document.getElementById("sun-city-name");
let sunDate = document.getElementById("sun-date");
let sunDay = document.getElementById("sun-day");

let sunDawn = document.getElementById("sun-dawn");
let sunSunrise = document.getElementById("sun-sunrise");
let sunNoon = document.getElementById("sun-noon");
let sunSunset = document.getElementById("sun-sunset");
let sunDusk = document.getElementById("sun-dusk");
let sunDayLength = document.getElementById("sun-day-length");

let sunDayProgressFill = document.getElementById("sun-day-progress-fill");
let sunDaylightValue = document.getElementById("sun-daylight-value");
let sunDaylightPercentage = document.getElementById("sun-daylight-percentage");
let sunDarknessValue = document.getElementById("sun-darkness-value");

const sunTimesContent = document.getElementById("sun-times-content");
const sunTimesHTML = sunTimesContent.innerHTML;

const sunSelection = document.getElementById("sun-selection");
const sunFlag = document.getElementById("sun-flag");
const sunCountryName = document.getElementById("sun-country-name");
const sunCity = document.getElementById("sun-city");

//* My Plans Filter//
const clearAllPlansBtn = document.getElementById("clear-all-plans-btn");
const startExploringBtn = document.getElementById("start-exploring-btn");
const plansContent = document.getElementById("plans-content");

const filterAllCount = document.getElementById("filter-all-count");
const filterHolidayCount = document.getElementById("filter-holiday-count");
const filterEventCount = document.getElementById("filter-event-count");
const filterLWCount = document.getElementById("filter-lw-count");
const planFilters = document.querySelectorAll(".plan-filter");

//? Get Countries API //
async function getCountry() {
    try {
        const response = await fetch(
            "https://date.nager.at/api/v3/AvailableCountries"
        );

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const dataCountry = await response.json();
        return dataCountry;

    } catch (error) {
        console.log("Failed to fetch countries:", error);
        return [];
    }
}

let selectedCityLat = null;
let selectedCityLon = null;


//? Select City //
function selectCity(countryCode) {
    //* Get cities based on selected country
    allCities = citiesByCountry[countryCode] || [];

    //* Reset selected city coordinates
    selectedCityLat = null;
    selectedCityLon = null;

    //* Reset native select
    globalCity.innerHTML = "";

    //* Reset custom dropdown
    cityDropdown.innerHTML = "";
    citySelectedText.textContent = "Loading cities...";
    citySelectedText.classList.add("placeholder");
    cityDropdown.classList.remove("open");
    citySelectTrigger.classList.remove("open");

    //* Show loading message
    cityDropdown.innerHTML = `
        <div class="simple-select-option no-results">
            Loading cities...
        </div>
    `;

    //* Wait before displaying cities
    setTimeout(function () {

        cityDropdown.innerHTML = "";

        //* Check if cities are available
        if (allCities.length === 0) {

            //* Update placeholder
            citySelectedText.textContent = "No city data available";
            citySelectedText.classList.add("placeholder");

            //* Show no city message
            const noResults = document.createElement("div");
            noResults.className = "simple-select-option no-results";
            noResults.textContent = "No city data available";

            cityDropdown.appendChild(noResults);

            return;
        }

        //* Update placeholder
        citySelectedText.textContent = "Select City";
        citySelectedText.classList.add("placeholder");

        //* Add default option to native select
        const defaultNativeOption = document.createElement("option");
        defaultNativeOption.value = "";
        defaultNativeOption.textContent = "Select City";
        globalCity.appendChild(defaultNativeOption);

        //* Add default Select City option to custom dropdown
        const defaultOption = document.createElement("div");
        defaultOption.className = "simple-select-option";
        defaultOption.textContent = "Select City";

        defaultOption.addEventListener("click", function () {
            globalCity.value = "";
            selectedCityLat = null;
            selectedCityLon = null;

            citySelectedText.textContent = "Select City";
            citySelectedText.classList.add("placeholder");

            //* Reset Selected Destination City //
            if (selectedDestination) {
            selectedDestination.city = null;
            selectedDestination.cityLat = null;
            selectedDestination.cityLon = null;
            displaySelectedDestination();
            }

            cityDropdown.classList.remove("open");
            citySelectTrigger.classList.remove("open");
        });

        cityDropdown.appendChild(defaultOption);

        //* Create city options
        for (let i = 0; i < allCities.length; i++) {

            const cityOption = document.createElement("div");
            cityOption.className = "simple-select-option";
            cityOption.dataset.value = allCities[i].name;
            cityOption.textContent = allCities[i].name;

            //* Add city to native select
            const option = document.createElement("option");
            option.value = allCities[i].name;
            option.textContent = allCities[i].name;
            option.dataset.lat = allCities[i].lat;
            option.dataset.lon = allCities[i].lon;

            globalCity.appendChild(option);

            //* Select city on click
            cityOption.addEventListener("click", function () {
                globalCity.value = allCities[i].name;
                selectedCityLat = allCities[i].lat;
                selectedCityLon = allCities[i].lon;

                citySelectedText.textContent = allCities[i].name;
                citySelectedText.classList.remove("placeholder");

                //* Update Selected Destination //
                if (selectedDestination) {
                selectedDestination.city = allCities[i].name;
                selectedDestination.cityLat = allCities[i].lat;
                selectedDestination.cityLon = allCities[i].lon;
                displaySelectedDestination();
                }

                cityDropdown.classList.remove("open");
                citySelectTrigger.classList.remove("open");

                //* Update selected option styling
                const allOptions = cityDropdown.querySelectorAll(
                    ".simple-select-option"
                );

                for (let j = 0; j < allOptions.length; j++) {
                    allOptions[j].classList.remove("selected");
                }

                cityOption.classList.add("selected");
            });

            cityDropdown.appendChild(cityOption);
        }

    }, 300);
}

//? Select Country //
function selectCountry(data) {

    countryOptions.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        const countryOption = document.createElement("div");

        countryOption.className = "custom-select-option";
        countryOption.dataset.value = data[i].countryCode;
        countryOption.dataset.name = data[i].name;

        countryOption.innerHTML = `
            <img
                src="https://flagcdn.com/w40/${data[i].countryCode.toLowerCase()}.png"
                alt="${data[i].countryCode}"
                class="flag-img"
                onerror="this.style.display='none'"
            >

            <span class="country-name">${data[i].name}</span>

            <span class="country-code">${data[i].countryCode}</span>
        `;

        countryOption.addEventListener("click", function () {

            globalCountry.value = data[i].countryCode;
            selectCity(data[i].countryCode);

            customSelectedFlag.innerHTML = `
                <img
                    src="https://flagcdn.com/w40/${data[i].countryCode.toLowerCase()}.png"
                    alt="${data[i].countryCode}"
                    class="flag-img"
                >
            `;

            customSelectedText.textContent = data[i].name;
            customSelectedText.classList.remove("placeholder");

            //* Create Selected Destination //
            selectedDestination = new Destination(
                data[i].countryCode,
                data[i].name,
                null,
                Number(globalYear.value),
                null,
                null
            );
            displaySelectedDestination();

            countryDropdown.classList.remove("open");
            countrySelectTrigger.classList.remove("open");

            countrySearch.value = "";
            selectCountry(allCountries);


            //* Update selected option styling
            const allOptions = countryOptions.querySelectorAll(".custom-select-option");
            for(let i = 0; i < allOptions.length; i++){
                if(allOptions[i].dataset.value === globalCountry.value){
                    allOptions[i].classList.add("selected")
                }
            }
        });

        countryOptions.appendChild(countryOption);
    }

    if (data.length === 0) {
        countryOptions.innerHTML = `
            <div class="custom-select-option no-results">
                No countries found
            </div>
        `;
    }
}

//? Shared Dropdown Function //

function setupDropdown(trigger, dropdown, wrapper, onOpen, onOutside) {

    trigger.addEventListener("click", function () {

        if (!dropdown.classList.contains("open")) {
            if (onOpen) {
                onOpen();
            }
        }
        dropdown.classList.toggle("open");
        trigger.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {

        if (!wrapper.contains(e.target)) {

            dropdown.classList.remove("open");
            trigger.classList.remove("open");

            if (onOutside) {
                onOutside();
            }

        }

    });

}
//? Country Dropdown //
setupDropdown(
    countrySelectTrigger,
    countryDropdown,
    countrySelectWrapper,

    function () {
        countrySearch.value = "";
        selectCountry(allCountries);
    },

    function () {
        countrySearch.value = "";
        selectCountry(allCountries);
    }
);

//? City Dropdown //
setupDropdown(
    citySelectTrigger,
    cityDropdown,
    citySelectWrapper
);


//? Year Dropdown //
setupDropdown(
    yearSelectTrigger,
    yearDropdown,
    yearSelectWrapper
);

//? Select Year //
const yearOptions = yearDropdown.querySelectorAll(
    ".simple-select-option"
);
for (let i = 0; i < yearOptions.length; i++) {

    yearOptions[i].addEventListener("click", function () {

        //* Get selected year
        const selectedYear = yearOptions[i].dataset.value;

        //* Update hidden native select
        globalYear.value = selectedYear;
        if (selectedDestination) {
        selectedDestination.year = Number(selectedYear);
        }

        //* Update selected text
        yearSelectedText.textContent = selectedYear;

        //* Update selected option styling
        for (let j = 0; j < yearOptions.length; j++) {
            yearOptions[j].classList.remove("selected");
        }

        yearOptions[i].classList.add("selected");

        //* Close dropdown
        yearDropdown.classList.remove("open");
        yearSelectTrigger.classList.remove("open");

    });

}


//? Search Country //
countrySearch.addEventListener("input", function () {

    const searchValue = countrySearch.value.toLowerCase().trim();

    // Exact Country Code Match
    const exactCodeMatch = allCountries.filter(function (country) {
        return country.countryCode.toLowerCase() === searchValue;
    });

    if (exactCodeMatch.length > 0) {
        selectCountry(exactCodeMatch);
    } else {

        const filteredCountries = allCountries.filter(function (country) {

            return country.name.toLowerCase().includes(searchValue) ||
                country.countryCode.toLowerCase().startsWith(searchValue);

        });

        selectCountry(filteredCountries);
    }

});
//? Start App //
async function startApp() {

    allCountries = await getCountry();

    for (let i = 0; i < allCountries.length; i++) {

        const option = document.createElement("option");

        option.value = allCountries[i].countryCode;
        option.textContent = allCountries[i].name;

        globalCountry.appendChild(option);
    }
    selectCountry(allCountries);
}
startApp();



//? Destination Class //
class Destination {
    constructor(countryCode, countryName, city, year, cityLat, cityLon) {
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.city = city || null;
        this.year = year;
        this.cityLat = cityLat;
        this.cityLon = cityLon;
    }
}

//? toast Alert //
function showToast(type, message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    let icon;

    if (type === "success") {
        icon = "fa-circle-check";
    } else if (type === "error") {
        icon = "fa-circle-xmark";
    } else {
        icon = "fa-circle-info";
    }

    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
        <button class="toast-close">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    toastContainer.appendChild(toast);
    const closeBtn = toast.querySelector(".toast-close");
    closeBtn.addEventListener("click", function () {
        toast.remove();
    });

    setTimeout(function () {
        toast.remove();
    }, 4000);
}
//? Update Saved Plans Counter //
function updateSavedPlansCounter() {
    statSaved.textContent = savedPlans.length;
    plansCount.textContent = savedPlans.length;
    plansCount.hidden = savedPlans.length === 0;
}

//? Update Plans Filter Counts //
function updatePlansFilterCounts() {

    const holidayCount = savedPlans.filter(function(plan) {
        return plan.type === "holiday";
    }).length;

    const eventCount = savedPlans.filter(function(plan) {
        return plan.type === "event";
    }).length;

    const longWeekendCount = savedPlans.filter(function(plan) {
        return plan.type === "longweekend";
    }).length;

    filterAllCount.textContent = savedPlans.length;
    filterHolidayCount.textContent = holidayCount;
    filterEventCount.textContent = eventCount;
    filterLWCount.textContent = longWeekendCount;
}
//? Selected Destination //

let selectedDestination;

//? Display Selected Destination // 
function displaySelectedDestination() {
    selectedCountryFlag.src = `https://flagcdn.com/w80/${selectedDestination.countryCode.toLowerCase()}.png`;
    selectedCountryFlag.alt = selectedDestination.countryName;
    selectedCountryName.textContent = selectedDestination.countryName;

    if (selectedDestination.city) {
        selectedCityName.textContent = `• ${selectedDestination.city}`;
    } else {
        selectedCityName.textContent = "";
    }
    selectedDestinationCard.classList.remove("hidden");
}

//? Explore Destination //
function exploreDestination(){
    if(!globalCountry.value){
        showToast("info", "Please select a country first");
        return;
    }
    const selectCountry = allCountries.find(function(country){
        return country.countryCode === globalCountry.value;
    });

    selectedDestination = new Destination (       
        globalCountry.value,
        selectCountry.name,
        globalCity.value,
        Number(globalYear.value),
        selectedCityLat,
        selectedCityLon
    );
    // Update Holidays
    updateHolidaysSelection();
    displayHoliday();
    displayEvents();
    displayWeather();
    displayLongWeekends();
    displaySunTimes();
    showCountryInfoError();
    resetInputs();
    showToast("success", `Exploring ${selectedDestination.countryName}!`);
    console.log(selectedDestination);
    
}

//? show Country Info Error//
function showCountryInfoError(){
    dashboardCountryInfo.innerHTML = `
            <div class="country-info-placeholder">
            <div class="placeholder-icon error">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p>Failed to load country information. Please try again.</p>
        </div>
    `;
}

//? Reset Country Info //
function resetCountryInfo(){
    dashboardCountryInfo.innerHTML = `
            <div class="country-info-placeholder">
            <div class="placeholder-icon">
                <i class="fa-solid fa-globe"></i>
            </div>
            <p>Select a country to view detailed information</p>
        </div>
    `;
}

//? Clear Selection //
function clearSelection(){
    selectedDestination = null;
    holidaysSelection.classList.remove("d-flex");
    holidaysSelection.classList.add("d-none");
    eventsSelection.classList.remove("d-flex");
    eventsSelection.classList.add("d-none");
    weatherSelection.classList.remove("d-flex");
    weatherSelection.classList.add("d-none");
    lwSelection.classList.remove("d-flex");
    lwSelection.classList.add("d-none");
    sunSelection.classList.remove("d-flex");
    sunSelection.classList.add("d-none");
    
    resetInputs();
    resetCountryInfo();
    //* Hide Card //
    selectedDestinationCard.classList.add("hidden");
    displayHoliday();
    displayEvents();
    displayWeather();
    displayLongWeekends();
    displaySunTimes();
    showToast("info", "Selection cleared");
}


//? Reset Inputs//
function resetInputs(){
      //* Reset Country // 
    globalCountry.value = "";
    customSelectedText.textContent = "Select Country "
    customSelectedText.classList.add("placeholder");
    customSelectedFlag.innerHTML = "";

    //* Reset City //
    globalCity.value = "";
    selectedCityLat = null;
    selectedCityLon = null;
    allCities = [];
    
    //* Reset Year //
    globalYear.value = "2026";
    yearSelectedText.textContent = "2026";
    yearDropdown.querySelectorAll(".simple-select-option").forEach(function (option) {
    option.classList.remove("selected");

    if (option.dataset.value === "2026") {
        option.classList.add("selected");
    }
});
    citySelectedText.textContent = "Select City";
    citySelectedText.classList.add("placeholder");

    cityDropdown.innerHTML = `
        <div class="simple-select-option no-results">
            No city data available
        </div>
    `
}

//? Show View //
function showView(viewName , clickedItem){
    for(let i = 0; i < views.length; i++){
        views[i].classList.remove("active");
    }
    for(let i = 0; i < navItems.length; i++){
        navItems[i].classList.remove("active");
    }
    document.getElementById(viewName + "-view").classList.add("active");

    clickedItem.classList.add("active");

    //? Update Page Header //
    if(pageContent[viewName]){
        pageTitle.textContent = pageContent[viewName].title;
        pageSubtitle.textContent = pageContent[viewName].subtitle;
    }
    //? Update Holidays View //
    if (viewName === "holidays") {
        displayHoliday();
    }
    //? update events view //
    if(viewName === "events"){
        displayEvents();
    }
    //? update Weather view //
    if(viewName === "weather"){
        displayWeather();
    }
    //? update Long Weekends//
    if(viewName === "long-weekends"){
        displayLongWeekends();
    }
    //? Update Sun Time //
    if(viewName === "sun-times"){
        displaySunTimes();
    }
    //? My Plant//
    if (viewName === "my-plans") {
    displaySavedPlans();
}

}

//? Update Date & Time//
function updateDateTime (){
    const now = new Date();
    currentDatetime.textContent = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
updateDateTime();
setInterval(updateDateTime, 60000);

//? Setup Navigation //
function setupNavigation(){
    for(let i = 0; i < navItems.length; i++){
        navItems[i].addEventListener("click" , function(e){
            e.preventDefault();

            showView(this.dataset.view , this);
        });
    }
}
setupNavigation();

//? Show Empty State //
function showEmptyState(container, icon, title, description){
    container.innerHTML = `
    <div class="empty-state">
            <div class="empty-icon">
                <i class="fa-solid ${icon}"></i>
            </div>

            <h3>${title}</h3>
            <p>${description}</p>

            <button class="btn btn-primary empty-state-btn">
                <i class="fa-solid fa-globe"></i>
                Go to Dashboard
            </button>
        </div>
    `;
    const goDashboardBtn = container.querySelector(".empty-state-btn");
    
    goDashboardBtn.addEventListener("click", function () {
        const dashboardNavItem = document.querySelector('.nav-item[data-view="dashboard"]');

        if (dashboardNavItem) {
            showView("dashboard", dashboardNavItem);
        }
    });
}

//! loading Overlay//
function showLoading(message){
    loadingText.textContent = message || "Loading...";
    loadingOverlay.classList.remove("hidden");
}
//! Hide Loading //
function hideLoading() {
    loadingOverlay.classList.add("hidden");
}
//!====== Holiday Section =========//
//? Save Holidays//
let holidaysData = [];
let savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || [];
//? Holiday Fetch API //
async function getHoliday() {
    if (!selectedDestination) {
        console.log("Please select a destination first");
        return [];
    }
    try {
        const apiUrl = `https://nagerholidays.com/api/v4/Holidays/${selectedDestination.countryCode}/${selectedDestination.year}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        const dataHoliday = await response.json();
        const publicHolidays = dataHoliday.filter(function (holiday) {
        return holiday.holidayTypes.includes("Public");
        });
        return publicHolidays;

    } catch (error) {
        console.log("Failed to fetch holidays:", error);
        return [];
    }
}
//? Update Holidays Selection //
function updateHolidaysSelection(){
    holidaysFlag.src = `https://flagcdn.com/w40/${selectedDestination.countryCode.toLowerCase()}.png`;
    holidaysFlag.alt = selectedDestination.countryName;
    holidaysCountryName.textContent = selectedDestination.countryName;
    holidaysYear.textContent = selectedDestination.year;
    holidaysDescription.textContent = `Browse public holidays for ${selectedDestination.countryName} and plan your trips around them`;
    holidaysSelection.classList.remove("d-none");
    holidaysSelection.classList.add("d-flex");
}
//? Display Holiday //
async function displayHoliday() {
     if (!selectedDestination) {
        showEmptyState(
            holidaysContent,
            "fa-calendar-xmark",
            "No Country Selected",
            "Select a country from the dashboard to explore public holidays"
        );
        return;
    }

    holidaysContent.innerHTML = "<p>Loading holidays...</p>";
    const holidays = await getHoliday();
    holidaysData = holidays;

    if(holidays.length === 0){
        holidaysContent.innerHTML = "<p>No public holidays available for this destination.</p>";
        return ;
    }
    let cardsHtml = "";

    for(let i = 0; i < holidays.length; i++){
        const holidayDate = new Date(holidays[i].date + "T00:00:00");
        const day = holidayDate.getDate();
        const month = holidayDate.toLocaleString("en-US",{
            month : "short"
        })
        const weekday = holidayDate.toLocaleString("en-US",{
            weekday : "long"
        });
        cardsHtml += `
        <div class="holiday-card">
                <div class="holiday-card-header">
                    <div class="holiday-date-box">
                        <span class="day">${day}</span>
                        <span class="month">${month}</span>
                    </div>
                    <button class="holiday-action-btn" data-holiday-index="${i}">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>

                <h3>${holidays[i].name}</h3>
                <p class="holiday-name">${holidays[i].name}</p>

                <div class="holiday-card-footer">
                    <span class="holiday-day-badge">
                        <i class="fa-regular fa-calendar"></i> ${weekday}
                    </span>
                    <span class="holiday-type-badge">Public</span>
                </div>
            </div>
        `;
    }

    holidaysContent.innerHTML = cardsHtml;
    
}
//? Save Holiday //
function saveHoliday(index) {

    const holiday = holidaysData[index];

    const savedHoliday = {
        id: `holiday-${selectedDestination.countryCode}-${holiday.date}-${holiday.name}`,
        type: "holiday",
        title: holiday.name,
        date: holiday.date,
        country: selectedDestination.countryName,
        countryCode: selectedDestination.countryCode,
        year: selectedDestination.year
    };

    savePlan(savedHoliday);
}

//!======== Events Section =========//
//? Events Fetch API //
async function getEvents() {
    if (!selectedDestination || !selectedDestination.city) {
        return null;
    }

    try {
        const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=${encodeURIComponent(selectedDestination.city)}&countryCode=${selectedDestination.countryCode}&size=20`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
    console.log("Error fetching events:", error);
        return null;
    }

    
}
//? Save Event //
function saveEvent(eventId) {

    const eventCard = document.querySelector(
        `.event-card[data-event-id="${eventId}"]`
    );

    if (!eventCard) return;

    const savedEvent = {
        id: `event-${eventId}`,
        type: "event",
        title: eventCard.querySelector("h3").textContent,
        image: eventCard.dataset.eventImage,
        category: eventCard.dataset.eventCategory,
        date: eventCard.dataset.eventDate,
        time: eventCard.dataset.eventTime,
        venue: eventCard.dataset.eventVenue,
        city: eventCard.dataset.eventCity,
        url: eventCard.dataset.eventUrl
    };

    savePlan(savedEvent);
}
//? Update Events Section //
function updateEventsSection(){
    eventsFlag.src = `https://flagcdn.com/w40/${selectedDestination.countryCode.toLowerCase()}.png`;
    eventsFlag.alt = selectedDestination.countryName;

    eventsCountryName.textContent = selectedDestination.countryName;
    eventsCityName.textContent = selectedDestination.city;
    eventsDescription.textContent = `Discover upcoming events in ${selectedDestination.city}, ${selectedDestination.countryName}`;

    eventsSelection.classList.remove("d-none");
    eventsSelection.classList.add("d-flex");
}


//? Display Events //
async function displayEvents() {

    if (!selectedDestination || !selectedDestination.city) {
        eventsSelection.classList.remove("d-flex");
        eventsSelection.classList.add("d-none");

        showEmptyState(
            eventsContent,
            "fa-ticket",
            "No City Selected",
            "Select a city from the dashboard to explore upcoming events"
        );
        return;
    }

    updateEventsSection();

    //? Global Loading //
    showLoading("Loading events...");

    let eventsData = null;

    try {
        eventsData = await getEvents();
    } finally {
        hideLoading();
    }

    console.log(eventsData);

    if (eventsData === null) {
        showEmptyState(
            eventsContent,
            "fa-triangle-exclamation",
            "Something Went Wrong",
            "Unable to load events. Please try again later."
        );
        return;
    }

    if (!eventsData._embedded || !eventsData._embedded.events) {
        showEmptyState(
            eventsContent,
            "fa-ticket",
            "No Events Found",
            "No events found for this location"
        );
        return;
    }

    const events = eventsData._embedded.events;

    let cardsHtml = "";

    for (let i = 0; i < events.length; i++) {

        const eventName = events[i].name;
        const eventId = events[i].id;

        //* Event Image //
        const eventImage = events[i].images && events[i].images.length > 0
            ? events[i].images[0].url
            : "";

        //* Event Category //
        const eventCategory = events[i].classifications[0].segment.name;

        //* Event Date //
        const eventDate = new Date(events[i].dates.start.localDate + "T00:00:00");

        const day = eventDate.getDate();

        const month = eventDate.toLocaleString("en-US", {
            month: "short"
        });

        //* Event Time //
        const eventTime = events[i].dates.start.localTime;

        //* Event Venue //
        const venue = events[i]._embedded.venues[0];
        const venueName = venue.name;
        const venueCity = venue.city.name;

        //* Event URL //
        const eventUrl = events[i].url;

        cardsHtml += `
            <div class="event-card"
                data-event-id="${eventId}"
                data-event-image="${eventImage}"
                data-event-category="${eventCategory}"
                data-event-date="${events[i].dates.start.localDate}"
                data-event-time="${eventTime || ""}"
                data-event-venue="${venueName}"
                data-event-city="${venueCity}"
                data-event-url="${eventUrl}">

                <div class="event-card-image">
                    <img src="${eventImage}" alt="${eventName}">

                    <span class="event-card-category">${eventCategory}</span>

                    <button class="event-card-save">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>

                <div class="event-card-body">
                    <h3>${eventName}</h3>

                    <div class="event-card-info">
                        <div>
                            <i class="fa-regular fa-calendar"></i>
                            ${month} ${day}, ${eventTime || ""}
                        </div>

                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            ${venueName}, ${venueCity}
                        </div>
                    </div>

                    <div class="event-card-footer">
                        <button class="btn-event">
                            <i class="fa-regular fa-heart"></i> Save
                        </button>

                        <a href="${eventUrl}" class="btn-buy-ticket" target="_blank">
                            <i class="fa-solid fa-ticket"></i> Buy Tickets
                        </a>
                    </div>
                </div>

            </div>
        `;
    }

    eventsContent.innerHTML = cardsHtml;

    //* Save Event Buttons //
    const saveButtons = eventsContent.querySelectorAll(
        ".event-card-save, .btn-event"
    );

    for (let i = 0; i < saveButtons.length; i++) {

        saveButtons[i].addEventListener("click", function() {

            const eventCard = this.closest(".event-card");
            const eventId = eventCard.dataset.eventId;

            saveEvent(eventId);

        });
    }
}

//! Weather Section//
//? Get Weather Condition //
function getWeatherCondition(code) {
    if (code === 0) {
        return { description: "Clear sky", icon: "fa-sun", style: "weather-sunny" };
    } else if (code === 1 || code === 2) {
        return { description: "Partly cloudy", icon: "fa-cloud-sun", style: "weather-sunny" };
    } else if (code === 3) {
        return { description: "Overcast", icon: "fa-cloud", style: "weather-cloudy" };
    } else if (code === 45 || code === 48) {
        return { description: "Foggy", icon: "fa-smog", style: "weather-cloudy" };
    } else if (code >= 51 && code <= 67) {
        return { description: "Drizzle / Rain", icon: "fa-cloud-rain", style: "weather-rainy" };
    } else if (code >= 71 && code <= 77) {
        return { description: "Snow", icon: "fa-snowflake", style: "weather-snowy" };
    } else if (code >= 80 && code <= 82) {
        return { description: "Rain showers", icon: "fa-cloud-showers-heavy", style: "weather-rainy" };
    } else if (code >= 85 && code <= 86) {
        return { description: "Snow showers", icon: "fa-snowflake", style: "weather-snowy" };
    } else if (code >= 95) {
        return { description: "Thunderstorm", icon: "fa-cloud-bolt", style: "weather-stormy" };
    }

    return { description: "Unknown", icon: "fa-cloud", style: "weather-cloudy" };
}
//? Update Weather Section //
function updateWeatherSection(){
    weatherFlag.src = `https://flagcdn.com/w40/${selectedDestination.countryCode.toLowerCase()}.png`;
    weatherFlag.alt = selectedDestination.countryName;

    weatherCountryName.textContent = selectedDestination.countryName;
    weatherCityName.textContent = selectedDestination.city;

    weatherDescription.textContent = `Check 7-day weather forecast for ${selectedDestination.city}`;

    weatherSelection.classList.remove("d-none");
    weatherSelection.classList.add("d-flex");

}

//? Display Weather //
async function displayWeather() {

    if (!selectedDestination || !selectedDestination.city) {
        weatherSelection.classList.remove("d-flex");
        weatherSelection.classList.add("d-none");

        showEmptyState(
            weatherContent,
            "fa-cloud-question",
            "No City Selected",
            "Select a country and city from the dashboard to see the weather forecast"
        );
        return;
    }

    updateWeatherSection();

   //? Global Loading //
    showLoading("Loading weather...");

    let weatherData = null;

    try {
        //? Get Weather Data //
        weatherData = await getWeather();
    } finally {
        hideLoading();
    }

    if (!weatherData) {
        showToast("error", "Unable to load weather. Please try again later.");
        return;
    }

    const current = weatherData.current;

    const temperature = current.temperature_2m;
    const feelsLike = current.apparent_temperature;
    const humidity = current.relative_humidity_2m;
    const windSpeed = current.wind_speed_10m;
    const uvIndex = current.uv_index;

    const condition = getWeatherCondition(current.weather_code);
    //? Wind Direction //
    const windDirections = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
    ];

const windDirection = windDirections[
    Math.round(current.wind_direction_10m / 22.5) % 16
];
    //? UV Index Level //
    let uvLevel = "Low";
    let uvClass = "low";

    if (uvIndex >= 3 && uvIndex < 6) {
        uvLevel = "Moderate";
        uvClass = "moderate";
    } else if (uvIndex >= 6 && uvIndex < 8) {
        uvLevel = "High";
        uvClass = "high";
    } else if (uvIndex >= 8 && uvIndex < 11) {
        uvLevel = "Very High";
        uvClass = "very-high";
    } else if (uvIndex >= 11) {
        uvLevel = "Extreme";
        uvClass = "extreme";
    }

    //? Precipitation //
    const precipitation = weatherData.daily.precipitation_probability_max[0];
    const precipitationAmount = weatherData.daily.precipitation_sum[0];

    //? Sunrise & Sunset //
    const sunrise = weatherData.daily.sunrise[0];
    const sunset = weatherData.daily.sunset[0];

    const sunriseDate = new Date(sunrise + ":00Z");
    const sunsetDate = new Date(sunset + ":00Z");

    const sunriseTime = sunriseDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC"
    });

    const sunsetTime = sunsetDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC"
    });

    //? Sun Position //
    const currentTime = new Date(current.time + ":00Z");

    let sunProgress = (
        (currentTime - sunriseDate) / (sunsetDate - sunriseDate)
    ) * 100;

    sunProgress = Math.max(0, Math.min(100, sunProgress));

    //* Current Weather Date //
    const weatherDate = new Date(current.time);

    const weekday = weatherDate.toLocaleDateString("en-US", {
        weekday: "long"
    });

    const formattedDate = weatherDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    //* Daily High & Low //
    const todayHigh = weatherData.daily.temperature_2m_max[0];
    const todayLow = weatherData.daily.temperature_2m_min[0];

    //* Current Weather Hero //
    let weatherHtml = `
        <div class="weather-hero-card ${condition.style}">
            <div class="weather-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${selectedDestination.city}</span>
                <span class="weather-time">${weekday}, ${formattedDate}</span>
            </div>

            <div class="weather-hero-main">
                <div class="weather-hero-left">
                    <div class="weather-hero-icon">
                        <i class="fa-solid ${condition.icon}"></i>
                    </div>

                    <div class="weather-hero-temp">
                        <span class="temp-value">${Math.round(temperature)}</span>
                        <span class="temp-unit">°C</span>
                    </div>
                </div>

                <div class="weather-hero-right">
                    <div class="weather-condition">${condition.description}</div>
                    <div class="weather-feels">Feels like ${Math.round(feelsLike)}°C</div>

                    <div class="weather-high-low">
                        <span class="high">
                            <i class="fa-solid fa-arrow-up"></i>
                            ${Math.round(todayHigh)}°
                        </span>

                        <span class="low">
                            <i class="fa-solid fa-arrow-down"></i>
                            ${Math.round(todayLow)}°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;

    //* Weather Details Grid //
    weatherHtml += `
        <div class="weather-details-grid">

            <!-- Humidity Card -->
            <div class="weather-detail-card">
                <div class="detail-icon humidity">
                    <i class="fa-solid fa-droplet"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Humidity</span>
                    <span class="detail-value">${humidity}%</span>
                </div>

                <div class="detail-bar">
                    <div class="detail-bar-fill" style="width: ${humidity}%"></div>
                </div>
            </div>

            <!-- Wind Card -->
            <div class="weather-detail-card">
                <div class="detail-icon wind">
                    <i class="fa-solid fa-wind"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Wind</span>
                    <span class="detail-value">${windSpeed} km/h</span>
                </div>

                <div class="detail-extra">${windDirection}</div>
            </div>

            <!-- UV Index Card -->
            <div class="weather-detail-card">
                <div class="detail-icon uv">
                    <i class="fa-solid fa-sun"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">UV Index</span>
                    <span class="detail-value">${uvIndex}</span>
                </div>

                <div class="detail-extra uv-level ${uvClass}">
                    ${uvLevel}
                </div>
            </div>

            <!-- Precipitation Card -->
            <div class="weather-detail-card">
                <div class="detail-icon precip">
                    <i class="fa-solid fa-cloud-rain"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Precipitation</span>
                    <span class="detail-value">${precipitation}%</span>
                </div>

                <div class="detail-extra">
                    ${precipitationAmount}mm expected
                </div>
            </div>

            <!-- Sunrise & Sunset Card -->
            <div class="weather-detail-card sunrise-sunset">

                <div class="sun-times-visual">

                    <div class="sun-time sunrise">
                        <i class="fa-solid fa-sun"></i>
                        <span class="sun-label">Sunrise</span>
                        <span class="sun-value">${sunriseTime}</span>
                    </div>

                    <div class="sun-arc">
                        <div class="sun-arc-path"></div>
                        <div class="sun-position"
                            style="--sun-progress: ${sunProgress}%">
                        </div>
                    </div>

                    <div class="sun-time sunset">
                        <i class="fa-solid fa-moon"></i>
                        <span class="sun-label">Sunset</span>
                        <span class="sun-value">${sunsetTime}</span>
                    </div>

                </div>

            </div>

        </div>
    `;

    //* Hourly Forecast //
    const hourly = weatherData.hourly;

    let currentHourIndex = 0;

    for (let i = 0; i < hourly.time.length; i++) {
        if (hourly.time[i] >= current.time) {
            currentHourIndex = i;
            break;
        }
    }

    let hourlyHtml = `
        <div class="weather-section">
            <h3 class="weather-section-title">
                <i class="fa-solid fa-clock"></i> Hourly Forecast
            </h3>

            <div class="hourly-scroll">
    `;

    for (let i = currentHourIndex; i < currentHourIndex + 20 && i < hourly.time.length; i++) {

    const hourTime = new Date(hourly.time[i] + ":00").toLocaleTimeString("en-US", {
        hour: "numeric",
        hour16: true,
        timeZone: "UTC"
    });
        const hourCondition = getWeatherCondition(hourly.weather_code[i]);

        hourlyHtml += `
            <div class="hourly-item ${i === currentHourIndex ? "now" : ""}">
                <span class="hourly-time">${i === currentHourIndex ? "Now" : hourTime}</span>

                <div class="hourly-icon">
                    <i class="fa-solid ${hourCondition.icon}"></i>
                </div>

                <span class="hourly-temp">${Math.round(hourly.temperature_2m[i])}°</span>
            </div>
        `;
    }

    hourlyHtml += `
            </div>
        </div>
    `;

    weatherHtml += hourlyHtml;

    //* 7-Day Forecast //
    const daily = weatherData.daily;

    let forecastHtml = `
        <div class="weather-section">
            <h3 class="weather-section-title">
                <i class="fa-solid fa-calendar-week"></i> 7-Day Forecast
            </h3>

            <div class="forecast-list">
    `;

    for (let i = 0; i < daily.time.length; i++) {

        const forecastDate = new Date(daily.time[i] + "T00:00:00");

        const dayName = i === 0
            ? "Today"
            : forecastDate.toLocaleDateString("en-US", {
                weekday: "short"
            });

        const dayDate = forecastDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short"
        });

        const forecastCondition = getWeatherCondition(daily.weather_code[i]);

        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);

        const precipitation = daily.precipitation_probability_max[i];

        forecastHtml += `
            <div class="forecast-day ${i === 0 ? "today" : ""}">

                <div class="forecast-day-name">
                    <span class="day-label">${dayName}</span>
                    <span class="day-date">${dayDate}</span>
                </div>

                <div class="forecast-icon">
                    <i class="fa-solid ${forecastCondition.icon}"></i>
                </div>

                <div class="forecast-temps">
                    <span class="temp-max">${maxTemp}°</span>
                    <span class="temp-min">${minTemp}°</span>
                </div>

                <div class="forecast-precip">
                    ${precipitation > 0
                        ? `<i class="fa-solid fa-droplet"></i><span>${precipitation}%</span>`
                        : ""}
                </div>

            </div>
        `;
    }

    forecastHtml += `
            </div>
        </div>
    `;

    weatherHtml += forecastHtml;

    weatherContent.innerHTML = weatherHtml;
}

//! Long Weekends Section //
//? get Long weekends Fetch API // 
async function getLongWeekends() {
    if (!selectedDestination) {
        console.log("Please select a destination first");
        return [];
    }
    try {
        const apiUrl = `https://date.nager.at/api/v3/LongWeekend/${selectedDestination.year}/${selectedDestination.countryCode}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const dataLongWeekends = await response.json();

        return dataLongWeekends;

    } catch (error) {
        console.log("Failed to fetch long weekends:", error);
        return [];
    }
}

//? Update Long Weekends //
function updateLongWeekendsSection() {
    lwFlag.src = `https://flagcdn.com/w40/${selectedDestination.countryCode.toLowerCase()}.png`;
    lwFlag.alt = selectedDestination.countryName;

    lwCountryName.textContent = selectedDestination.countryName;
    lwYear.textContent = selectedDestination.year;

    lwDescription.textContent = `Discover long weekend opportunities in ${selectedDestination.countryName} for ${selectedDestination.year}`;

    lwSelection.classList.remove("d-none");
    lwSelection.classList.add("d-flex");
}


//? Display Long Weekends //
async function displayLongWeekends() {
    //? Check Selected Destination //
    if (!selectedDestination) {
        lwSelection.classList.remove("d-flex");
        lwSelection.classList.add("d-none");

        showEmptyState(
            lwContent,
            "fa-umbrella-beach",
            "No Country Selected",
            "Select a country from the dashboard to discover long weekend opportunities"
        );

        return;
    }

    
    //? Update Section Header //
    updateLongWeekendsSection();

    //? Global Loading //
    showLoading("Finding long weekends...");

    let longWeekends = [];

    try {
        //? Get Long Weekends Data //
        longWeekends = await getLongWeekends();
    } finally {
        hideLoading();
    }

    if (longWeekends.length === 0) {
        showEmptyState(
            lwContent,
            "fa-calendar-xmark",
            "No Long Weekends Found",
            "No long weekend opportunities were found for this country and year"
        );
        return;
    }

    let cardsHtml = "";

    for (let i = 0; i < longWeekends.length; i++) {

        const weekend = longWeekends[i];

        const startDate = new Date(weekend.startDate + "T00:00:00");
        const endDate = new Date(weekend.endDate + "T00:00:00");

        const formattedStartDate = startDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });

        const formattedEndDate = endDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        //? Bridge Day Info //
        let bridgeInfo = "";

        if (weekend.needBridgeDay) {
            bridgeInfo = `
                <div class="lw-info-box warning">
                    <i class="fa-solid fa-info-circle"></i>
                    Bridge day required: ${weekend.bridgeDays.join(", ")}
                </div>
            `;
        } else {
            bridgeInfo = `
                <div class="lw-info-box success">
                    <i class="fa-solid fa-check-circle"></i>
                    No extra days off needed!
                </div>
            `;
        }

        //? Long Weekend Days //
        let daysHtml = "";

        let currentDate = new Date(startDate);

        for (let j = 0; j < weekend.dayCount; j++) {

            const dayName = currentDate.toLocaleDateString("en-US", {
                weekday: "short"
            });

            const dayNumber = currentDate.getDate();

            const dateString = currentDate.toLocaleDateString("en-CA");

            let dayClass = "";

            if (weekend.bridgeDays.includes(dateString)) {
                dayClass = "bridge";
            } else if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                dayClass = "weekend";
            }

            daysHtml += `
                <div class="lw-day ${dayClass}">
                    <span class="name">${dayName}</span>
                    <span class="num">${dayNumber}</span>
                </div>
            `;

            currentDate.setDate(currentDate.getDate() + 1);
        }

        //? Long Weekend Card //
        cardsHtml += `
            <div class="lw-card" data-start-date="${weekend.startDate}">
                <div class="lw-card-header">
                    <span class="lw-badge">
                        <i class="fa-solid fa-calendar-days"></i>
                        ${weekend.dayCount} Days
                    </span>

                    <button class="holiday-action-btn save-long-weekend-btn">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>

                <h3>Long Weekend #${i + 1}</h3>

                <div class="lw-dates">
                    <i class="fa-regular fa-calendar"></i>
                    ${formattedStartDate} - ${formattedEndDate}
                </div>

                ${bridgeInfo}

                <div class="lw-days-visual">
                    ${daysHtml}
                </div>
            </div>
        `;
    }

    lwContent.innerHTML = cardsHtml;

    //? Save Long Weekend Buttons //
    const saveButtons = lwContent.querySelectorAll(".save-long-weekend-btn");

    for (let i = 0; i < saveButtons.length; i++) {

        saveButtons[i].addEventListener("click", function() {

            const longWeekendCard = this.closest(".lw-card");
            const startDate = longWeekendCard.dataset.startDate;

            const selectedWeekend = longWeekends.find(function(weekend) {
                return weekend.startDate === startDate;
            });

            if (selectedWeekend) {
                saveLongWeekend(selectedWeekend);
            }

        });

    }
}


//? Save Long Weekend //
function saveLongWeekend(weekend) {

    const savedWeekend = {
        id: `longweekend-${selectedDestination.countryCode}-${weekend.startDate}`,
        type: "longweekend",
        title: `Long Weekend ${weekend.startDate}`,
        startDate: weekend.startDate,
        endDate: weekend.endDate,
        dayCount: weekend.dayCount,
        needBridgeDay: weekend.needBridgeDay,
        bridgeDays: weekend.bridgeDays,
        countryName: selectedDestination.countryName,
        year: selectedDestination.year
    };

    savePlan(savedWeekend);
}

//!======= Currency Section ===========//
//? Get Exchange Rate API//
async function getExchangeRates() {

    var cacheKey = "exchangeRatesData";
    var cachedData = localStorage.getItem(cacheKey);

    //? Check Cached Data //
    if (cachedData) {
        var parsedCache = JSON.parse(cachedData);
        var cacheAge = Date.now() - parsedCache.timestamp;
        var cacheDuration = 24 * 60 * 60 * 1000;

        if (cacheAge < cacheDuration) {
            console.log("Using Cached Exchange Rates");
            return parsedCache.data;
        }
    }

    try {
        const apiUrl = "https://v6.exchangerate-api.com/v6/805842951e5953ad31497176/latest/USD";
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const dataCurrency = await response.json();

        if (dataCurrency.result !== "success") {
            throw new Error("Failed to fetch exchange rates");
        }

        //? Save Data in LocalStorage //
        localStorage.setItem(cacheKey, JSON.stringify({
            data: dataCurrency,
            timestamp: Date.now()
        }));

        return dataCurrency;

    } catch (error) {
        console.log("Failed to fetch exchange rates:", error);

        //? Use Old Cached Data if Available //
        if (cachedData) {
            console.log("Using Old Cached Exchange Rates");
            return JSON.parse(cachedData).data;
        }

        return null;
    }
}

//? Get Currency Name  //
function getCurrencyName(code){
    const currencyNames = new Intl.DisplayNames(["en"], {
        type: "currency"
    });

    return currencyNames.of(code);
}
//? Generate Currency Options //
function generateCurrencyOptions(dropdown , rates , selectedCode){
    const optionContainer = dropdown.querySelector(".currency-custom-options");
    const currencyCode = Object.keys(rates);
    
    let optionHtml = "";

    for(let i = 0; i < currencyCode.length; i++){
        const code = currencyCode[i];
        const name = getCurrencyName(code);

        let selectedClass = "";

        if(code === selectedCode){
            selectedClass = "selected";
        }
        optionHtml += `
        <div class="currency-custom-option ${selectedClass}"
                data-value="${code}"
                data-name="${name}">

                <span class="code">${code}</span>
                <span class="name">${name}</span>

            </div>
        `;
    }
    optionContainer.innerHTML = optionHtml;
}

//? Update Popular Currencies //
function updatePopularCurrencies() {

    const popularCards = popularCurrencies.querySelectorAll(".popular-currency-card");

    const fromCode = currencyFrom.querySelector(".currency-code").textContent;
    const fromRate = exchangeRatesData.conversion_rates[fromCode];

    if (fromRate === undefined) {
        return;
    }

    for (let i = 0; i < popularCards.length; i++) {

        const code = popularCards[i].querySelector(".code").textContent;
        const toRate = exchangeRatesData.conversion_rates[code];

        if (toRate !== undefined) {
            const rate = toRate / fromRate;
            popularCards[i].querySelector(".rate").textContent = rate.toFixed(4);
        }
    }
}

//? Load Currency Dropdowns //
let exchangeRatesData = null;
async function loadCurrencyDropdowns() {
    exchangeRatesData = await getExchangeRates();

    if (!exchangeRatesData) {
        return;
    }

    generateCurrencyOptions(
        currencyFrom,
        exchangeRatesData.conversion_rates,
        "USD"
    );

    generateCurrencyOptions(
        currencyTo,
        exchangeRatesData.conversion_rates,
        "EGP"
    );
    updatePopularCurrencies();
    
}
loadCurrencyDropdowns();

//? Convert Currency //
function convertCurrency() {

    const amount = Number(currencyAmount.value);

    if (!exchangeRatesData) {
        showToast("error", "Exchange rates are not available!");
        return;
    }

    if (amount <= 0 || currencyAmount.value === "") {
        showToast("error", "Please enter a valid amount!");
        return;
    }

    const fromCode = currencyFrom.querySelector(".currency-code").textContent;
    const toCode = currencyTo.querySelector(".currency-code").textContent;

    const fromRate = exchangeRatesData.conversion_rates[fromCode];
    const toRate = exchangeRatesData.conversion_rates[toCode];


    if (fromRate === undefined || toRate === undefined) {
    showToast("error", "Currency rate not found!");
    return;
    }

    const convertedAmount = (amount / fromRate) * toRate;
    const exchangeRate = toRate / fromRate;
    
    //* Update Conversion Result //
    resultFromAmount.textContent = amount.toFixed(2);
    resultFromCode.textContent = fromCode;
    resultToAmount.textContent = convertedAmount.toLocaleString("en-US", {
        minimumFractionDigits: 2,       
        maximumFractionDigits: 2
    });
    resultToCode.textContent = toCode;
    rateFrom.textContent = fromCode;
    rateValue.textContent = exchangeRate.toFixed(4);
    rateTo.textContent = toCode;
    rateDate.textContent = "Last updated: " +
    new Date(exchangeRatesData.time_last_update_utc).toLocaleDateString("en-US");



    //* Show Result //
    currencyResult.classList.remove("hidden");
}

//? Swap Currencies //
function swapCurrencies() {

    const fromCode = currencyFrom.querySelector(".currency-code");
    const fromName = currencyFrom.querySelector(".currency-name");

    const toCode = currencyTo.querySelector(".currency-code");
    const toName = currencyTo.querySelector(".currency-name");

    //* Store From Currency //

    const tempCode = fromCode.textContent;

    const tempName = fromName.textContent;

    //* Swap From & To //
    fromCode.textContent = toCode.textContent;
    fromName.textContent = toName.textContent;
    toCode.textContent = tempCode;
    toName.textContent = tempName;

    //* Update Selected Class //
    const fromOptions = currencyFrom.querySelectorAll(".currency-custom-option");
    const toOptions = currencyTo.querySelectorAll(".currency-custom-option");

    for (let i = 0; i < fromOptions.length; i++) {
        fromOptions[i].classList.remove("selected");
        if (fromOptions[i].dataset.value === fromCode.textContent) {
            fromOptions[i].classList.add("selected");
        }
    }

    for (let i = 0; i < toOptions.length; i++) {
        toOptions[i].classList.remove("selected");
        if (toOptions[i].dataset.value === toCode.textContent) {
            toOptions[i].classList.add("selected");
        }
    }
    currencyResult.classList.add("hidden");
    updatePopularCurrencies();
}

 //? Setup Currency Dropdown //
function setupCurrencyDropdown(dropdown) {

    const trigger = dropdown.querySelector(".currency-custom-trigger");
    const menu = dropdown.querySelector(".currency-custom-dropdown");
    const optionsContainer = dropdown.querySelector(".currency-custom-options");
    const searchInput = dropdown.querySelector(".currency-custom-search input");

    //* Open & Close Dropdown
    trigger.addEventListener("click", function () {
        trigger.classList.toggle("open");
        menu.classList.toggle("open");
    });

    //* Close Dropdown When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            trigger.classList.remove("open");
            menu.classList.remove("open");
        }
    });

    //* Select Currency
    optionsContainer.addEventListener("click", function (event) {

        const selectedOption = event.target.closest(".currency-custom-option");

        if (!selectedOption) {
            return;
        }

        const code = selectedOption.dataset.value;
        const name = selectedOption.dataset.name;

        const allOptions = optionsContainer.querySelectorAll(".currency-custom-option");

        //* Update Trigger
        trigger.querySelector(".currency-code").textContent = code;
        trigger.querySelector(".currency-name").textContent = name;

        //* Update Selected Class
        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].classList.remove("selected");
        }

        selectedOption.classList.add("selected");

        if (dropdown === currencyFrom) {
            updatePopularCurrencies();
        }

        //* Clear Search
        searchInput.value = "";

        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].style.display = "flex";
        }

        //* Close Dropdown
        trigger.classList.remove("open");
        menu.classList.remove("open");
    });

    //* Search Currency
    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.toLowerCase().trim();
        const allOptions = optionsContainer.querySelectorAll(".currency-custom-option");

        for (let i = 0; i < allOptions.length; i++) {

            const currencyCode = allOptions[i].dataset.value.toLowerCase();
            const currencyName = allOptions[i].dataset.name.toLowerCase();

            if (
                currencyCode.includes(searchValue) ||
                currencyName.includes(searchValue)
            ) {
                allOptions[i].style.display = "flex";
            } else {
                allOptions[i].style.display = "none";
            }
        }
    });
}

//? Initialize Currency Dropdowns //
setupCurrencyDropdown(currencyFrom);
setupCurrencyDropdown(currencyTo);

//!========= Sun Time Section ======//
//? get sun time API //
async function getSunTimes() {

    try {
        const currentDate = new Date();

        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");

        const date = `${selectedDestination.year}-${month}-${day}`;

        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${selectedDestination.cityLat}&lng=${selectedDestination.cityLon}&date=${date}&formatted=0`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const dataSunTimes = await response.json();

        if (dataSunTimes.status !== "OK") {
            throw new Error("Failed to fetch sun times");
        }

        return dataSunTimes.results;

    } catch (error) {
        console.log("Failed to fetch sun times:", error);
        return null;
    }
}
//? Update Sun Times Section //
function updateSunTimesSection() {

    sunFlag.src = `https://flagcdn.com/w40/${selectedDestination.countryCode.toLowerCase()}.png`;
    sunFlag.alt = selectedDestination.countryName;

    sunCountryName.textContent = selectedDestination.countryName;
    sunCity.textContent = `• ${selectedDestination.city}`;

    sunSelection.classList.remove("d-none");
    sunSelection.classList.add("d-flex");
}
//? Format Sun Time //
function formatSunTime(time) {
    const date = new Date(time);

    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
//? Format Day Length //
function formatDayLength(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
}
//? Refresh Sun Times References //
function refreshSunTimesReferences() {

    sunCityName = document.getElementById("sun-city-name");
    sunDate = document.getElementById("sun-date");
    sunDay = document.getElementById("sun-day");

    sunDawn = document.getElementById("sun-dawn");
    sunSunrise = document.getElementById("sun-sunrise");
    sunNoon = document.getElementById("sun-noon");
    sunSunset = document.getElementById("sun-sunset");
    sunDusk = document.getElementById("sun-dusk");
    sunDayLength = document.getElementById("sun-day-length");

    sunDayProgressFill = document.getElementById("sun-day-progress-fill");
    sunDaylightValue = document.getElementById("sun-daylight-value");
    sunDaylightPercentage = document.getElementById("sun-daylight-percentage");
    sunDarknessValue = document.getElementById("sun-darkness-value");
}
//? Display Sun Times //
async function displaySunTimes() {

    //* No Destination Selected //
    if (
        !selectedDestination ||
        !selectedDestination.city ||
        selectedDestination.cityLat == null ||
        selectedDestination.cityLon == null
    ) {
        sunSelection.classList.remove("d-flex");
        sunSelection.classList.add("d-none");

        showEmptyState(
            sunTimesContent,
            "fa-sun",
            "No City Selected",
            "Select a country and city from the dashboard to see sunrise and sunset times"
        );

        return;
    }

    //* Restore Original HTML //
    sunTimesContent.innerHTML = sunTimesHTML;

    //* Refresh DOM References //
    refreshSunTimesReferences();

    //* Update Selected Destination //
    updateSunTimesSection();

    sunTimesContent.classList.remove("hidden");

    //* Show Loading //
    showLoading("Loading sun times...");

    try {

        //* Get Sun Times Data //
        const sunData = await getSunTimes();

        if (!sunData) {
            throw new Error("Failed to load sun times");
        }

        //* Get Current Date with Selected Year //
        const currentDate = new Date();

        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");

        const selectedDate = new Date(
            `${selectedDestination.year}-${month}-${day}T00:00:00`
        );

        //* Display Date //
        sunDate.textContent = selectedDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });

        sunDay.textContent = selectedDate.toLocaleDateString("en-US", {
            weekday: "long"
        });

        //* Display City //
        sunCityName.textContent = selectedDestination.city;

        //* Display Sun Times //
        sunDawn.textContent = formatSunTime(sunData.civil_twilight_begin);
        sunSunrise.textContent = formatSunTime(sunData.sunrise);
        sunNoon.textContent = formatSunTime(sunData.solar_noon);
        sunSunset.textContent = formatSunTime(sunData.sunset);
        sunDusk.textContent = formatSunTime(sunData.civil_twilight_end);

        //* Display Day Length //
        sunDayLength.textContent = formatDayLength(sunData.day_length);

        //* Calculate Daylight and Darkness //
        const daylightPercentage = (sunData.day_length / 86400) * 100;
        const darknessPercentage = 100 - daylightPercentage;

        sunDayProgressFill.style.width = `${daylightPercentage}%`;

        sunDaylightValue.textContent = formatDayLength(sunData.day_length);
        sunDaylightPercentage.textContent = `${daylightPercentage.toFixed(1)}%`;

        sunDarknessValue.textContent = formatDayLength(
            86400 - sunData.day_length
        );

    } catch (error) {
        console.log("Failed to display sun times:", error);

        showEmptyState(
            sunTimesContent,
            "fa-triangle-exclamation",
            "Unable to Load Sun Times",
            "Something went wrong while loading sun times. Please try again."
        );

    } finally {
        hideLoading();
    }
}
let currentPlanFilter = "all";
//? SetUp Plans Filter //
function setupPlanFilters() {

    for (var i = 0; i < planFilters.length; i++) {

        planFilters[i].addEventListener("click", function () {

            for (var j = 0; j < planFilters.length; j++) {
                planFilters[j].classList.remove("active");
            }

            this.classList.add("active");

            currentPlanFilter = this.dataset.filter;

            displaySavedPlans();

        });
    }
}
setupPlanFilters();

//!  My Plant section //
function savePlan(plan) {

    const isSaved = savedPlans.some(function(item) {
        return item.id === plan.id;
    });

    if (isSaved) {
        showToast("info", "Already saved!");
        return;
    }

    savedPlans.push(plan);

    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));

    updateSavedPlansCounter();
    updatePlansFilterCounts();

    showToast("success", "Saved to My Plans!");
}


//? Display Saved Plans //
function displaySavedPlans() {

    let filteredPlans = savedPlans;

    if (currentPlanFilter !== "all") {
        filteredPlans = savedPlans.filter(function(plan) {
            return plan.type === currentPlanFilter;
        });
    }

    if (filteredPlans.length === 0) {
        showEmptyState(
            plansContent,
            "fa-heart-crack",
            "No Saved Plans Yet",
            "Start exploring and save holidays, events, or long weekends you like!"
        );

        return;
    }

    let plansHTML = "";

    for (var i = 0; i < filteredPlans.length; i++) {

        if (filteredPlans[i].type === "holiday") {
            plansHTML += displaySavedHolidayCard(filteredPlans[i]);

        } else if (filteredPlans[i].type === "event") {
            plansHTML += displaySavedEventCard(filteredPlans[i]);

        } else if (filteredPlans[i].type === "longweekend") {
            plansHTML += displaySavedLongWeekendCard(filteredPlans[i]);
        }

    }

    plansContent.innerHTML = plansHTML;

    //* Remove Plan Buttons //
const removeButtons = plansContent.querySelectorAll(".remove-plan-btn");

for (var i = 0; i < removeButtons.length; i++) {

    removeButtons[i].addEventListener("click", function() {

        const planId = this.dataset.planId;

        removePlan(planId);

    });

}
}

//? Remove Saved Plan //
function removePlan(planId) {

    savedPlans = savedPlans.filter(function(plan) {
        return plan.id !== planId;
    });

    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));

    updateSavedPlansCounter();
    updatePlansFilterCounts();

    displaySavedPlans();

    showToast("success", "Plan removed successfully!");
}

//? Setup My Plans Actions //

//? Setup My Plans Actions //
function setupMyPlansActions() {

    //* Clear All Plans //
    clearAllPlansBtn.addEventListener("click", function() {

        if (savedPlans.length === 0) {

            Swal.fire({
                title: "No Plans",
                text: "There are no saved plans to clear.",
                icon: "info",
                confirmButtonText: "OK"
            });

            return;
        }

        Swal.fire({
            title: "Clear All Plans?",
            text: "This will permanently delete all your saved plans. This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, clear all!",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d"
        }).then(function(result) {

            if (result.isConfirmed) {

                savedPlans = [];

                localStorage.setItem("savedPlans", JSON.stringify(savedPlans));

                updateSavedPlansCounter();
                updatePlansFilterCounts();

                displaySavedPlans();

                Swal.fire({
                    title: "Cleared!",
                    text: "All saved plans have been deleted successfully.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });

            }

        });

    });

    //* Start Exploring //
    startExploringBtn.addEventListener("click", function() {
        showView("holidays");
    });

}

setupMyPlansActions();



//? Display Saved Holiday Card //
function displaySavedHolidayCard(plan) {

    const holidayDate = new Date(plan.date + "T00:00:00");

    const day = holidayDate.getDate();

    const month = holidayDate.toLocaleString("en-US", {
        month: "short"
    });

    const weekday = holidayDate.toLocaleString("en-US", {
        weekday: "long"
    });

    return `
        <div class="holiday-card">

            <div class="holiday-card-header">

                <div class="holiday-date-box">
                    <span class="day">${day}</span>
                    <span class="month">${month}</span>
                </div>

                <button class="holiday-action-btn remove-plan-btn"
                    data-plan-id="${plan.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

            <h3>${plan.title}</h3>
            <p class="holiday-name">${plan.title}</p>

            <div class="holiday-card-footer">

                <span class="holiday-day-badge">
                    <i class="fa-regular fa-calendar"></i> ${weekday}
                </span>

                <span class="holiday-type-badge">Public</span>

            </div>

        </div>
    `;
}

//? Display Saved Event Card //
function displaySavedEventCard(plan) {

    const eventDate = new Date(plan.date + "T00:00:00");

    const day = eventDate.getDate();

    const month = eventDate.toLocaleString("en-US", {
        month: "short"
    });

    return `
        <div class="event-card" data-event-id="${plan.id}">

            <div class="event-card-image">

                <img src="${plan.image}" alt="${plan.title}">

                <span class="event-card-category">${plan.category}</span>

                <button class="event-card-save remove-plan-btn"
                    data-plan-id="${plan.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

            <div class="event-card-body">

                <h3>${plan.title}</h3>

                <div class="event-card-info">

                    <div>
                        <i class="fa-regular fa-calendar"></i>
                        ${month} ${day}, ${plan.time || ""}
                    </div>

                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        ${plan.venue}, ${plan.city}
                    </div>

                </div>

                <div class="event-card-footer">

                    <button class="btn-event remove-plan-btn"
                        data-plan-id="${plan.id}">
                        <i class="fa-solid fa-trash"></i> Remove
                    </button>

                    <a href="${plan.url}" class="btn-buy-ticket" target="_blank">
                        <i class="fa-solid fa-ticket"></i> Buy Tickets
                    </a>

                </div>

            </div>

        </div>
    `;
}

//? Display Saved Long Weekend Card //
function displaySavedLongWeekendCard(plan) {

    const startDate = new Date(plan.startDate + "T00:00:00");
    const endDate = new Date(plan.endDate + "T00:00:00");

    const formattedStartDate = startDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });

    const formattedEndDate = endDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    //* Bridge Day Info //
    let bridgeInfo = "";

    if (plan.needBridgeDay) {
        bridgeInfo = `
            <div class="lw-info-box warning">
                <i class="fa-solid fa-info-circle"></i>
                Bridge day required: ${plan.bridgeDays.join(", ")}
            </div>
        `;
    } else {
        bridgeInfo = `
            <div class="lw-info-box success">
                <i class="fa-solid fa-check-circle"></i>
                No extra days off needed!
            </div>
        `;
    }

    //* Long Weekend Days //
    let daysHtml = "";

    let currentDate = new Date(startDate);

    for (let i = 0; i < plan.dayCount; i++) {

        const dayName = currentDate.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const dayNumber = currentDate.getDate();

        const dateString = currentDate.toLocaleDateString("en-CA");

        let dayClass = "";

        if (plan.bridgeDays.includes(dateString)) {
            dayClass = "bridge";
        } else if (
            currentDate.getDay() === 0 ||
            currentDate.getDay() === 6
        ) {
            dayClass = "weekend";
        }

        daysHtml += `
            <div class="lw-day ${dayClass}">
                <span class="name">${dayName}</span>
                <span class="num">${dayNumber}</span>
            </div>
        `;

        currentDate.setDate(currentDate.getDate() + 1);
    }

    //* Long Weekend Card //
    return `
        <div class="lw-card">

            <div class="lw-card-header">

                <span class="lw-badge">
                    <i class="fa-solid fa-calendar-days"></i>
                    ${plan.dayCount} Days
                </span>

                <button class="holiday-action-btn remove-plan-btn"
                    data-plan-id="${plan.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

            <h3>${plan.title}</h3>

            <div class="lw-dates">
                <i class="fa-regular fa-calendar"></i>
                ${formattedStartDate} - ${formattedEndDate}
            </div>

            ${bridgeInfo}

            <div class="lw-days-visual">
                ${daysHtml}
            </div>

        </div>
    `;
}

updateSavedPlansCounter();
updatePlansFilterCounts();

//? Event Listener//
globalSearchBtn.addEventListener("click", exploreDestination);
clearSelectionBtn.addEventListener("click", clearSelection);
convertBtn.addEventListener("click", convertCurrency);
swapCurrenciesBtn.addEventListener("click", swapCurrencies);
holidaysContent.addEventListener("click", function (e) {

    const saveButton = e.target.closest(".holiday-action-btn");

    if (!saveButton) return;

    const index = Number(saveButton.dataset.holidayIndex);

    saveHoliday(index);
});

