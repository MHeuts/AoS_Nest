import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { ModelsService } from './models/models.service';

@Module({
  controllers: [AppController],
  providers: [AppService, ModelsService],
  imports: [UnitsModule],
})
export class AppModule {}
