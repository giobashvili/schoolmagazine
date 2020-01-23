import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { StudentListService } from '../../service/student-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public userClasses: any = [];
 public userPupils : any = [];
  constructor(
   public dash: DashboardService,
   public stud : StudentListService
  ) {
     this.classesList();
  }

  ngOnInit() {
  }
  public classesList() {
    this.dash.getUserClasses().subscribe(
      result => {
        this.userClasses = result;
      }
    );
  }

  public onClick(Id: Number){
    this.stud.getPupilByClassId(Id).subscribe(
      result => {
        this.userPupils = result;
      }
    );
  }
}

