// Node.js > Nest.js > Desaclopando camadas no NestJS > Gateways de Criptografia

export abstract class HashComparer {
  abstract compare(plain: string, hash: string): Promise<boolean>
}