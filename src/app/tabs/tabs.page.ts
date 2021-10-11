import { Component,} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  cartCount:any;
  constructor() {}

  ngOnInit(): void {
    this.cartCount= localStorage.getItem('cart');
    console.log(this.cartCount);
    
  }

}
