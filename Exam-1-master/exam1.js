// Michael Wilson
// 09/18/18

// Creating a shopping cart object

const ShoppingCart = {  // Method that displays first and last name//

    firstname: "Michael ",
    lastname: "Wilson"
}
    const items = ["Secret Spice $"+20, "Patience $"+400,];  // array could not figure out how to pull number data from the array.  .  
    let a = 20;  // declared a couple variables to set number values to
    let b = 400;
    const c = a + b;  // made a sum expression

         function printShoppingCart() {   // Function for displaying Name & items purchased
         console.log("Name: " + ShoppingCart.firstname + ShoppingCart.lastname);
         console.log("Items Purchased:")
         for (let i = 0; i <=1; i++) {  // looping construct
             console.log(items[i])
         }

        console.log("Total Purchase: $" +c); // Unintentional Joke about 420
     }

        printShoppingCart();  // method that prints shopping cart; displays name, items purhcased, and grand total as well.


    /* Main issue - I wanted to be able to set a cost amount for each item in the itmes array.  I've learned that I can't do that in one array.
       I don't understand how to have two arrays that are paralell with eachother in javascript.  I've researched "Keys and Values" however, that doesn't involve arrays".
*/


    




