`title` SPA Note Overview  
`Client->Server:` GET /spa  
`Server-->Client:` HTML  
`Client->Server:` GET main.css  
`Server-->Client:` CSS  
`Client->Server:` GET spa.js  
`Server-->Client:` JS  
`Client-->Client:` spa.js initiates HTTP Request   
`Client->Server:` GET data.json  
`Server-->Client:` JSON  
`note left of Client`   
  redrawNotes() creates DOM elements   
  for each object in the JSON  
`end note`  
  
`note left of Client:` User submits note from form  
`Client->Server:` JS issues POST request to /new_note_spa  
`Server->Server:` Server pushes form data to 'notes'  
`Server-->Client:` Responds with 201 created  
`Client->Client:` JS function appends submitted note to list  
`note left of Client:` new note is simulated locally on the DOM  
