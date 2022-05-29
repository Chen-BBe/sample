# GLX: Interview Project

## Overview

This repository is a project given to engineer candidates at GLX. It is made up of multiple tasks and subtasks - each task varies in difficulty, and has subtasks that may be completed by the candidate, depending on their skill and experience level. While the project has a wide range of tasks to complete, candidates will be directed to complete tasks depending on their intended role - nobody is expected to do everything.

## Instructions

As a candidate, you should have received a link to this repository, which has you added as a temporary member. Your access to this repository will expire at the time directed by your interviewer, who will also have provided you with a list of the tasks you should complete.

### Setup

To start, you should:

1. Ensure you have a working development setup
   1. This repository should work with Linux, Windows or OSX
   1. We typically use [VSCode](https://code.visualstudio.com/), but use what you're comfortable with
   1. Install [NodeJS `16.x`](https://nodejs.org/en/), we'd recommend using [NVM](https://github.com/nvm-sh/nvm)
   1. Install [Git](https://git-scm.com/)
1. Create a GitLab account (or use your existing account)
1. Clone this repository to your local development computer
1. Run `yarn` to install dependencies

### Development

To develop, you'll want to run the project in watch mode (`yarn start`). This will automatically rebuild the project for you as you modify files.

To run tests, you can use `yarn test`.

To create a production build, you can use `yarn build`.

To perform a one-off run of E2E tests, you can use `yarn e2e`. To open Cypress for test writing, use `cd @app/e2e; yarn cy:open`.

### Completing Tasks

For each task that you've been given, you should aim to satisfy the requirements as fully as you are able. We recommend completing each task in a seperate Git branch, and submitting a Merge Request once the task is completed. Hence, you should follow the below flow (approximately):

1. Create a Git branch called `task/<id>` e.g. `task/frontend-2`
1. Make your changes / write your code
1. Commit and push your changes
1. Create the merge request against the repository on GitLab

In the event that you have dependent code (maybe you wrote common / shared libraries), you can create a branch off your dependent branch. Please ensure you mark your merge request as dependent on the original merge request.

## Tasks

All tasks are available in this project's issues list. Each task is weighted by its approximate difficulty / time spend. You can feel free to do as many tasks as you like - but we'll generally only ask you to do a subset that we feel are important to the role you're applying for.

To start, go to `Issues` and filter the list by label, using the appropriate label for the position you're applying for (e.g. S-FS = Senior Full-Stack).
