import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Req,
  Res,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { AddEventDto } from 'src/domain/dto/event/add-event.dto';
import { IEventService } from 'src/domain/interfaces/services/ievent.service';
import { EventService } from 'src/services/event.service';

@Controller('events')
export class EventController {
  constructor(
    @Inject(EventService) private readonly _eventService: IEventService,
  ) {}

  @Post()
  async Add(@Body() request: AddEventDto, @Res() response: Response) {
    request.date = new Date(request.date);
    const event = await this._eventService.addAsync(request);
    response.json({ data: event });
    response.status(201);
  }

  @Delete(':id')
  async Delete(@Param('id') id: string, @Res() response: Response) {
    await this._eventService.deleteAsync(id);
    response.status(200);
  }

  @Get()
  async GetAll(@Res() response: Response) {
    const events = await this._eventService.getAllAsync();
    response.json({ data: events });
    response.status(200);
  }
}
