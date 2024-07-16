// Cart: https://fakestoreapi.com/carts/user/2
// User: https://fakestoreapi.com/users/1

// Scenario: Fetch data for cart and user that we need to show in header

async function headerDetails() {
    console.log(performance.now());
    const userDetails = await fetch('https://fakestoreapi.com/users/1');
    const cartDetails = await fetch('https://fakestoreapi.com/carts/user/2');
    console.log(await userDetails.json(), await cartDetails.json());
    console.log(performance.now());
}

headerDetails();


async function headerDetailsInParallel() {
    console.log(performance.now());
    const data = await Promise.allSettled([fetch('https://fakestoreapi.com/users/1'),fetch('https://fakestoreapi.com/carts/user/2')]);
    // const data = await Promise.all([fetch('https://fakestoreapi.com/users/1'),fetch('https://fakestoreapi.com/carts/user/2')]);
    console.log(data);
    console.log(performance.now());
}

headerDetailsInParallel();


// User Details: https://dummyjson.com/users/2 , https://fakestoreapi.com/users/2


async function fetchUserData() {
    const data = await Promise.any([fetch('https://fakestoreapi.com/users/1'),fetch('https://fakestoreapi.com/carts/user/2')]);
    // const data = await Promise.race([fetch('https://fakestoreapi.com/users/1'),fetch('https://fakestoreapi.com/carts/user/2')]);
    console.log(data);
}

fetchUserData();