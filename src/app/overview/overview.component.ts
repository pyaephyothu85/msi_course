import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  // title: string = 'Variable overview component';

  constructor(private mainservice: MainService) {}

  courses = this.mainservice.courses;

  ngOnInit(): void {}
}
