/* globals MockServer, MockSocket */

define('mock-socket/server', [], function() {
  "use strict";

  return {
    'default': MockServer
  };
});

define('mock-socket/websocket', [], function() {
  "use strict";

  return {
    'default': MockSocket
  };
});
