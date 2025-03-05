import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecipesService {
  constructor(private config: ConfigService) {}

  async findAll({ i, a, c }: { i: string; a: string; c: string }) {
    try {
      if (i || a || c) {
        const filterStr = i ? `i=${i}` : a ? `a=${a}` : `c=${c}`;

        const response = await fetch(
          `${this.config.get('API_URL')}/filter.php?${filterStr}`,
        );

        const filteredRecipes = await response.json();
        return {
          msg: 'Filtered recipes',
          data: filteredRecipes,
        };
      }

      const response = await fetch(
        `${this.config.get('API_URL')}/search.php?s=`,
      );

      const allRecipes = await response.json();

      return {
        msg: 'All recipes',
        data: allRecipes,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findById(id: string) {
    try {
      const response = await fetch(
        `${this.config.get('API_URL')}/lookup.php?i=${id}`,
      );
      const recipeById = await response.json();

      return {
        msg: 'Recipe by id',
        data: recipeById,
      };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }
}
