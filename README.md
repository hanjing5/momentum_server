#### Database

`bin/www.js` has `mongoose.connect('mongodb://localhost/momentum');` on line 12

change that to point to a remote mongodb instance. 

#### Email endpoint  

`POST /email` with payload 

`{"email":"<email>","data" }`

install dependency is `npm install -d`

run the app with `npm start`