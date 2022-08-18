# nextjs-buildid-cache

## Steps to reproduce
```
APP_VERSION=1 npm run build && npm start
Open: localhost:3000/test
Close server
APP_VERSION=2 npm run build && npm start
Open: localhost:3000/test
Errors in network