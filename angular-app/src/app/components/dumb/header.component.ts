import {Component, OnInit} from '@angular/core'

// First part : display the title and the subtitle

// Second part : Since the routes are implemented (or not ?) you need now to add
//               some navLinks to navigate between the pages "Buy" and "Your wallet"

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <div>
        <h1 class="title"></h1> <!-- title -->
        <h4 class="subtitle"></h4> <!-- subTitle -->
      </div>
      <div class="linkBox">
          <!-- need some navLinks -->
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        background-color: #512da8;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: auto;
        height: 6rem;
      }

      .title {
        padding-top: 1rem;
        padding-left: 1.2rem;
        color: #ffffff;
        margin: 0;
      }

      .subtitle {
        color: #d1c4e9;
        padding-left: 1.2rem;
        margin: 0;
      }

      .linkBox {
        padding-right: 2rem;
        padding-top: 2.3rem;
      }

      .link {
        color: #ffffff;
        margin-left: 0.4rem;
        text-decoration: none;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  title = 'HackCoin'
  subTitle = 'Hello there! General Kenobi'
  constructor() {}

  ngOnInit() {}
}
