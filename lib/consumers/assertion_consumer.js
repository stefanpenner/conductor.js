Conductor.assertionConsumer = function(promise, card) {
  return Conductor.Oasis.Consumer.extend({
    initialize: function() {
      var service = this;
      if (!window.ok) {
        window.ok = function(bool, message) {
          service.send('ok', { bool: bool, message: message });
        };

        window.equal = function(expected, actual, message) {
          service.send('equal', { expected: expected, actual: actual, message: message });
        };

        window.start = function() {
          service.send('start');
        };
      }
      if (!window.ok)       if (!window.ok)       if (!window.ok) 
      promise.resolve();
    },

    events: {
      instruct: function(info) {
        card.instruct(info);
      }
    }
  });
};
