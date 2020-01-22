import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public user: string;
  constructor(
    private http:HttpClient,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

}
