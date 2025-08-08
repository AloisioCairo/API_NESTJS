// Node.js > Nest.js > Desaclopando camadas no NestJS > Rotas privadas por padrão

import { SetMetadata } from '@nestjs/common'

export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)