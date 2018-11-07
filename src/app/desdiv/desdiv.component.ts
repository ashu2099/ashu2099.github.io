import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-desdiv",
	templateUrl: "./desdiv.component.html",
	styleUrls: ["./desdiv.component.scss"]
})
export class DesdivComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	prevent($event) {
		$event.preventDefault();
	}
}
