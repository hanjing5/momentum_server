#### Database

`models/emails.js` has `mongoose.connect('mongodb://localhost/momentum_server');` on line 3

change that to point to a remove mongodb instance. 

#### Email endpoint  

`POST /emails` with payload 

`{"email":"<email>"}`

install dependency is `npm install -d`

run the app with `npm start`