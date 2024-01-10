### Project Setup

- create next-app
- install shadcn
- import ui components

### Routing Lookup

---

NextJS routing is folder based each folder representing a route name.

Routes have the main page component, the layout of the html skeleton and also handling pages like error, not found or loading.
Look up Route Groups, Project Organization and Safe colocation, Private Folder.
[for reference click here](https://nextjs.org/docs/app/building-your-application/routing)

### Card Wrapper

Import card components from shadcn and create necessary components for the modal skeleton

### Login & Register Form

Using react-form-hook created the form fields and validated the form elements with zod using server actions

### Database and Prisma Setup

Install prisma and prisma client and create db in lib.

Setup .env file with database url and prisma.schema with the provider information. Create schemas for different models.

Then push the database. Install prisma adapter from auth.js. Create the schema generate it and push it

###

Install bcrypt to hash the password during registeration.

Follow this [link](https://authjs.dev/guides/upgrade-to-v5?authentication-method=middleware) here to setup auth, middleware, routes


### terminal

npx create-next-app@latest

npx shadcn-ui@latest init

npx shadcn-ui@latest button

npx shadcn-ui@latest card

npm i react-icons

npx shadcn-ui@latest form

npx shadcn-ui@latest input

npm i -D prisma

npm i @prisma/client

npx prisma init

npx prisma generate

npx prisma db push

npm i @auth/prisma-adapter

npx prisma generate

npx prisma db push

npm install next-auth@beta

npm i @auth/prisma-adapter
