import fetch from 'isomorphic-fetch';

export default function fetchApi(query) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(res => res.json());
}

// fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
// .then(res => res.json())
// .then(res => {
//     // console.log(res);
//     res.results.map( product => {

//         console.log(`${product.id}: ${product.price}  ${product.title} ${product.currency_id} ${product.sold_quantity} ${product.condition} ${product.thumbnail} ${product.shipping.free_shipping} ${product.seller_address.state.name}`);
//     });
// });

// fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
// .then(res => res.json())
// .then(res => {
//     // console.log(res);
//     res.results.map( product => {

//            console.log(product);
//     });
// });