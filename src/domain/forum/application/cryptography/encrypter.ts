// Node.js > Nest.js > Desaclopando camadas no NestJS > Gateways de Criptografia

export abstract class Encrypter {
  abstract encrypt(payload: Record<string, unknown>): Promise<string>
}