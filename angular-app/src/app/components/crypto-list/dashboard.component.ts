import {Component, OnInit} from '@angular/core'
import {ApiService} from '../../api.service'
import {Observable} from 'rxjs'
import {Currency} from '../../types/Currency'
import {map, tap} from 'rxjs/operators'

// Firts part :
// 1. You need to initilise the API service
//    then you need to get the datas from it in the getData() function
// 2. When the data are fetched , you need to display them using the crypto-details component
//    hint : check *ngFor
// 3. Since everything is displayed properly , you need now to handle the search
// 4. Plug the refresh function with the refresh button

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container">
      <div class="subHeader">
      <div class="row">
        <button class="refreshButton" (onClick)="refresh">Refresh</button>  <!-- This doesn't work  -->
        <div class="textNum" > {{(datas  | filter: searchTerm).length}} / 100</div> <!-- hey ! -->
        <p *ngIf="loading">...loading</p>
      </div>
        <input class="search" type="text" placeholder="Search" (ngModel)="something"/> <!-- it's broken !   -->
      </div>
      <div class="listscreen">
      <div >
        <app-crypto-detail ></app-crypto-detail> <!-- display the cryptos here  -->
      </div>
      </div>
    </div>
  `,
  styles: [
    `
      .textNum {
        margin-left: 1rem;
        padding-top: 1.5rem;
        padding-right: 1rem;
      }
      .listscreen {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
      }

      .subHeader {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: auto;
        background-color: #d1c4e9;
        box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
        position: sticky;
        top: 0;
        color: #673ab7;
        padding: 0.5em 0;
        z-index: 5;
      }
      .search {
        box-sizing: content-box;
        margin-left: 1rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        height: 40px;
        border: 1px solid #512da8;
        color: #512da8;
        border-radius: 4px;
        padding: 0 16px 0 40px;
        line-height: 16px;
        transition: all 0.2s;
        margin-top: 1rem;
        font-size: 1rem;
      }

      .search :focus {
        border-color: #673ab7;
        outline: none;
        color: #673ab7;
      }

      .row {
        display: flex;
        flex-direction: row;
      }

      .refreshButton {
        background-color: #673ab7;
        color: white;
        font-size: 1rem;
        margin: 1rem;
        box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
        border-radius: 6px;
        padding: 8px;
        outline: none;
        cursor: pointer;
        transition: all 0.2s;
      }

      .refreshButton :hover {
        transform: scale(1.1);
        transition: all 0.2s;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  datas: Observable<Currency>
  searchTerm: string = ''
  loading: boolean = false
  constructor() {}

  ngOnInit() {
    this.getData()
  }
  getData(): void {}
  refresh(): void {
    this.getData()
  }
}
