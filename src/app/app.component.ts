import { Component } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	title = "portfolio";

	@HostListener("window:scroll", [])
	onWindowScroll() {
		try {
			//we'll do some stuff here when the window is scrolled
			let vh = window.innerHeight;
			//ForFirstDiv
			if (window.pageYOffset > 0 * vh) {
				document.getElementById("conti1").classList.remove("rel");
				document.getElementById("conti1").classList.add("relfix");
			} else {
				document.getElementById("conti1").classList.remove("relfix");
				document.getElementById("conti1").classList.add("rel");
			}

			if (window.pageYOffset > 1 * vh) {
				document.getElementById("conti2").classList.remove("rel");
				document.getElementById("conti2").classList.add("relfix");
			} else {
				document.getElementById("conti2").classList.remove("relfix");
				document.getElementById("conti2").classList.add("rel");
			}

			if (window.pageYOffset > 2 * vh) {
				document.getElementById("conti3").classList.remove("rel");
				document.getElementById("conti3").classList.add("relfix");
			} else {
				document.getElementById("conti3").classList.remove("relfix");
				document.getElementById("conti3").classList.add("rel");
			}

			if (window.pageYOffset > 3 * vh) {
				document.getElementById("conti4").classList.remove("rel");
				document.getElementById("conti4").classList.add("relfix");
			} else {
				document.getElementById("conti4").classList.remove("relfix");
				document.getElementById("conti4").classList.add("rel");
			}
		} catch {
			// RANDOM ERROR OCCURS HERE, DOSENT HINDER FUNCTIONALITY
		}
	}
}
