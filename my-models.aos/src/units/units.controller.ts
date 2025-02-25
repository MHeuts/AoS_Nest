import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit } from './interfaces/unit.interface'
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
    constructor (private unitService:UnitsService) {}
    
    @Get()
    async findAll(): Promise<Unit[]> {
        return this.unitService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Post()
    async create(@Body() createUnitDto: CreateUnitDto) {
        this.unitService.create(createUnitDto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateUnitDto:UpdateUnitDto) {
        return `this action updates unit #${id}`;
    }

    @Delete('id')
    remove(@Param('id') id:string){
        return `this action deletes unit #${id}`;
    }


}
