import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent},
        { path: "home", component: HomeComponent}
      ],
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
