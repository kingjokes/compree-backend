import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async testService() {
    const query = await this.prisma.user.create({
      data: {
        name: 'Jokes',
        email: 'pauljokotagba1@gmail.com',
      },
    });

    return query
      ? { status: true, message: 'Inserting done' }
      : {
          status: false,
          message: 'Failed to insert',
        };
  }
}
