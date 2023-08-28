
fetch("https://fakestoreapi.com/products")

 .then((result) => {
    let users = result.json();
    return users;
  })
  .then((products) => {
    let x=0;
    console.log(products);
        for (let i = 0; i < products.length; i++) {
         let name =   products[i].price;

          console.log(name);
          x += name; 

        }
         
         console.log(`sum price= ${x}`)
         return products;
      })
      .then((products) => {

            for (let i = 0; i < products.length; i++) {
             let name =   products[i].title;
            }
             return products;
          })
          .then((products) => {
            console.log(products);
                for (let i = 0; i < products.length; i++) {
                 let name =   products[i];
                } return products;})

          .catch((error) => {
                alert(error.message);
              });

///////////////////////////////////////////////////////////////////



      