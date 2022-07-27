# Procyon

- An application to track jobs in an organization.

## Motivation

- This was developed to create a general code base which can be reused in my future projects.
- The key things that I wanted to fulfill here were
  1. A better folder structure
  2. Clean code
  3. Reusable components
  4. A better redux architecture with sagas
  5. Type safety throughout the application with the help of typescript.
  6. Improve the performance and minimizing unnecessary renders throughout the application.

## Performance Optimizations

- Use of useCallback, useMemo hooks and React.memo
- Use of reselect library to work with redux
- Lazy loading and dynamic routing
- Avoid blocking the main thread

## Libraries

- [react] (https://reactjs.org/)
- [redux] (https://redux.js.org/)
- [redux-saga] (https://redux-saga.js.org/)
- [react-router-dom] (https://reactrouter.com/docs/en/v6)
- [react-hook-form] (https://react-hook-form.com/get-started)
- [axios] (https://axios-http.com/docs/intro)
- [redux-persist] (https://github.com/rt2zz/redux-persist)
- [husky] (https://typicode.github.io/husky/#/)
- [reselect] (https://github.com/reduxjs/reselect)
- [date-fns] (https://date-fns.org/docs/Getting-Started)
- [lint-staged] (https://github.com/okonet/lint-staged)
- [loglevel] (https://github.com/pimterry/loglevel)
- [recharts] (https://recharts.org/en-US/guide/getting-started)
- [sentry] (https://docs.sentry.io/platforms/javascript/guides/react/)
- [react-testing-library] (https://testing-library.com/docs/react-testing-library/intro/)

### Install Dependencies

- yarn start:dev

- Runs the app in the development mode.
- Open [http://localhost:3000] to view it in the browser.

- Lint errors will be shown in the browser.

#### Currently Implementing Feature

- Writing unit tests using react-testing-library to cover 80% of the code base.

#### Upcoming Features

- Stripe and Paypal integrations
- Dockerized the application - Still Learning
- Deploy the application to AWS - Still Learning
