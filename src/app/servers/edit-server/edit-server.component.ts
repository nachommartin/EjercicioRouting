import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server';
import { Params } from '@angular/router';
import { CanComponentDeactivate } from './can-component-deactivate';
import { Observable } from 'rxjs';
import { ServersService } from '../server-service.service'; 

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    
    //Primera alternativa
    //console.log(this.route.snapshot.queryParams);
    //console.log(this.route.snapshot.fragment);
    //Segunda alternativa
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    }
    )

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to exit without saving your changes?');
    } else {
      return true;
    }

}

}