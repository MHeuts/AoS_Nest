import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UnitsModule],
})
export class AppModule {}
