import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  loading = true;
  list = ['YOU’RE NOT ALONE,', 'TOGETHER WE ARE STRONG, WE ARE ONE'];
  constructor(private router: Router) { 
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.loading = false;
      this.router.navigate(["./home"])
  }, 12000);
  }

  ngOnInit(): void {

  }

}
