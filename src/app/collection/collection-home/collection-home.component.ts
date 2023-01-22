import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {

  data = [
    {
      name: "Mansi",
      age: 23,
      job: "developer",  
      employed : true    
    },
    {
      name: "Nihar",
      age: 16,
      job: "Engineer",
      employed : true
    },
    {
      name: "Kusum",
      age: 40,
      job: "Teacher",
      employed : false
    }
  ];

  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" },
    {key : "employed" , label : "Has a job?"}
  ];
}
