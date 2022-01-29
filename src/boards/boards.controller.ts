import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.BoardsService.getAllBoards();
  }
}
