import { Controller, Get, Post } from '@nestjs/common';

@Controller('models')
export class ModelsController {
    @Post()
    create(): string {
        return 'This action adds a new model';
    }
    
    @Get()
    findAll(): string {
        return 'This action returns all models';
    }
}