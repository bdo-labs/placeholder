
/**
 * Module depenedencies.
 */
var format = require('bdo-labs/format').format;

/**
 * Placeholder directive.
 *
 * Adds a label with the same value as the placeholder attribute
 * of the element in question. This makes it possible to persist
 * the placeholder and use styling to make it a secondary element.
 */
var link = exports.link = function link(scope, el, attrs){
  var wrapperStr = '<div class="placeholder-wrapper"></div>';
  var wrapperEl = angular.element(wrapperStr);
  var labelStr = '<label class="placeholder prestine">%s</label>';
  var labelEl = angular.element(format(labelStr, attrs.placeholder));

  el.wrap(wrapperEl);
  wrapperEl.prepend(labelEl);

  function onchange(){
    if (this.value != '') {
      labelEl.addClass('dirty');
      labelEl.removeClass('prestine');
    }
    labelEl.addClass('focus');
  }
  function onblur(){
    labelEl.removeClass('focus');
  }

  el.bind('keyup focus', onchange);
  el.bind('blur', onblur);
}

var directive = module.exports = function() {
  return {
    restrict: 'A',
    link: link
  };
};

