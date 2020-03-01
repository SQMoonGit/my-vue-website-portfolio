import {Forecast} from '@/model/forecast';

export class FutureForecast {
  public forecastList!: Forecast[];
  public message!: number;
  public forecastCount!: number;
  public code!: string;
  public city!: object;

  constructor() {
  }
}
