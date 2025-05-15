import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}
  getMealrecipes(mealname: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}/api/search?q=${mealname}`
    );
  }
}
