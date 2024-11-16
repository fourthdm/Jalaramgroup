import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pcount: number = 0;

  pcountstop: any = setInterval(() => {
    this.pcount++;

    if (this.pcount == 2135) {
      clearInterval(this.pcountstop);
    }
  }, 1);


  yearcount: number = 0;

  yearcountstop: any = setInterval(() => {
    this.yearcount++;

    if (this.yearcount == 975) {
      clearInterval(this.yearcountstop);
    }
  }, 20)


  professioncount: number = 0;

  professioncountstop: any = setInterval(() => {
    this.professioncount++;

    if (this.professioncount == 750) {
      clearInterval(this.professioncountstop);
    }
  }, 20)

  clientcount: number = 0;

  clientcountstop: any = setInterval(() => {
    this.clientcount++;

    if (this.clientcount == 520) {
      clearInterval(this.clientcountstop);
    }
  }, 20)
}
