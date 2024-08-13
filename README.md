# Fullstack Boilerplate (Angular/NestJS)

A backbone for your coding challenge.

## Contents

- [Backend service](app-backend) - a NestJS service with a `/ping` endpoint. Extend with your code.
- [Frontend app](app-frontend) - an Angular app. Extend with your code.
- [E2E test suites](cypress/e2e) - a backend and a frontend Cypress test suites. Extend with your tests.
- 
## Tech Stack

### Backend

- NestJS
- Typescript

#### Additional libs

- Jest (testing)

### Frontend

- Angular
- Typescript

#### Additional libs

- Karma/Jasmine (testing)

### Misc

- Cypress
- GitHub Actions

## Getting started

1. Make sure npm & node are configured on your local env. You can download those distributions for your platform [here](https://nodejs.org/en/download/).

2. Build your app.

```bash
npm install
npm run build # both backend and frontend
npm run build:backend # only backend
npm run build:frontend # only frontend
```

3. Start your app.

```bash
npm install
npm run start # both backend and frontend
npm run start:backend # only backend
npm run start:frontend # only frontend
```

4. Run the Cypress tests.

```bash
npm run test # run project tests under `cypress/e2e`
```

---

Authored by [Alva Labs](https://www.alvalabs.io/).
