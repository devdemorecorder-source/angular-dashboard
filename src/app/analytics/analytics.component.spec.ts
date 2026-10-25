import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsComponent } from './analytics.component';
import { MetricsService } from '../services/metrics.service';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AnalyticsComponent ], // <-- Use imports for standalone components
      providers: [ MetricsService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the analytics component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to metrics stream', (done) => {
    component.metrics$.subscribe(metrics => {
      expect(metrics).toBeDefined();
      expect(metrics.cpuUsage).toBeGreaterThan(0);
      done();
    });
  });
});