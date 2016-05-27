$(function(){

	var source   = $("#dialog-content").html(),
		template = Handlebars.compile(source),
		context,
		html;

	$( "#dialog" ).dialog({ autoOpen: false, 
		dialogClass: "help-tip", 
		width: "60%",
		close: function( event, ui ) {
			$("#dialog").empty();
		}
	});

	$( "#tdd-link" ).click(function() {
		context = {	title: "Test Driven Development", 
					body: "add a test, get it to fail, and write code to pass the test",
					list: [
						{ item: "Think about what you want to do." },
						{ item: "Think about how to test it." },
						{ item: "Write a small test. Think about  the desired API." },
						{ item: "Write just enough code to fail the test." },
						{ item: "Run and watch the test fail. " },
						{ item: "Write just enough code to pass the test" },
						{ item: "Run and watch all of the tests pass." },
						{ item: "If you have any duplicate logic, or inexpressive code, refactor to remove duplication and increase expressiveness -- this includes reducing coupling and increasing cohesion." }, 
						{ item: "Run the tests again, you should still have the Green Bar" },
						{ item: "Repeat the steps above until you can't find any more tests that drive writing new code" }
					]
				};
		html = template(context);
		$("#dialog").append(html);
  		$( "#dialog" ).dialog( "open" );
	});

	$( ".ci-link" ).click(function() {
		context = {	title: "Continuos Integration", 
					body: "<p>Fasted automated feedback on the <b>correctness</b> of your application every time there's a change to code</p><p><b>integrate early and often</b></p><p><h5>Continuous Integration XP - From Jez Humble - Continuos Delivery</h5><p>if regular integration of your codebase is good, why not do it all the time? In the context of integration, 'all the time' means every single time somebody commits any change to the version control system."
				};
		html = template(context);
		$("#dialog").append(html);
  		$( "#dialog" ).dialog( "open" );
	});

	$( "#cdel-link" ).click(function() {
		context = {	title: "Continuos Delivery", 
					body: "<p>Fasted automated feedback on the <b>production readiness</b> of your application every time there's a change - <u>to code</u>, <u>infrastructure</u>, or <u>configuration</u></p><p><b>software is always deployable</b></p>"
				};
		html = template(context);
		$("#dialog").append(html);
  		$( "#dialog" ).dialog( "open" );
	});

	$( "#cdep-link" ).click(function() {
		context = {	title: "Continuos Deployment", 
					body: "<p><b>deploy as the final stage of CI</b></p>"
				};
		html = template(context);
		$("#dialog").append(html);
  		$( "#dialog" ).dialog( "open" );
	});

});