// Node.js > Nest.js > Desaclopando camadas no NestJS > Casos de Uso: Autenticação e Cadastro

import { UseCaseError } from '@/core/errors/use-case-error'

export class StudentAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`Student "${identifier}" already exists.`)
  }
}