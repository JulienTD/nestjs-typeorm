import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class HelloService {
  constructor(private connection: Connection) {}

  public getHello() {
    return 'Hello World!';
  }
}
