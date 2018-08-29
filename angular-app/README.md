# Angular app

## First things first

This HackJam is split in three parts:

- Introduction to Angular
- Introduction to the Angular router
- Introduction to state management with ngrx 

Follow the steps in order to understand everything.

We've left a few bugs in the application that you'll have to fix in order to make the application running.
The `main.js` file is the entry point of this application, it is here that your first component is mounted and rendered.

Check the comments in the following files for further information.

Note: Don't forget to type. All the types that you need are in the folder `/types`.

## Part One

### app.component.ts

For now only the dashboard is displayed. The header seems to be missing.
See what you can do about that.

### header.componet.ts

the title and the subtitle are missing. 

### dashboard.component.ts

This component is quite complex and a lot of things are missing.
You need to get all the cryptos and then display them.


### CryptoDetails.js

You will use this component to display each crypto. Check the comment to see what you have to do in it.


## Part Two 

### app.module.ts

The router needs to be setup in the module (check the angular router for further informations).

In the `header.component.ts` we need some navLinks to navigate between the pages.
On the `app.component.ts` file you need to give acces to the pages using the router.
Don't forgot to link the  "+" button in the `crypto-details.component.ts` file with the buying page.


## Part Three 

To start using ngrx, you will have to configure the store in the `app.module.ts`
You will need to implements the reducer and the actions.

Your reducer will be a history reducer `(reducer/wallet.ts)` that keeps informations for each transaction. A transaction can be of type BUY or SELL One action handles the selling and the other one handles the buying.


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

### wallet-dash-board.component.ts

You need here to connect to your ngrx store and get the history.

### buying-page.component.ts
Some stuff to do here to get all the informations you need to connect it with the store and dispatch the action.
Same logic in the `selling-page.component.ts`. Check if you need to change somehting in it.

## Bonus :

For now, you get all the data with one call. If you check the code in the server. You can see that it's possible to fetch a range of the cryptos.
Make a paginated list on the dashBoard.
