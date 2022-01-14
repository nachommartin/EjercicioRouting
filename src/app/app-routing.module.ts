import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './users/user/user.component'; 
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerComponent } from './servers/server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-component-deactivate';
import { ServerResolverService } from './servers/server-resolver.service';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },

{  path: 'users', component: UsersComponent, children: [
    {path: ':id/:name',    component: UserComponent }
  ]
},
{ path: 'servers', //canActivate:[AuthGuardService], 
  canActivateChild: [AuthGuardService], component: ServersComponent, children: [
  { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard],  resolve: { server: ServerResolverService }},
  { path: ':id', component: ServerComponent },
]
},
{ path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'}},
{ path: '**', redirectTo: '/not-found'},
];


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
