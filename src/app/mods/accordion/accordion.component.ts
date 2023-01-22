import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent {
  openedItemIndex = 0
  @Input() items = [{ title: "", description: "" }]


  onClick(index: number) {
    if (this.openedItemIndex == index) {
      this.openedItemIndex = -1
    }
    else {
      this.openedItemIndex = index;
    }
  }
}
