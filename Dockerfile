FROM node
COPY package.json package-lock.json ./
RUN npm ci
COPY *.js ./
CMD npm start
