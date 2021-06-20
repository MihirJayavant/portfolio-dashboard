import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomepageComponent } from './homepage/homepage.component'

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
      },
      {
        path: 'calculator',
        loadChildren: () => import('./dashboard/calculators.module').then(m => m.CalculatorsModule),
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
