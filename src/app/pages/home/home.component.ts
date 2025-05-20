import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactform: FormGroup;

  navigateAndScroll(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm(
      'service_7ugy8vj',       // e.g., service_xxxxxx
      'template_p367rob',      // e.g., template_yyyyyy
      event.target as HTMLFormElement,
      '_iV-VaDzP7_2BoTII'        // e.g., public_zzzzzz
    ).then(
      () => {
        alert('Enquiry sent successfully!');
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send enquiry.');
      }
    );

    (event.target as HTMLFormElement).reset();
  }

  constructor(private router: Router) {
    this.contactform = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
      Mobileno: new FormControl(),
      Message: new FormControl()
    })
  }

  ngOnInit(): void {

  }

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
