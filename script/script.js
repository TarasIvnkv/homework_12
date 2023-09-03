const PROMO = `PATRON`;

const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
];

const TITLES_OF_PRODUCTS = [`Product title`, `Product price`, `Product discount percentage`, `Product rating`];

const STABLE_PERCENT = 100;

const thead = (array) => {
    return `
        <thead><tr><th>${array.join(`</th><th>`)}</th></tr></thead>
    `;
};

const tbody = (array) => {
    const TRs = array.map(item =>{
        return `
            <tr>
                <td>${item.title}</td>
                <td>${item.price}$</td>
                <td>${item.discountPercentage}%</td>
                <td>${item.rating}</td>
            </tr>
        `;
    });
    return `<tbody>${TRs.join(``)}</tbody>`;
};

const resPrice = (array,promo) => {
    return array.reduce((returnedValue,item) => {
        if(promo){
            const discountPrice = item.price - (item.price * item.discountPercentage / STABLE_PERCENT) + returnedValue;
            return +discountPrice.toFixed(2);
        } else{
            return returnedValue + item.price;
        }
    },0);
};

const tfoot = (array, promo) => {
    return `
    <tfoot>
        <tr>
            <td>Final Price: ${resPrice(array,promo)}$</td>
        </tr>
    </tfoot>`;
};

const compare = (a,b) =>{
    if (a.rating < b.rating) return -1;
    if (a.rating == b.rating) return 0;
    if (a.rating > b.rating) return 1;
};


const renderProductsTable = (products, promo, rating) => {
    let copiedProducts = JSON.parse(JSON.stringify(products));

    if (sortByRating){copiedProducts.sort(compare)};
    document.write(`
        <table>
            ${thead(TITLES_OF_PRODUCTS)}
            ${tbody(copiedProducts)}
            ${tfoot(copiedProducts, activePromo)}
        </table>
    `);
};

let enterPromo = prompt(`Enter your promo: `);

if(enterPromo !== null) enterPromo = enterPromo.replaceAll(` `, ``).toUpperCase();

const activePromo = PROMO === enterPromo;

let sortByRating = confirm(`Do you want to sort products by rating?`);

renderProductsTable(PRODUCTS, activePromo, sortByRating);
