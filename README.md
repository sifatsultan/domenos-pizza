## Moja Pizza
This application is built on top of existing code by Masrur Sakib. Find the link [here](https://github.com/masrur-sakib/React.js-Restaurant-Website/pulls)

## Some Learning

Filtering can be a bit trickier sometime. Here are some of the snippets of list filtering that actually worked.

var targetItem = currentCart.filter(c => c.key === key)[0]

let cartItem = dummyData.filter(f => f.id == item.key)[0];

== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
=== is used for comparing two variables, but this operator also checks datatype and compares two values.

The second filter function was having issue when tried with === and when acidentally tried with == it worked. I guess the reason could be that the id and key were not of the same data type although it looked like it was.
