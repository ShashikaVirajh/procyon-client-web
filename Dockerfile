# Pull from a base image
FROM node:16-alpine

# use app as the working directory
WORKDIR /app

# ARG REACT_APP_API_SECRET
# ARG REACT_APP_SENTRY_DSN

# ENV REACT_APP_API_SECRET=$REACT_APP_API_SECRET
# ENV REACT_APP_SENTRY_DSN=$REACT_APP_SENTRY_DSN

# Copy the files from the current directory to app
COPY . /app

# Install Dependencies
RUN yarn

# Build production app
RUN yarn build

# Listen on the specified port
EXPOSE 3000

# Set node server
ENTRYPOINT yarn start
