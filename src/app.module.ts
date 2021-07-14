import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloController } from './controllers/hello.controller';
import { HelloService } from './services/hello.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT as string, 10),
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
      entities: [__dirname + '/entity/**/*.ts', __dirname + '/entity/**/*.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}
