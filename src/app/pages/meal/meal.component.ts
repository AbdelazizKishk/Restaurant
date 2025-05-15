import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RecipesService } from '../../core/services/recipes/recipes.service';
import { Recipes } from '../../shared/interfaces/recipes/recipes';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meal',
  imports: [],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
})
export class MealComponent implements OnInit, OnDestroy {
  private readonly recipesService = inject(RecipesService);
  private readonly activatedRoute = inject(ActivatedRoute);
  mealRecipes: WritableSignal<Recipes[]> = signal([]);
  subscriptionMealRecipes: Subscription = new Subscription();
  ngOnInit(): void {
    this.getMealRecipes();
  }
  getMealRecipes(): void {
    this.subscriptionMealRecipes = this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        const mealname = p.get('mealName')!;
        this.recipesService.getMealrecipes(mealname).subscribe({
          next: (res) => {
            this.mealRecipes.set(res.recipes);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptionMealRecipes.unsubscribe();
  }
}
