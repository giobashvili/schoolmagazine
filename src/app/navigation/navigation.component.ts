import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {NavigationModel} from '../models/navigation.model';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menuList: NavigationModel[] = [
    { link: 'dashboard', text: 'დაშბორდი' },
    { link: 'users', text: 'ყველა მომხმარებელი' },
    { link: 'blogs', text: 'ბლოგები' },
/*     { link: 'patients', text: 'პახიენტები' },
    { link: 'requests', text: 'მოთხოვნები' },
    { link: 'transactions', text: 'ტრანზაქციები' },
    { link: 'settings', text: 'პარამეტრები' }, */
  ];

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
