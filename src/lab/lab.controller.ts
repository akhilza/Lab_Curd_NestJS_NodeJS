import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { LabDto } from './dto/lab.dto';
import { LabService } from './lab.service';

@Controller('lab')
export class LabController {
  constructor(private readonly labService: LabService) { }

  @Post('/create')
  async labLab(@Res() res, @Body() labDto: LabDto) {
    try {
        const newLab =
          await this.labService.createLab(labDto);
        return res.status(HttpStatus.OK).json({
          message: 'Lab created successfully',
          newLab,
        });
    } catch (err) {
      console.error(err);
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Lab not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get('getLab/:username')
  async getLab(@Res() response, @Param('username') labUsername: string) {
    try {
      const existingLab = await this.labService.getLabByUsername(labUsername);
      return response.status(HttpStatus.OK).json({
        message: 'Lab found successfully',
        existingLab,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

}
