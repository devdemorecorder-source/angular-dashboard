import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SystemMetric {
  timestamp: Date;
  cpuUsage: number;
  memoryUsage: number;
  activeRequests: number;
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  private metricsSubject = new BehaviorSubject<SystemMetric>({
    timestamp: new Date(),
    cpuUsage: 24.5,
    memoryUsage: 512,
    activeRequests: 120
  });

  public metrics$: Observable<SystemMetric> = this.metricsSubject.asObservable();

  constructor() {
    this.startMockStream();
  }

  private startMockStream(): void {
    interval(3000).pipe(
      map(() => ({
        timestamp: new Date(),
        cpuUsage: parseFloat((Math.random() * 40 + 10).toFixed(2)),
        memoryUsage: Math.floor(Math.random() * 200 + 400),
        activeRequests: Math.floor(Math.random() * 50 + 100)
      }))
    ).subscribe(metric => this.metricsSubject.next(metric));
  }

  public getCurrentMetrics(): SystemMetric {
    return this.metricsSubject.getValue();
  }
}