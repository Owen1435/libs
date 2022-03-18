import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [],
      uri: 'amqp://localhost:5672',
      enableControllerDiscovery: true,
    }),
  ],
  exports: [RabbitMQModule],
})
export class RmqModule {}
