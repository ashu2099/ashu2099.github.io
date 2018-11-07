import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
	selector: "app-anchor",
	templateUrl: "./anchor.component.html",
	styleUrls: ["./anchor.component.scss"]
})
export class AnchorComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	scroll($event, varo) {
		document.getElementById(varo).scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		let vh = window.innerHeight;

		if (window.pageYOffset >= 0 * vh && window.pageYOffset < 0.3 * vh) {
			document.getElementById("dot1").classList.add("active");
		} else {
			document.getElementById("dot1").classList.remove("active");
		}

		if (window.pageYOffset >= 0.3 * vh && window.pageYOffset < 1.3 * vh) {
			document.getElementById("dot2").classList.add("active");
		} else {
			document.getElementById("dot2").classList.remove("active");
		}

		if (window.pageYOffset >= 1.3 * vh && window.pageYOffset < 2.3 * vh) {
			document.getElementById("dot3").classList.add("active");
		} else {
			document.getElementById("dot3").classList.remove("active");
		}

		if (window.pageYOffset >= 2.3 * vh) {
			document.getElementById("dot4").classList.add("active");
		} else {
			document.getElementById("dot4").classList.remove("active");
		}
	}
}
