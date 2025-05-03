import { Controller, Get, Param } from '@nestjs/common';
import { TrafficService } from './traffic.service';

@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @Get(':url')
  async getTraffic(@Param('url') url: string) {
    return this.trafficService.getTrafficData(url);
  }
}
