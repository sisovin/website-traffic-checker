export interface TrafficData {
  visits: number;
  uniqueVisitors: number;
  pageViews: number;
  bounceRate: string;
  averageTimeOnSite: string;
}

export interface TrafficResponse {
  data: TrafficData;
  message: string;
}
