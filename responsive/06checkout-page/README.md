<!-- Please update value in the {}  -->

<h1 align="center">Checkout page</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://kirilkaloyanov.github.io/DevChallenges/responsive/06checkout-page/index.html">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/KirilKaloyanov/DevChallenges/tree/main/responsive/06checkout-page">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/0J1NxxGhOUYVqihwegfO">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](https://i.ibb.co/99NGGjR/screenshot.png)

This exercise helped me improve my skill to differentiate between cases where to use grid and where to use flex layout. 

A new thing was how to style a drop-down select input. The difficulty was to simulate adding a placeholder and style it separately. The solution was to add a disabled selected option. Then add a class to the select element with lightgray color to be used for the placeholder option. Then I added darkgrey color to all the options to escape from the lightgrey color of the select element. I also needed to add the lightgrey color to the disabled option. It seemed that it doesn't matter what color I choose. As soon I added option:disabled pseudo-class the color changed to lightgrey. Finally using JS I dinamically removed the placeholder class from the select element once the change event fired.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- HTML
- CSS
- JS

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/0J1NxxGhOUYVqihwegfO) was to build an application to complete the given user stories.


## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

To find the solution for styling the placeholder for the select element I used [ChatGPT](https://chat.openai.com/) with the following questions:
- I have a select element in html. Can I add a placeholder for it?
- How to style the placeholder option?
- Give an example of how I can change the color of the text inside the <select> element when the placeholder is selected?

## Contact

- GitHub [@KirilKaloyanov](https://github.com/KirilKaloyanov)

