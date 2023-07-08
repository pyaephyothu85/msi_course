import { Component, OnInit } from '@angular/core';
import {MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

 

   
    courseId: any;
    course: any;
    courses = this.mainService.courses
  
    ngOnInit(): void {
      this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
      this.course= this.courses.find(x=> x.id == this.courseId);
     
    }
  }
  
 
 

  



