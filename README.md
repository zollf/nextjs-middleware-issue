# nextjs-middleware-issue

Seems to be a issue with build ids and using middleware upon revalidation of stale data.

## Steps to reproduce

Delete `src/.next` if exists

Run:
```
npm run build && npm start
```

Open: http://localhost:3000/test so that the html will cache in .next/cache

Terminate server

Run again:
```
npm run build && npm start
```

Open: localhost:3000/test

Console shows: `Error: Failed to load static props`. As it is trying to load `_next/data` with a different build id

There are also failed network requests.
