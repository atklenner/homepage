# Easy Custom Homepage

A user friendly customizable homepage. Users have access to a task list, time, date, outside temperature, and custom links. This project was inspired by [Bento](https://github.com/migueravila/Bento) with the main difference being I wanted to make something that didn't require the user to have to fork a repo or learn about Docker.

In order to use it set the homepage of your browser to the link below.

**Link to project:** https://atklenner.github.io/homepage/

![Homepage demo](https://raw.githubusercontent.com/atklenner/atklenner/main/images/homepage-recording.gif)

## How It's Made:

**Tech used:** React, Tailwind, Catppuccin, Vite, OpenWeatherMap API, Geolocation API

This project started with a react template provided by Vite. I made use of React's useContext and useReducer hooks to pass state around between the settings page and the actual task list and links. Tailwind was used to style the app and keep the design consistent across multiple screen sizes. The selectable themes are provided by Catppuccin. The outside temperature is obtained using the OpenWeather API and the Geolocation API provided by the user's browser.

## Optimizations

When I return to this project I would like to improve the task list. I think it would be cool to let the user drag and drop tasks to reorder them as well as be able to edit them after they have been entered.

I might add user accounts so that the task list and links could be kept in sync accross devices, but I think this goes against the spirit of simplicity that I was going for.

## Lessons Learned:

I used this project as a chance to familiarize myself with tools like Vite and pnpm. They are wonderful tools and I will continue to use them in my personal projects for the foreseeable future.

I also used this project as a chance to create my own reusable React components. This helped me keep styles consistent, simplify components by cutting out repeated JSX, and made adding new features much easier.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**GoodGames:** https://github.com/atklenner/goodgames

**Bouncing DVD Logo:** https://github.com/alecortega/twitter-battle

**Sketches:** https://github.com/atklenner/sketches
