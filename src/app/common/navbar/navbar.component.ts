import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isScrolled = false;
  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // closeNavbar() {
  //   // Close the navbar by toggling the collapse class
  //   const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
  //   if (navbarToggler) {
  //     navbarToggler.click();
  //   }
  // }

  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollOffset > 50; // Change `50` to the desired scroll offset
  }

  closeNavbar() {
    const navbar = document.getElementById('navbarTogglerDemo01');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }

  constructor(private renderer: Renderer2) { }

  
}
