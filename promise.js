const { getDefaultAutoSelectFamily } = require("net");

const countries = [
    { id:1, name:'Türkiye' },
    { id:2, name:'Italy' },
    { id:3, name:'USA' }
];

const getCountries = () => {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            resolve(countries);
        }, 1000);
    });
}

// console.log(getCountries());

getCountries()
    .then((result) => { 
        console.log(result); 
    })
    .catch((err) => { 
        console.error(err); 
    });
                

const cities = [
    { id:1, countryId: 1, name: 'Adana' },
    { id:34, countryId: 1, name: 'İstanbul' },
    { id:100, countryId: 3, name: 'New York' }
];


const getCities = (countryId) => {
    return new Promise((resolve, reject) => {
        var result = cities.filter(x => x.countryId == countryId);
        resolve(result);
    });
}

// getCountries().then( (data) => {
//     const countryId = data[0].id;
//         getCities(countryId).then( (city) => {
//             console.log(city);
//         })
// });


const flow = async() => {
    const countries = await getCountries();

    const cities = await getCities(countries[0].id);

    console.log(cities);
}

flow();