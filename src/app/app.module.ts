import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth-service.service';
import { ServersService } from './servers/server-service.service';
import { CanDeactivateGuard } from './servers/edit-server/can-component-deactivate';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ServersModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService,
              AuthServiceService,
              ServersService,
              CanDeactivateGuard,
              ServerResolverService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
