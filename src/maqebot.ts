import { NestFactory } from '@nestjs/core';
import { CliModule } from './cli/cli.module';
import { CliService } from './cli/cli.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CliModule);
  const cliService = app.get(CliService);

  const command = process.argv[2];
  if (!command) {
    console.error('Please provide a command string as an argument.');
    process.exit(1);
  }

  const result = cliService.executeCommands(command);
  console.log(`X: ${result.x} Y: ${result.y} Direction: ${result.direction}`);

  await app.close();
}

bootstrap();
