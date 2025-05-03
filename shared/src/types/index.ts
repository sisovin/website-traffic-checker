export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthPayload {
  userId: string;
  token: string;
}

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
