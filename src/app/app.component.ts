import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newproject';

  constructor(private renderer: Renderer2,) { }

  ngOnInit(): void {

  }

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // isLightMode = true;
  // toggleButtonText = 'Switch to Dark Mode';

  // toggleTheme(): void {
  //   if (this.isLightMode) {
  //     this.renderer.removeClass(document.body, 'light-mode');
  //     this.renderer.addClass(document.body, 'dark-mode');
  //     this.toggleButtonText = 'Switch to Light Mode';
  //   } else {
  //     this.renderer.removeClass(document.body, 'dark-mode');
  //     this.renderer.addClass(document.body, 'light-mode');
  //     this.toggleButtonText = 'Switch to Dark Mode';
  //   }
  //   this.isLightMode = !this.isLightMode;
  // }

}