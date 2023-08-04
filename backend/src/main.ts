import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors();

	app.setGlobalPrefix('api');

	// Configuración de SWAGGER
	const options = new DocumentBuilder()
		.addBearerAuth()
		.setTitle('U-Know API')
		.setDescription('Documentation of U-Know platform API')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);

	// Configuración del ENDPOINT de la documentación de la API en /docs
	SwaggerModule.setup('docs', app, document);

	// Configuración de la validación de los tipos en los DTOs
	app.useGlobalPipes(new ValidationPipe({
		whitelist: true,
		forbidNonWhitelisted: true
	}));
	await app.listen(3000);

	// await app.listen(process.env.PORT);
}
bootstrap();
