import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = [
    {
      id: 1,
      productImage:
        'https://m.media-amazon.com/images/I/81fBxRm5c0L._UL1500_.jpg',
      productName: "Symactive Men's Running Shoe",
      Discription: 'something',
    },
  ];
}
