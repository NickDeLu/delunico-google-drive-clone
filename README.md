# https://delunico-drive.netlify.app/

A React.js web app that implements file storage from the google firebase API with user authentication. File directories can store uploaded files saved to your account and can later be downloaded.

## Technologies Incorporated
<ul>
  <li>ReactJS Framework</li>
  <li>Node.js Runtime Environment</li>
  <li>Bootstrap</li>
</ul>

## Firebase
<ul>
  <li><b>Database: </b> Database is hosted on google firebase and accessed from its api </li>
  <li><b>Authentication: </b> Users emails and passwords are stored in the datbase </li>
  <li><b>Password Recovery: </b> Users can request the app to email them a new password to regain access to their account, afterwhich they may change it to their liking</li>
  <li><b>Sharing: </b>Users may share download or viewing links of their files to others if they wish</li>
</ul>

## Security
<ul>
 <li><b>Protection: </b>User's data is protected by incorporating HTTPS SSL certificates</li>
 <li><b>Encryption:</b> All passwords are encrypted using a hash algorithm and are stored as a hash in the database</li>
 <li><b>Authorization:</b> Users may not edit or delete other user's filespace</li>
 </ul>
 
## Languages
<ul>
  <li>Node.js</li>
  <li>Typescript</li>
  <li>HTML + CSS</li>
  <li>Go</li>
</ul>

## Hosting
This project was hosted on the free heroku web server. All commits and updates to this project were performed using the heroku CLI and bash interface.

## Design Patterns
<ul>
  <li>MVC design pattern</li>
  <li>Restful Service Layer</li>
  <li>Single Page Application (SPA)</li>
</ul>

## Features

#### CRUD: ####
<ul>
  <li>Files of many types may be uploaded. </li>
  <li>Directories and subdirectories can be created to better organize files</li>
  <li>Authenticated users may update their account information as required </li>
</ul>
