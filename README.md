<h3>React.js Restaurant Website<h3>
        <h6>It’s a full-stack restaurant site where people can order food online from three available categories. People also can make payment online using a credit card & get delicious food in their home by providing shipping address.</h6>
        <h3>Technology Used:</h3>
        <ul>
            <li>
                <h5>HTML</h5>
            </li>
            <li>
                <h5>CSS</h5>
            </li>
            <li>
                <h5>Stripe.js</h5>
            </li>
            <li>
                <h5>React.js</h5>
            </li>
            <li>
                <h5>Node.js</h5>
            </li>
            <li>
                <h5>Express.js</h5>
            </li>
            <li>
                <h5>MongoDB</h5>
            </li>
            <li>
                <h5>Heroku</h5>
            </li>
            <li>
                <h5>Firebase Auth</h5>
            </li>
            <li>
                <h5>Bootstrap</h5>
            </li>
        </ul>


## Some Learning

Filtering can be a bit trickier sometime. Here are some of the snippets of list filtering that actually worked.

var targetItem = currentCart.filter(c => c.key === key)[0]

let cartItem = dummyData.filter(f => f.id == item.key)[0];

== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
=== is used for comparing two variables, but this operator also checks datatype and compares two values.

The second filter function was having issue when tried with === and when acidentally tried with == it worked. I guess the reason could be that the id and key were not of the same data type although it looked like it was.
