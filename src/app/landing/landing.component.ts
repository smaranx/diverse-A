import { trigger, transition, style, animate } from '@angular/animations';
import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import * as AOS from 'aos';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [
      trigger('fade', [
        transition('void => active', [ // using status here for transition
          style({ opacity: 0 }),
          animate(2000, style({ opacity: 1 }))
        ]),
        transition('* => void', [
          animate(2000, style({ opacity: 0 }))
        ])
      ])
    ]
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  images: { img: string; }[];
  slideConfig: any;

  constructor(private wowService: NgwWowService) { 
    this.wowService.init();
  }

  ngOnInit() {
    
    AOS.init()
    this.images = [  
      { img: "../../assets/o1.jpg" },  
      { img: "../../assets/o2.jpg" },  
      { img: "../../assets/o3.jpg" },  
      { img: "../../assets/h1.jpg" },   
      { img: "../../assets/h2.jpg" },
      { img: "../../assets/h3.jpg" },      
    ];  
    
    this.slideConfig = {  
      "slidesToShow": 3,  
      "slidesToScroll": 3,  
      "dots": false,  
      "infinite": true ,
      "autoplay":true,
      "prevArrow": false,
      "nextArrow": false,
      "responsive": [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    } 
  }
  data: any =
  [
    {
      "parentName": "Q // Will there be a Pre-Sale ?",
      "childProperties":
        [
          { "propertyName": "Yes, there will be a total supply of 1500 for the Pre-Sale on 27th February 2022 12:30 PM, Eastern Time (ET)." },
 
        ]
    },
    {
      "parentName": "Q // What will be the price for Pre-Sale ?",
      "childProperties":
        [
          { "propertyName": "0.25 ETH + Gas." },

        ]
    },
    {
      "parentName": "Q // When is the public mint?",
      "childProperties": 
        [
          { "propertyName": "Public mint is on 28th February 2022 01:00 PM, Eastern Time (ET)." },
        ]
    },
    {
      "parentName": "Q // What will be the price for public sale ?",
      "childProperties":
        [
          { "propertyName": "0.2 + Gas." },
         
        ]
    }
    

   
  ]

  toggleAccordian(event: { target: any; }, index: string | number) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

}
