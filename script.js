const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurants = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => restaurants.push(...data)); 

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.restaurant.match(regex) || place.state.match(regex)
    })
}
function displayMatches() {
    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = 'hl'>${this.value}</span>`);
        
        return `
            <li>
                <span class = "name">${cityName}, ${place.state} </span>
                <span class = "population">${place.population}</span>
            </li>`;
    }).join('');
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);