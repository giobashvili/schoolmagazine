import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../../service/student-list.service';

@Component({
  selector: 'app-studentportfolio',
  templateUrl: './studentportfolio.component.html',
  styleUrls: ['./studentportfolio.component.css']
})
export class StudentportfolioComponent implements OnInit {



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

}
