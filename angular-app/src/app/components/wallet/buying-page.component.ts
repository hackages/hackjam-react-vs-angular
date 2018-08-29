import {Component, OnInit} from '@angular/core'
import {Observable, combineLatest, of} from 'rxjs'
import {ApiService} from '../../api.service'
import {ActivatedRoute} from '@angular/router'
import {map, switchMap} from 'rxjs/operators'
import {Currency} from '../../types/Currency'
import {getWalletCryptoNbr} from '../../utils/functions'
import {History} from '../../types/History'

//Second part : There is two links in this page, but they doesn't work

// Third part :
// 1. Get the history from the store
// 2. Use the api service to get one crypto
// 3. implements the buyCrypto functions that has to dispatch an action to the reducer
// 4. Bind the function with the "buy" button

@Component({
  selector: 'app-buying-page',
  template: `
  <div>
    <a>Go Back to the DashBoard</a> <!-- hey !  -->
    <a>Go to your wallet</a> <!-- look at me -->
    <div *ngIf="crypto$ | async as data">
      <h2>Buy {{data.name}}</h2>
      <h4>Rate : {{data.quotes.USD.price}}</h4>
      <h4>Quantity : </h4>
      <input
        type="number"
        [(ngModel)]="quantity"
        min="0"
      />
      <!-- Call the buyCrypto functions here -->
      <button
      (onClick)= "nop" 
      >
        Buy
      </button>
      <div *ngIf="(nbOfCrypto$ | async) === 0">You have no {{data.name}}</div>
      <div *ngIf="(nbOfCrypto$ | async) as nbOfCrypto">You have {{nbOfCrypto}} {{data.name}}</div>
      <p>
    </div>
  </div>
  `,
  styles: [],
})
export class BuyingPageComponent implements OnInit {
  crypto$: Observable<Currency>
  quantity: number = 1
  date: number = Date.now() / 1000
  nbOfCrypto$: Observable<number>
  history$: Observable<History[]>
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nbOfCrypto$ = combineLatest(this.history$, this.crypto$).pipe(
      switchMap(([history, crypto]) =>
        of(
          getWalletCryptoNbr({
            history,
            name: crypto.name,
          })
        )
      )
    )
  }

  buyCrypto({crypto, rate, quantity, date, cryptoId}) {} // you need to implement this
}
