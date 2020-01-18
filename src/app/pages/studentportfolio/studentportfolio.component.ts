import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../../service/student-list.service';



@Component({
  selector: 'app-studentportfolio',
  templateUrl: './studentportfolio.component.html',
  styleUrls: ['./studentportfolio.component.css']
})
export class StudentportfolioComponent implements OnInit {
  maxvalueClass;
  maxvalueHome;
  maxvalueSummary;


  public studentList: any = [];
  constructor(
    public studentl: StudentListService
  ) {
    this.sList();
  }

  ngOnInit() {
  }
  public sList() {
    this.studentl.getsudentList().subscribe(
      result => {
      this.studentList = result;
    });
  }

  public maxValueClass() {
    if (this.maxvalueClass > 10) {
      this.maxvalueClass = '';
    }
  }

  public maxValueHome() {
    if (this.maxvalueHome > 10) {
      this.maxvalueHome = '';
    }
  }

  public maxValueSummary() {
    if (this.maxvalueSummary > 10) {
      this.maxvalueSummary = '';
    }
  }
}
