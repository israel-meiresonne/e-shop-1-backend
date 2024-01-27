import { Controller, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilterProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Body() filterProductDto: FilterProductDto) {
    return this.productsService.findAll(filterProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
