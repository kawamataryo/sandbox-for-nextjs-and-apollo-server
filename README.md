# sandbox-for-nextjs-and-apollo-server
Sandbox for Next.js + Apollo server

## Architecture

- Next.js
- Apollo Server
- Hasura

## Get started
Start dev server.

```
yarn dev
```

Build.

```
yarn build
```

Start Hasura GraphQL Server and create table.

```
docker-compose up -d
```

Access to http://localhost:8080/data/schema/public/table/add .

Add posts table with following schema.

![](https://i.gyazo.com/cc293b8fb1a947a898ca48a4b9213af4.png)

