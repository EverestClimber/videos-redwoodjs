# Technical Interview
Our primary goals for the technical interview are to:
- Understand your approach to coding
- Experience collaborating together

In order to accomplish that, our technical interview consists of two steps:
1. A take home project designed to take between 1 and 2 hours.
1. A follow-up video call reviewing your code and collaborating on further fixes and enhancements.

The main goal for step 1 is for you to get comfortable with this codebase prior to our video call. In the [challenge](#challenge) section below, we've listed some known bugs as well as potential feature enhancements. **We do not expect or want you to do all of the things listed there.**  We suggest starting with a bug fix from section 1 to get rolling and then move onto working on the full stack feature from section 2 that is most interesting to you.

We'll review your code before our video call, and then on the call, we'll discuss your solution and collaborate on additional fixes and features.

# Video sharing app
The code we will be working on implements a basic video sharing application. This app let's you share videos (`url`, `title`, `description`) and then react to videos other people have shared. Currently it only supports showing YouTube urls i.e. `https://www.youtube.com/watch?v=kfVsfOSbJY0`.

# Structure

This is a [RedwoodJS](https://redwoodjs.com/)-based project, which is what we use for our production app. The code is loosely based on the [Redwood Tutorial](https://redwoodjs.com/docs/tutorial/) and uses email/password-based auth.

The app uses [React](https://reactjs.org/) and [Tailwind](https://tailwindcss.com/docs/utility-first) on the frontend, [Node.js](https://nodejs.org/en/docs/) and [GraphQL](https://graphql.org/) for the API, and [Prisma](https://www.prisma.io/docs/) for reading from and writing to a [SQLite](https://www.sqlite.org/index.html) database.

Here are some key directories and files you will want to keep in mind. There are more details are in [Redwood docs](https://redwoodjs.com/docs/tutorial/chapter1/file-structure).
| Path | Purpose |
| - | - |
| [/api/db/schema.prisma](./api/db/schema.prisma) | [Prisma schema](https://www.prisma.io/docs/concepts/components/prisma-schema) which defines the database models |
| [/api/src/graphql/schema.sdl.ts](./api/src/graphql/schema.sdl.ts) | [GraphQL schema file](https://graphql.org/learn/schema/) which defines the API interface |
| [/api/src/services/videos/videos.ts](./api/src/services//videos/videos.ts) | `videos` service where your [GraphQL resolvers](https://redwoodjs.com/docs/graphql#server-side) are implemented |
| [/web/src/Routes.tsx](./web/src/Routes.tsx) | Frontend [Routes](https://redwoodjs.com/docs/router) file |
| [/web/src/components/](./web/src/components) | Frontend [React](https://reactjs.org/) components |
| [/web/src/helpers/](./web/src/helpers) | Frontend helpers (functions, enums, hooks, etc.) |
| [/web/src/layouts/](./web/src/layouts) | Frontend [React](https://reactjs.org/) [Layout](https://redwoodjs.com/docs/tutorial/chapter1/layouts) components |
| [/web/src/pages/](./web/src/pages) | Frontend [React](https://reactjs.org/) [Page](https://redwoodjs.com/docs/tutorial/chapter1/first-page) components |


For reference, here's documentation links you may find helpful
- [README generated by Redwood](./Redwood.md)
- [Redwood](https://redwoodjs.com/docs/index)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/docs/utility-first)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/docs/)
- [Node.js](https://nodejs.org/en/docs/)
- [SQLite](https://www.sqlite.org/index.html)
- [Yarn](https://yarnpkg.com/)

# Setup

## 1. Installing dependencies
If you don't already have Yarn and Node.js installed, here's how we recommend installing them:

### **[NVM](https://github.com/nvm-sh/nvm)**
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
$ nvm install 14.18.0
$ nvm alias default 14.18.0
```

### **Yarn**
Instructions on [installing Yarn](https://yarnpkg.com/getting-started/install)


## 2. Cloning and running the app
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this repo
2. Clone it to your local machine
3. Install deps and setup database
```
cd hiring
git checkout -b <yourname>
echo SESSION_SECRET=putsomeuniquelongstringoftexthereplz > .env
yarn
yarn migrate
```
4. Start the app
```
yarn dev
```

# Challenge
## 0. Sign up
Once you run the app, then do the following:
1. create an account for yourself by opening [/signup](http://localhost:8910/signup) and entering an email and password.
2. Open [/video/new/](http:localhost:8910/video/new) and add your first video(s)

You may it helpful to open two browsers or browser sessions so you can log in as multiple users, but that isn't required.

## 1. Bug Fixes
- [ ] The [Nav](./web/src/components/Nav/Nav.tsx) component should show the currently active link but the logic is broken
- [ ] On the video create page the `description` isn't getting properly persisted to the database
- [ ] Deleting a video does not work.
- [ ] The edit and delete buttons on the video page are different heights

## 2. Full stack Features
- [ ] There is a commented out `imageUrl String?` field on the `Video` model. Uncomment that, run `yarn db:migrate`, and then add support for passing it to both the `createVideo` and `updateVideo` mutations. Return it to the frontend so you can display it as the video thumbnail on the `/videos` page when it has been set
- [ ] Add a support for showing all the videos uploaded by a given user via a query param i.e. `/videos?userId=1` or a dedicated page i.e. `/user/1`
- [ ] Add support for showing all the videos with a given reaction via a query param i.e `/videos?reaction=Rofl` or a dedicated page i.e. `/reaction/Rofl`
- [ ] Add additional `ReactionType` emoji(s).

<!--
## UI Features
- [ ] Use [Tailwind](https://tailwindcss.com/docs/responsive-design) to make the UI responsive
- [ ] Show the `createdAt` timestamp on the video page more readably
- [ ] Support some video host other than YouTube i.e. [Vimeo](https://developer.vimeo.com/player/sdk/basics)
- [ ] Add support for [Markdown](https://github.com/remarkjs/react-markdown) rendering in the video description
-->

## 3. Sharing your code
When you are done working on this challenge:
1. Commit your changes and push the branch to your fork of the repo.
2. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) off of `main` **in your repo**.
3. Follow the calendly link in the email where we sent you this challenge in order to schedule our follow up call. There will be a text field where you can share the url to the PR you just created. If you want to keep the repo private, that's fine, we'll just have you add us as collaborators at the beginning of the call.

# Commands
Here are some common commands we've added that you may be useful

## Run the app
```
yarn dev
```

## Migrate the database
If you make changes to [/api/db/schema.prisma](./api/db/schema.prisma) you will want to run this to sync your database with the schema. If needed it will generate and apply a migration.
```
yarn migrate
```

## Open Prisma studio
This will open a web UI to view and edit the contents of the database
```
yarn studio
```

## Open Prisma console
This will open a web UI to view and edit the contents of the database
```
yarn console
```

## Reset the db
This will wipe / reset the db
```
yarn reset
```

## Generate a component
This will generate a new react component in named `{name}` in [/web/src/components/](./web/src/components)
```
yarn rw g component <name>
```

## Generate a page
This will generate a new react component in named `{name}Page` (with optional `<path>` for the associated route) in [/web/src/pages/](./web/src/pages)
```
yarn rw g page <name> <path>
```

## Adding a frontend dependency
```
yarn workspace web add <dep name>
```

## Adding a backend dependency
```
yarn workspace api add <dep name>
```

## Clean and reinstall deps
In case you run into any issues running the app after installing dependencies, this is worth trying.
```
yarn clean
yarn
```

