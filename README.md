Proper Hapi Boilerplate
==========

Forked from https://github.com/poeticninja/hapi-ninja.git

Hapi Boilerplate

HAPI, HAPI-AUTH-COOKIE, SEQUELIZE, SWIG, GULP, SASS, JQUERY

$ git clone https://github.com/bricks-mortar/nodeboiler.git
$ cd nodeboiler
$ npm install
```

Start the server by running the command:
```
$ node server
```

Run supervisor :
```
$ supervisor -e html,js  server
```

Now all of your server html and js files are being watched and on change the node server gets restarted automatically.

#### Sequelize
This boilerplate is already configured to use MySQL and Sequelize (http://docs.sequelizejs.com/).  Simply start your mysql server (mysqld on mac), create a database, configure your db credentials in server/models/index and you should be able to connect. There are sequelize usage examples in server/models, and more documentation at http://docs.sequelizejs.com/. 

#### Hapi Auth Cookie
This boilerplate is configured to use bcrypt and hapi auth cookie for route authentication. All of the validation logic lives within the server.js file and the server/controllers/user.js file.  

#### Folder Structure
There are two main folders in the stack. The "**public**" folder for front-end (client side) code, and "**server**" folder for server side code.

By having the front-end folder and server side folder be specific, it provides for better consistency when changing projects. This way when you change from a full front-end app (Phonegap), to a front-end and server side app you get to keep the same folder structure. Allowing for better consistency with your stack, projects, and tools.

## Contributers

[See the awesome people!](https://github.com/poeticninja/hapi-ninja/graphs/contributors)

## Credits
Initial boilerplate strucutre and inspiration to Poetic Ninja. Credit goes to all of the open source code that people have made available.

#### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
