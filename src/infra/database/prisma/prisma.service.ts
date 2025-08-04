import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'

import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from 'generated/prisma'

// Classe que faz a conexão do PRISMA com o banco de dados
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({ // Esse "super", chama o constructor da class "PrismaClient"
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