import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {

  @Input() title: string = "Default Angular App"; // Accept input for the title
  @Input() buttonDisabled: boolean = false; //

  // title: string = "My Angular App2";
  // buttonDisabled: boolean = false;

  userName: string = "";

  onButtonClick() {
    alert("Button clicked!");
    this.buttonDisabled = true;
    this.title = "angular is easy";
  }
}
