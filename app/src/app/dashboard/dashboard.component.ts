import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() {
    console.log('Dashboard on login');
  }

  ngOnInit(): void {
    console.log('Dashboard ngOnInit');
  }

}
