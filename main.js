chrome.runtime.sendMessage('pogljmkbjeopifdndihpcmblpemnnejj', {
   message: 'testWS'
}, function(reply) {
   console.log('reply: ' +  reply);
});