import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css'
})
export class MyPageComponent {

}
