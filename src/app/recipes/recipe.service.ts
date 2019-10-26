import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    
    private recipes:Recipe[]=[
        new Recipe('A test recipe','This is simply a test','https://www.imore.com/sites/imore.com/files/field/image/2013/04/my_recipe_book_iphone_screenshots_1.jpg'),
        new Recipe('A test recipe','This is simply a test','https://www.imore.com/sites/imore.com/files/field/image/2013/04/my_recipe_book_iphone_screenshots_1.jpg')
    
      ];  
      getRecipes(){
          return this.recipes.slice();
      }
}