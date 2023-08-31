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

const thead = (array) => {
    return `
        <thead><tr><th>${array.join(`</th><th>`)}</th></tr></thead>
    `;
};

const tbody = (array) => {

};

const renderProductsTable = (products, promo, rating) => {
    let copiedProducts = JSON.parse(JSON.stringify(products));
    document.write(`
        <table>
            ${thead(TITLES_OF_PRODUCTS)}
            ${tbody(copiedProducts)}
        </table>
    `);
};

let enterPromo = prompt(`Enter your promo: `);

if(enterPromo !== null) enterPromo = enterPromo.replaceAll(` `, ``).toUpperCase();

const activePromo = PROMO === enterPromo;

let sortByRating = confirm(`Do you want to sort products by rating?`);

renderProductsTable(PRODUCTS, activePromo, sortByRating);







document.write(`
<table>
    <thead>
        <tr>
            <th>Product title</th>
            <th>Product price</th>
            <th>Product discount percentage</th>
            <th>Product rating</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iPhone 9</td>
            <td>549</td>
            <td>12.96</td>
            <td>4.69</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Final Price: 5940.0</td>
        </tr>
    </tfoot>
</table>
`);
