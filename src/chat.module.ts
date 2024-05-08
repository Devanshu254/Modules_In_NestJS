import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [Feature3, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
    constructor() {
        console.log("ChatModule");
    }
}
