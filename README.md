# Preparation
### Frontend

Start frontend: `cd frontend; npm i; npm run dev`


### Backend
server: https://fe-lifecoding-756bf63346ac.herokuapp.com

**Api**

path: `/api/search`, params: q:string

Enhance autocomplete component so that it will show suggestions from the server repsonse. (To check: q=grape)

Response: `json { "results": string[] }`

If q is empty string, then empty array will be returned

# Task:
Implement autocomplete functionality:

On input change fetch data from the backend.
Render result as a list under the input field.

**NOTE**:

No need to use actual Autocomplete component, but instead the goal is to mimic the behavior of it with text input field and rendered list under it.
