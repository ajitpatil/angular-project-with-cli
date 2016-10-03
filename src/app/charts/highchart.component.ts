import { Component } from '@angular/core';

@Component({
    selector: 'simple-chart',
    template: `
        <chart [options]="options"></chart>
    `
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            colors: ['#058DC7', '#50B432', '#ED561B'],
            series: [{
                data: Array.from(new Array(100), (x,i) => i),
            }]
        };
    }
    options: Object;
}
