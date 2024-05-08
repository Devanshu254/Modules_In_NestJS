import { Module } from '@nestjs/common';

@Module({})
export class UserModule {
    constructor() {
        console.log("This is user module created by nestcli.")
    }
}
