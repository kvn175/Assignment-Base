const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
            const restaurants = [];

            fetch(endpoint)
            .then(blob => blob.json())
            .then(data => restaurants.push(...data)); 
            console.log(restaurants)
            

            function findMatches(wordToMatch, restaurants) {
                return restaurants.filter(place => {
                const regex = new RegExp(wordToMatch, 'gi')
                return place.category.match(regex)
            })
        }
            function displayMatches() {
                    
                const matchArray = findMatches(this.value, restaurants);
                const html = matchArray.map(place => {
                    const regex = new RegExp(this.value, 'gi');
                    const categoryName = place.category.replace(regex, 
                    `<span class='h1'>${this.value}</span>`);
                    return `
                    <div class = 'boxes'>
                <li>
                    <span class="name">${place.name}</span>
                    
                </li>
                <li>
                    <span class="category">${place.category}</span>
                </li>
                <li> 
                    <address class = italicize>
                    <span class="category">${place.address_line_1}</span>
                    </address>
                </li>
                <li>
                    <address class = italicize>
                    <span class="category">${place.city}</span>
                    </address>
                </li>
                <li>
                    <address class = italicize>
                    <span class="category">${place.state}</span>
                    </address>
                </li>
                <li>
                    <address class = italicize>
                    <span class="category">${place.zip}</span>
                    </address>
                </li>
                </div>
                
                
                
                
                `;
            }).join('');
            suggestions.innerHTML = html;
            let value = document.getElementById('#search').value;
            if (value.length > 0){
                {searchInput.hide()}
        
        }
        const searchInput = document.querySelector('.search');
        const suggestions = document.querySelector('.suggestions');

        searchInput.addEventListener('change', displayMatches);
        searchInput.addEventListener('keyup', displayMatches);

        searchInput.removeEventListener('click', displayMatches);
