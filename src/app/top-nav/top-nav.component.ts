import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    trigger('collapse',[
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed', style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //show:boolean = false;
  collapse:string = "closed";

  toggleCollapse(state:boolean){
    //this.show = !this.show
    if(state == null){
    this.collapse = this.collapse == "open" ? "closed" : "open";
    } else {
      this.collapse = state ? "open" : "closed";
    }
  }

  closeMenu(){
    this.collapse = "closed";
  }

}
