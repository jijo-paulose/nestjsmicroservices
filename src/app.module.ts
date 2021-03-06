import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    HeroModule,
    MongooseModule.forRoot('mongodb://localhost/nestjsrnd', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
