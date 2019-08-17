import { Component, OnInit, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../app.component.scss'
  ],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  public isMobile: boolean
  public showNavigationArrows = false
  public showNavigationIndicators = false
  public pauseOnHover = false
  public images = [
    ['assets/images/man_on_a_boat.jpg', 'Man on a boat'],
    ['assets/images/man_on_tracks.jpg', 'Man on tracks'],
    ['assets/images/jars_on_a_table.jpg', 'Jars on a table'],
    ['assets/images/two_men_and_baby.jpg', 'Two men and a baby']
  ]
  public mobileImages = [
    ['assets/images/boat_in_venice.jpg', 'Boat in Venice'],
    ['assets/images/cake.jpg', 'Birthday cake'],
    ['assets/images/railroad_tracks.jpg', 'Railroad tracks'],
    ['assets/images/venice.jpg', 'Venice']
  ]

  @HostListener('window:resize', ['$event'])
  isMobileView(event?) {
    return window.innerWidth < 576 ? true : false
  }

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    this.isMobile = this.isMobileView()
  }

  ngOnInit() {
  }

}
