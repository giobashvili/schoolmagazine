import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { StudentListService } from '../../service/student-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public klass: any = [];
  constructor(
   public dash: DashboardService
    //public student: StudentListService
  ) {
     this.dashboard1();
    //this.list();
  }

  ngOnInit() {
  }
  public dashboard1() {
    this.dash.getDashboard().subscribe(
      result => {
        this.klass = result['result'];
      }
    );
  }
 /*public list() {
   this.student.getsudentList().subscribe(
     result => {
       this.klass = result;
     }
   );
 }*/
}

