import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class TrafficService {
  constructor(private readonly httpService: HttpService) {}

  async getTrafficData(url: string): Promise<any> {
    const response = await this.httpService.get(`https://api.traffic.com/data?url=${url}`).toPromise();
    return response.data;
  }
}
