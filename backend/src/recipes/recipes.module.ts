import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
