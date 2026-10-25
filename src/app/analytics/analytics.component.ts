import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { Observable } from 'rxjs';
import { MetricsService, SystemMetric } from '../services/metrics.service';

@Component({
  selector: 'app-analytics',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // <-- Add CommonModule here to enable async, date, and ngIf
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  metrics$!: Observable<SystemMetric>;

  constructor(private metricsService: MetricsService) {}

  ngOnInit(): void {
    this.metrics$ = this.metricsService.metrics$;
  }
}