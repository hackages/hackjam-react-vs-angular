import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {reduce, switchMap} from 'rxjs/operators'
import {History} from '../../types/History'
import {BUY} from '../../reducers/wallet'

// Third part
// 1. fetch the history from the store

interface agg {
  [key: string]: comp
}

interface comp {
  quantity: number
  id: number
}

@Component({
  selector: 'app-wallet-dash-board',
  template: `
  <div class="container"> 
  <h2 class="title">Your Wallet</h2>
  <h4 class="subtitle">Your Currencies </h4>
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Quantity</td>
        
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of nbrByCryptos$"> <!-- check keyValue -->
        <td>{{data.key}}</td>
        <td>{{data.value.quantity}}</td>
        <td><a class="sellLink" >Sell</a></td>
      </tr>
    </tbody>
  </table>
      <h4 class="subtitle">Your History</h4>
      <table class="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Rate</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Operation</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of history$ | async ">
            <td>{{data.crypto}}</td>
            <td>{{data.rate}}</td>
            <td>{{data.quantity}}</td>
            <td>{{(data.rate * data.quantity).toFixed(2)}}</td>
            <td>{{data.type === BUY ? 'Buying' : 'Selling'}}</td>
            <td>{{ data.date }}</td> <!-- You can format that date => check the pipes -->
          </tr>
        </tbody>
      </table>
      </div>
    
  `,
  styles: [
    `
      .container {
        background-color: white;
        width: 61%;
        box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
        margin: auto;
        padding: 1rem 1rem 1rem 1rem;
        margin-top: 2rem;
        border-radius: 10px;
      }

      .title {
        text-align: center;
        color: #512da8;
      }
      .subtitle {
        text-align: center;
        color: #d1c4fa;
      }

      .table {
        margin: auto;
        text-align: center;
        display: table;
      }

      .sellLink {
        color: #512da8;
        text-decoration: none;
        outline: none;
      }
    `,
  ],
})
export class WalletDashBoardComponent implements OnInit {
  history$: Observable<History[]>
  nbrByCryptos$: Observable<agg>
  BUY: string = BUY
  constructor() {}

  ngOnInit() {
    this.getCurrency
  }

  getCurrency() {
    this.nbrByCryptos$ = this.history$.pipe(
      switchMap(x => x),
      reduce(
        // some things is wrong here
        //check what the reduce does in Rxjs and check if it's what we want here (hint: data can change over time )
        (acc, current: History) =>
          acc[current.crypto]
            ? {
                ...acc,
                [current.crypto]: {
                  ...acc[current.crypto],
                  quantity:
                    current.type === BUY
                      ? acc[current.crypto].quantity + current.quantity
                      : acc[current.crypto].quantity - current.quantity,
                },
              }
            : {
                ...acc,
                [current.crypto]: {
                  quantity: current.quantity,
                  id: current.cryptoId,
                },
              },
        {}
      )
    )
  }
}
