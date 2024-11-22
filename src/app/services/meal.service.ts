import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available globally
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

  constructor(private readonly http: HttpClient) {}

  // Fetch meals from the API
  getMeals(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
