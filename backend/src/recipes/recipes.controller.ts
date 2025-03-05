import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  findAll(@Query('i') i: string, @Query('a') a: string, @Query('c') c: string) {
    return this.recipesService.findAll({ i, a, c });
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.recipesService.findById(id);
  }
}
