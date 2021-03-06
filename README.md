# React Blog

The application is simple, it is a CRUD of plain text.

### Auth
To enter, google credentials are required. So you need a google account to enter.

### Routes
`/dashboard` : It is the main page, where you can see the list of all posts.

`/create` : It is the page where the markdown editor is displayed, and you can start writing. It is recommended that you use a title, in the title input and write it again in textarea in markdown.

`/edit/:id` : It is where you can edit and / or delete any post.

`/:username/` : username is a required parameter to search the database. In this address are public posts available.

`/:username/:id` : username and id are parameters required to do the search. In this address a single post is shown (required according to the parameters).

[Demo here](https://react-blog.now.sh/)

![Imgur](https://i.imgur.com/vk9RuFJ.gif)


### Development
  To use this project you just have to clone the repository.

  1. `$ git clone https://github.com/loconluis/react-blog.git`
  2. `$ cd react-blog`
  
  You will have to create a `config.js` file in the firebase folder, with the credentials of a firebase project.

  later just run

  3. `$ yarn install`
  4. `$ yarn start`

code with ♥ by [@LoconLuis](https://twitter.com/LoconLuis) 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).