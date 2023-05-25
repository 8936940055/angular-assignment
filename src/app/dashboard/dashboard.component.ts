import { Component, OnInit } from '@angular/core';
import { AuthService, Product } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth : AuthService) { }
  dataSource : Product[] = [];
  ngOnInit(): void {

    this.auth.getProduct().subscribe((response) =>{
      if (response)
      {
        this.dataSource = response;
      }
    })
  }

}
