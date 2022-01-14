import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  

  constructor(private router: Router, private auth : AuthServiceService) { }

  ngOnInit(): void {
  }

  onLoadServers() {
    // complex code that connects to a backend
   
    // navigation to Servers page
    this.router.navigate(['/servers'])
  

}

onLoadServer(id:number) {
  // complex code that connects to a backend
 
  // navigation to Servers page
  this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '8' }, fragment: 'loading' })


}

onlogin() {
  this.auth.login();
}

onlogout() {
  this.auth.logout();
}

}