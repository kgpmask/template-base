# template-base
Base for the Templating WebDev task

# 
Konnichiwa. Welcome to the Templating task. I know that this repository looks scary, but it's pretty easy to use. Here are the instructions which you would need while working on this. 

### Initial setup
Before you start working on it, here are some things you need to do
- Install Node.js (the templating engine and your app will be on Node after all)
- Change the directory to the directory of the repo
- Run the following command `npm install` on your terminal (Command Prompt, PowerShell, Linux Terminal, etc.)
- Start your app by using the command `npm run dev` on the terminal.

You should be able to access your app when you go to [localhost:9027](http://localhost:9027/). When you first visit the link, you should be able to see **MASK** in the middle of the page.

#
### Working on the repository

In the `templates` folder, you should be able to see the `_base.njk` file. That is where the majority of your page design which you want to display over most pages will be there (like navbar, footer, base styling. etc.)

In the `src` folder, there are two files in the beginning: `index.js` and `handler.js`. The first file contains everything that's needed for the app to run and you probably do not need to tinker with it (unless you are genuinely interested, then you're welcome to play with it and change ports and whatnot.) The main file you guys will be working on is `handler.js`. It basically tells your app which page to display for a given address.

#
### The task
- Firstly, you will be make a page design in `_base.njk`. The design should contain some elements which one will see over all pages, like the navbar, footer, background, color scheme, fonts, etc. 
- For every page you make, you will do these two things:
	- You will be making new njk files and using `_base.njk` as your base file, while adding your page-specific content to the same. 
	- In `handler.js`, you will be adding the address of the page and it's corresponding file's path. The format will be: `app.get(address_to_page, (req, res) => res.render(path_of_file));` Note that the address mentioned will be after `localhost:9027` and the path of the page is inside the `templates` folder.
#
Here's the WebDev team hoping to see a great response from you guys. All the best, folks. 