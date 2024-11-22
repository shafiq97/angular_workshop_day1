import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isSuccess: boolean = false; // Toggle this to see class changes
  isVisible: boolean = false;
  items: string[] = ['Angular', 'React', 'Vue'];
}
