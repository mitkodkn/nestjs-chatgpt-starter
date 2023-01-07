import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ChatGPTService implements OnModuleInit {
  async onModuleInit() {
    const chatgpt = await import('chatgpt');
    console.log(chatgpt);
  }
}
