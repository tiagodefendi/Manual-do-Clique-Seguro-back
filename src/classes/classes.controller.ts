import { Controller, Post, Get, Body, UseGuards, Headers } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    // O controlador pode ser expandido com endpoints conforme necessário
}
