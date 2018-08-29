import {Component} from '@angular/core'

// Firt part(intro) => display the Header component on the top of the app

// Second part(routing) => Implements the routing sytem using the angular build-in router
// You need to implements the route on the app.module
// hint : you need to display the cryptos, buy them, see your wallet and sell cryptos

// Third part => nothing to do here !

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-dashboard></app-dashboard>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'HackCoin'
}
