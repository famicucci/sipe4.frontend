export class AppError {
  name: string
  message: string
  statusCode: number
  constructor(name: string, message: string, statusCode: number) {
    this.name = name
    this.message = message
    this.statusCode = statusCode
  }
}
