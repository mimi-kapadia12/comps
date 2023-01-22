import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})

export class ViewsHomeComponent {

  stats = [
    { value: '100', label: '# of users' },
    { value: '9000', label: 'Revenue' },
    { value: '50', label: 'Reviews' }
  ];

  items = [
    { image: '/assets/Images/couch.jpeg', title: 'Couch', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { image: '/assets/Images/dresser.jpeg', title: 'Dresser', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  ];

}
