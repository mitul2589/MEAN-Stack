import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input('rating') rating1: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating1 * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating1} was clicked!`);
    }

    getRating(): void {
        alert(this.rating1);
    }
}
