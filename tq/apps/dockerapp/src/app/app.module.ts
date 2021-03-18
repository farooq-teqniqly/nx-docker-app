import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UiModule } from '@tq/ui';
import { DashboardComponent } from 'libs/ui/src/lib/dashboard/dashboard.component';
import { NavComponent } from 'libs/ui/src/lib/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavComponent, pathMatch: 'full'
  },
  {
    path: '**',
    component: DashboardComponent, pathMatch: 'full'
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
