// Node.js > Nest.js > Desaclopando camadas no NestJS > Gateways de Criptografia
export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}