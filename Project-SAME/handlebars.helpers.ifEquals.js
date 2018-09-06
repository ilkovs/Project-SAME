// Compares first value to the second one allowing entering IF clouse if true.
// Otherwise entering ELSE clause if exist.
Handlebars.registerHelper("ifEquals", function(a, b, options) {
  if (a === b) {
    return options.fn(this);
  }

  return options.inverse(this);
});