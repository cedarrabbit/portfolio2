'use strict';

describe('Directive: year', function() {
  beforeEach(module('portfolio2App'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<year></year>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the year directive');
  }));
});
