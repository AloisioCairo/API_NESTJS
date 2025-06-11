import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from 'generated/prisma'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
        log: ['warn', 'error'],
        })
    }

    onModuleInit() {
        console.log('Conectado...');
        return this.$connect()
    }

    onModuleDestroy() {
        console.log('Desconectado...');
        return this.$disconnect()
    }
}