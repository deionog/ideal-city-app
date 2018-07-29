import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { Router } from '@angular/router';
import { UserService } from '../services';
import { Observable } from 'rxjs';

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

  isLoggedIn: Observable<boolean>;
  collapse:string = "closed";

  constructor(private router: Router, private userService: UserService) {
    console.log("enter constructor");
    this.isLoggedIn = this.userService.isAuthenticated.take(1);
    this.userService.isAuthenticated.take(1).subscribe(data=>console.log(data));
   }

  ngOnInit() {
    console.log(this.userService.getCurrentUser());
  }

  toggleCollapse(show?:boolean){
    if(show == null){
    this.collapse = this.collapse == "open" ? "closed" : "open";
    } else {
      this.collapse = show ? "open" : "closed";
    }
  }

  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}
