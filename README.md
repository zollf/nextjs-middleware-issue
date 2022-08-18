# nextjs-middleware-issue

Seems to be a issue with build ids and using middleware upon revalidation of stale data.

## Steps to reproduce
```
Delete src/.next # if exists
npm run build && npm start
Open: localhost:3000/test

Terminate server

npm run build && npm start
Open: localhost:3000/test
```

Console shows: `Error: Failed to load static props`.

There are also failed network requests.
