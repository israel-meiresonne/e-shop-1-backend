import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './model/product';
import { FilterProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() filterProductDto: FilterProductDto) {
    return this.productsService.findAll(filterProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
