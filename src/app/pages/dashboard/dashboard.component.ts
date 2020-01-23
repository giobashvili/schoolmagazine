import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { StudentListService } from '../../service/student-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public Class: any = [];
  constructor(
   public dash: DashboardService,
   public stud : StudentListService
  ) {
     this.dashboard1();
  }

  ngOnInit() {
  }
  public dashboard1() {
    this.dash.getUserClasses().subscribe(
      result => {
        this.Class = result;
      }
    );
  }

  public onClick(Id: Number){
    this.stud.getPupilByClassId(Id).subscribe(
      result => {
        this.Class = result;
      }
    );
  }
}

