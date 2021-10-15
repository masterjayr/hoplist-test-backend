import { Module } from '@nestjs/common';
import { LocationModule } from './modules/locations/location.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
  }),
  MongooseModule.forRoot(configuration().database.test, {
    connectionFactory: (connection) => {
        return connection;
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}),
    LocationModule
  ],
})
export class AppModule {}
