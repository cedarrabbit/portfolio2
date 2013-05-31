'use strict';

portfolio2App.directive('year', function() {
	var years = [];

	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			// ENSURE THAT ONLY ONE INSTANCE OF A DATE IS DISPLAYED IN THE TIMELINE
			var short_year = scope.project.date.substr(2,3);

			if(years.indexOf(short_year) < 0) {
				years.push(short_year);
				element.text(short_year)
			}
		}
	};
});
