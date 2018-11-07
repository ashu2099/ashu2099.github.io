import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-firstdiv",
	templateUrl: "./firstdiv.component.html",
	styleUrls: ["./firstdiv.component.scss"]
})
export class FirstdivComponent implements OnInit {
	constructor() {}
	ngOnInit() {}

	scroll($event, varo) {
		document.getElementById(varo).scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
	}
}
