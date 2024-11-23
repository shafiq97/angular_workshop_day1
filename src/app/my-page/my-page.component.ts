import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from "@angular/router";
import { RouterModule } from '@angular/router';


@Component({
  selector: "app-my-page",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: "./my-page.component.html",
  styleUrl: "./my-page.component.css",
})
export class MyPageComponent {
  constructor(private readonly router: Router) {}

  navigateToFooter() {
    this.router.navigate(['/footer']);
  }
}
