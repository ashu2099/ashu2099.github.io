import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-webdiv",
	templateUrl: "./webdiv.component.html",
	styleUrls: ["./webdiv.component.scss"]
})
export class WebdivComponent implements OnInit {
	public projects = [
		{
			name: "Forecaster",
			details:
				"An AngularJS app that derives data from an API and lets you know the weather forecast in your city up to 5 days.",
			imageurl: "assets/resources/forecaster.webp",
			url: "https://ashu2099.github.io/Web-Projects/Forecaster",
			tech: "AngularJS, JavaScript, HTML5, CSS3, Jquery"
		},
		{
			name: "MakeMyNotes",
			details:
				"A Responsive, Mobile-First E-commerce website for books created with instamajo.com and CC-Avenue as payment gateway.",
			imageurl: "assets/resources/mmn.webp",
			url: "https://ashu2099.github.io/Web-Projects/MakeMyNotes",
			tech: "SEO, Jquery, Parallax, JavaScript, Bootstrap3, HTML5, CSS3"
		},
		{
			name: "The Freelancers' Nest",
			details:
				"A Mobile-first Responsive Website which focuses on peer-to-peer contracts for Companies and Independent freelancers.",
			imageurl: "assets/resources/fln.webp",
			url:
				"https://ashu2099.github.io/Web-Projects/TheFreelancersNest/freenest.html",
			tech: "HTML, CSS3, Bootstrap3, Javascript, jQuery,PHP, mySQL"
		},
		{
			name: "Weight On Planet",
			details:
				"An Android application which calculates the weight of a person on other planets using the person's current weight.",
			imageurl: "assets/resources/wop.webp",
			url: "https://github.com/ashu2099/AndroidProjects",
			tech: "Android, Java, XML"
		}
	];

	constructor() {}

	ngOnInit() {}

	stopRedir($event) {
		$event.preventDefault();
	}
}
