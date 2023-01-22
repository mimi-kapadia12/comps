import { Directive , TemplateRef , ViewContainerRef , Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainerRef : ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }

  @Input('appTimes') set Render(times : number)
  {
    for (let i = 0 ; i < times ; i++)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {})
    }
  }
}
