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
    ['https://lh3.googleusercontent.com/IvEvRPjTblg2YDwdJGkX39jwylVpPNhc-IdgDtW_6tAvYzGz7E3EPtXq_9g7fGwTqpx5AZ7KrUtzfsUxy4rPT-Q2GMaBC1lvhdFEgYQXFyAd6tyflI_8-4wjG2J5cdFLritzMNhOxtk=w1751-h984-no', 'Man on a boat'],
    ['https://lh3.googleusercontent.com/Ui2SBxytfrLUvW0nzMqe9HGesobuMRmNEEvbkFwsVSOY62-gSqOoBYmIozbcm3o4u0bvFhCOEQmzFartTEa8QMZEEUgkVzMbUJ-lSUy4WbAtvzH8T13VivCh2r_Ze6L4vqz3oD0RcSE=w1749-h984-no', 'Man on tracks'],
    ['https://lh3.googleusercontent.com/oqDBhrUjmKnpMp7kdDUnJ6CtMGQx-sG8zKS-KVoZRak2L1iTGHAjHcdZFwhQCylBM5xVgmh_sKr6Z5e0Z2Us9In3yniWULrH3J4nwndTji0JLeAt6cjuMaTJyoa6ayFFlGEyylAQsds=w3677-h2067-no', 'Five girls'],
    ['https://lh3.googleusercontent.com/Dwu1Oxbt2CngBsFGJIj2gm1cL-JJTPCfLW-O66eYz3lZwv-trv7_gcTT4Z3otXV7Lmb4wyjwgUSnzUybeFDJzuzHF2QShj12lOWVi1X2EIhr8EjOgReR4Tr8k0lABrk9MCOP_dp1XkE=w1749-h984-no', 'Jars on a table'],
    ['https://lh3.googleusercontent.com/JW3MdipHGR45wRLkjh3ioa9-OJ6I5HXG1Jc-XHd3e-jUlfWn8lPuzVPLPSZZlFsykDV9Zsjw_6L4ZpRcHGpe7jWMW39WJEA0ztUScl7qQQnW1R09lthRlk-6m1PBCwaFs9jHtPH2cqk=w1751-h984-no', 'Two men and a baby']
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
