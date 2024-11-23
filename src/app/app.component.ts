import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MyPageComponent } from "./my-page/my-page.component";
import { DataService } from "./services/data.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MealService } from "./services/meal.service";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users: string[] = [];
  newUser: string = "";
  meals: any[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly mealService: MealService
  ) {}

  ngOnInit(): void {
    // Fetch users when the component initializes
    this.users = this.dataService.getUsers();
    this.fetchMeals();
  }

  fetchMeals(): void {
    this.mealService.getMeals().subscribe(
      (data) => {
        this.meals = data.meals || []; // Handle empty or null responses
      },
      (error) => {
        console.error("Error fetching meals:", error);
      }
    );
  }

  addUser(): void {
    if (this.newUser) {
      this.dataService.addUser(this.newUser);
      this.newUser = ""; // Clear the input field
      this.users = this.dataService.getUsers(); // Refresh the user list
    }
  }

  title = "my-angular-project";
}
