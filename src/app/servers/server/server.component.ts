import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../interfaces/server';
import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { ServersService } from '../server-service.service'; 
import { Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //const id = +this.route.snapshot.params['id'];
    //this.server = this.serversService.getServer(id);
    //this.route.params.subscribe((params: Params) => {
      //this.server = this.serversService.getServer(+params['id']);
    //});

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}