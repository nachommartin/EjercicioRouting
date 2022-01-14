import { Component, OnInit } from '@angular/core';
import { ServersService } from '../server-service.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //this.router.navigate(['servers'] , { relativeTo: this.route }); Para comprobar que se rompe la app
    this.router.navigate(['/servers'] )

  }

}