FROM node:18-bullseye
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm install; else npm install --package-lock-only && npm install; fi
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]
