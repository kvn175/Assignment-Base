async function windowActions() {
    const form = document.querySelector('.userform');
    const search = document.querySelector('#category');

    const request = await fetch('/api');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        console.log('submit fired');
        const display = data.filter((record) => record.category.toUpperCase() === search.value.toUpperCase());
        
    });

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value);

    });
}

window.onload = windowActions;



//HOW TO WRITE POST REQUEST
// const request = await fetch('/api', {
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({data: search.value})
// });
// const data =  await request.json();

// console.table(data.data)