import {Component, OnInit, Input} from '@angular/core'
import {Currency} from '../../types/Currency'

// First part : you need to get the data from the dashboard how ?

// Second part : the  + button should redirect to the "buy" page

@Component({
  selector: 'app-crypto-detail',
  template: `
  <div class="card">
  <div class="cardHeader">
    <h3>
      {{data.name}} ({{data.symbol}})
    </h3>
    <h3>{{data.rank}}</h3>
  </div>
  <div class="cardBody">
    <a class="plusButton"> + </a> <!-- part 2 : You need to give a location to that link -->
    <p> Price : {{data.quotes.USD.price}}</p>
    <p>
      Change(1h) :
      <span>
        {{data.quotes.USD.percent_change_1h}} %
      </span>
    </p>
    <p>
      Change(24h) :
      <span>
        {{data.quotes.USD.percent_change_24h}} %
      </span>
    </p>
    <p>
      Change(7d) :
      <span>
        {{data.quotes.USD.percent_change_7d}} %
      </span>
    </p>
    <p  class="date">
      Last update :
      {{
        data.last_updated | formatDate
      }}
    </p>
  </div>
</div>
  `,
  styles: [
    `
      .card {
        background-color: #673ab7;
        margin: 1rem 0 1rem 0;
        box-shadow: 0 2px 4px 0 rgba(18, 19, 18, 0.09);
        border-radius: 10px;
        width: 280px;
      }

      .cardHeader {
        padding: 0 1rem 0 1rem;
        color: white;
        display: flex;
        justify-content: space-between;
        height: 78px;
      }

      .plusButton {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: #ffc107;
        color: white;
        top: -22px;
        right: 15px;
        border-radius: 50%;
        border: none;
        outline: none;
        font-size: 22px;
        text-decoration: none;
      }

      .cardBody {
        position: relative;
        padding: 0 1rem 1rem 1rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top: 0.1rem solid white;
        color: #673ab7;
        display: flex;
        background-color: white;
        flex-direction: column;
        padding-top: 0.6rem;
      }

      .cardBody p {
        margin: 0;
      }

      .date {
        margin-top: 0.4rem;
        font-size: 0.855rem;
      }
    `,
  ],
})
export class CryptoDetailComponent implements OnInit {
  data = {quotes: {USD: {}}}
  constructor() {}

  ngOnInit() {}
}
