// bio object
var bio = {
	"name" : "Andy Davies",
	"role" : "Web Developer",
	"welcomeMessage" : "(welcome message here)",
	"contacts" : {
		"mobile" : "mobile number here",
		"email" : "1andydavies1@gmail.com",
		"github" : "andavies",
		"stackexchange" : "andydavies",
		"twitter" : "1andydavies1",
		"location" : "Wirral, England"
	},
	"skills" : ["skill1", "skill2 etc.."]
};

// work object
var work = {
	"jobs" : [ // reverse chron order - jobs[0] is most recent
		{
			"employer" : "my current employer",
			"title" : "my current job title",
			"location" : "Warrington, England",
			"dates" : "2013 - 2015",
			"description" : "my job desc"
		},
		{
			"employer" : "my old employer",
			"title" : "my old job titler",
			"location" : "Manchester, England",
			"dates" : "2007 - 2013",
			"description" : "(description here)"
		}
	]
};

// projects object
var projects = {
	"projects" : [
		{
			"title" : "project 1 title here",
			"dates" : "project dates here",
			"description" : "desc here",
			"images" : [
				"image 1",
				"image 2"
		    ]
		},
		{
			"title" : "project 2 title here",
			"dates" : "project dates here",
			"description" : "desc here",
			"images" : [
				"image 1",
				"image 2"
			]
		}
	]

};

// education object
var education = {
	"schools" : [
		{
			"name" : "University of Nottingham",
			"location" : "Nottingham, England",
			"degree" : "BSc (Hons) Physics",
			"dates" : "2003 - 2006",
			"url" : "http://www.nott.ac.uk"
		},
		{
			"name" : "University of Cambridge",
			"location" : "Cambridge, England",
			"degree" : "BA (Hons) Natural Sciences",
			"dates" : "2002 - 2003",
			"url" : "http://www.cam.ac.uk"
		}
	],
	"online courses" : [
		{
			"title" : "CS50 - Introduction to Computer Science and Programming",
			"school" : "Harvard University",
			"dates" : "2015",
			"url" : "http://cs50.harvard.edu"
		},
		{
			"title" : "Front end developer nanodegree",
			"school" : "Udacity, with Google, at&t, Hack Reactor, and GitHub",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

// encapsulate display functions

bio.display = function() {
	// TODO
	// format and append htmlheader name and role
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.Photo_URL);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedStack = HTMLblog.replace("%data%", bio.contacts.stackexchange);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.Welcome_message);
	var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// append details
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedBioPic);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedStack);
	$("#topContacts").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedBioLocation);


	// are there any skills in bio?
	if (bio.hasOwnProperty("skills")) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);
		$("#skills").append(formattedSkills);
	}
}

work.display = function() {
	// TODO
	for (var job in work.jobs) {
		// append new HTMLworkStart
		$("#workExperience").append(HTMLworkStart);
		// format employer and title and append to last
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		// format location, dates, and description, and append
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDesc);
		for (image in projects.projects.images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

education.display = function() {
	// TODO
	// for each school in schools
	for (var school in education.schools) {
		// append new school start
		$("#education").append(HTMLschoolStart);
		// format school details
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		// append details
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolURL);
	}
}

// display objects
bio.display();
work.display();
projects.display();
education.display();
