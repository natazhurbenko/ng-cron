import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Segment, CoreService } from '@sbzen/core';

import { QuartzCronService } from './../../cron.service';
import { TabSingleSegmentComponent } from './../tab-single-segment.component';

@Component({
	selector: 'quartz-cron-hour',
	templateUrl: './hour.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourComponent extends TabSingleSegmentComponent {
	hourCodes = this.coreService.getList(Segment.hours, true);
	hours = this.coreService.getList(Segment.hours);

	constructor(
		private coreService: CoreService,
		quartzCron: QuartzCronService
	) {
		super(Segment.hours, quartzCron);
	}
}