import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user!: User;

  paramSubscription!: Subscription; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'] };
  

  this.paramSubscription= this.route.params
  .subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    }
  );

  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}