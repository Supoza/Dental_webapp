const https = require('https');
https.get('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop', (res) => {
  console.log(res.statusCode);
});
