# Preparation
### Backend
Start backend
`npm i; node server.js`
server: localhost:3001

**Api**

path: `/api/search`, params: q:string

Enhance autocomplete component so that it will show suggestions from the server repsonse. (To check: q=grape)

Response: `json { "results": string[] }`

If q is empty string, then empty array will be returned

### Frontend

Start frontend: `cd frontend; npm i; npm run dev`

# Task:
Implement autocomplete functionality.
On input change fetch data from the backend. Render result as a list.
