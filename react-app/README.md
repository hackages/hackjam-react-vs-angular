# React app

## First things first

This HackJam is split in three parts:

- Introduction to React
- Introduction to React-router
- Introduction to state management with Redux and React-redux

Follow the steps in order to understand everything.

We've left a few bugs in the application that you'll have to fix in order to make the application running.
The `app.js` file is the entry point of this application, it is here that your first component is mounted and rendered.

Check the comments in the following files for further information.

## Part One 

### App.js

For now only the dashboard is displayed. The header seems to be missing.
See what you can do about that.

### DashBoard.js

This component is quite complex and a lot of things are missing.
You need to get all the cryptos and then display them.

### List.js

This file is empty, you need to create the component that will handle the cryptos and display them.

### CryptoDetails.js

You will use this component to display each crypto. Check the comment to see what you have to do in it.

## Part Two 

### App.js

The router needs to be setup here so you can use the routes in the Header and in the other components.
In the `Header.js`, you need to have some navLinks to navigate between the pages.

On the `CryptoDetail.js` file , you can add a link for the Buying page.

## Part Three 

To start using Redux, you will have to configure the store in the `App.js` file.

You need to implement the reducer and the actions.

Your reducer will be a history reducer that keeps informations for each transaction.
A transaction can be of type `BUY` or `SELL`
One action handles the selling and the other one handles the buying.

Payload structure :

```javascript
    {
        crypto(name) ,
        rate(price),
        quantity,
        date,
        cryptoId,
        type : {BUY,SELL}
    }
```

## WalletDashBoard.js

You need to connect to your redux and get the history.
And finally, link and check the bugs in the `BuyinPage.js` and `SellingPage.js`

## BuyingPage.js

Get the id from the url.
Connect to your redux to get the history => in order to have the amount you have for one crypto.
Use the provider to get the informations of this crypto.
Dispatch the action.

The `SellingPage.js` has almost the same logic.

## Bonus :

For now, you get all the data with one call. If you check the code in the server. You can see that it's possible to fetch a range of the cryptos.
Make a paginated list on the dashBoard.
