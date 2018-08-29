import {Component, OnInit} from '@angular/core'
import {Observable, combineLatest, of} from 'rxjs'
import {ApiService} from '../../api.service'
import {Currency} from '../../types/Currency'
import {History} from '../../types/History'
import {map, switchMap} from 'rxjs/operators'
import {getWalletCryptoNbr} from '../../utils/functions'

// Second part :  how do you get the id form the url ?
// the ngTemplate  is not called , why ?

// Third part : implements the SellCrypo function to dispatch a new action

@Component({
  selector: 'app-selling-page',
  template: `
    <div >
      <a routerLink="/wallet">Go back to your wallet</a>
      <div *ngIf="crypto$ | async as data">
      <ng-container *ngIf="nbOfCrypto$ | async  ">
      <h2>Sell your {{data.name}}</h2>
        <p>
          You have {{nbOfCrypto}}
          {{data.name}} at the moment
        </p>
        <h3>What is the rate</h3>
        <h4>Rate : {{data.quotes.USD.price}}</h4>
        <p>Last hour : {{data.quotes.USD.percent_change_1h}} %</p>
        <p>last day : {{data.quotes.USD.percent_change_24h}} %</p>
        <p>last week : {{data.quotes.USD.percent_change_7d}} %</p>
        <input type="number" (ngModel)="quantity"  min="0"/>
        <button
        (click)="sellCrypto({
          crypto: data.name, 
          rate: data.quotes.USD.price,
          quantity: quantity,
          date:  date,
          cryptoId: data.id,
          nbOfCrypto: nbOfCrypto
        })"
        >
          Sell
        </button>
        </ng-container>
        <ng-template >You don't have any {{data.name}} to sell</ng-template>
      </div>
    </div>
  `,
  styles: [],
})
export class SellingPageComponent implements OnInit {
  crypto$: Observable<Currency>
  quantity: number = 0
  date: number = Date.now() / 1000
  nbOfCrypto$: Observable<number>
  history$: Observable<History[]>
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.crypto$ = this.api.getById(1).pipe(map(cryptos => cryptos.cryptos))

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
  sellCrypto({crypto, rate, quantity, date, cryptoId, nbOfCrypto}) {
    return quantity <= nbOfCrypto && 'hello'
  }
}
