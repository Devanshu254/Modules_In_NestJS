import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { OrderModule } from './orders.module';
import { UserModule } from './users.module';


@Module({
  imports: [UserModule, OrderModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log("RootModule");
  }
}
