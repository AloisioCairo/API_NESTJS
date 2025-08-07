// Node.js > Nest.js > Desaclopando camadas no NestJS > Gateways de Criptografia

import { Student } from '../../enterprise/entities/student'

export abstract class StudentsRepository {
  abstract findByEmail(email: string): Promise<Student | null>
  abstract create(student: Student): Promise<void>
}