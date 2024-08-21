# Backend Mannual

In this documentation we will focus on talking about our backend system. The frontend will be explained in the other directory.

## Requirements

### Dependencies

1. bcrypt version 5.1.1
2. body-parser version 1.20.2
3. cors version 2.8.5
4. dotenv version 16.4.5
5. express version 4.19.2
6. express-validator version 7.2.0
7. jsonwebtoken version 9.0.2
8. mysql2 version 3.11.0
9. sequelize version 6.37.3

## Create a Migration

```bash
cd src
```

```bash
npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string,membership_type:string,password:string,created_at:datetime,updated_at:datetime,deleted_at:datetime
```

change the attibutes with your necessary attributes

## Running Migration

```bash
npx sequelize-cli db:migrate
```

testing mode

```bash
npx sequelize-cli db:migrate --env test
```

## Revert Migration

```bash
npx sequelize-cli db:migrate:undo
```

## Create Database Seeder

```bash
npx sequelize-cli seed:generate --name article
```

## Running Database Seeder

```bash
npx sequelize-cli db:seed:all
```

test mode

```bash
npx sequelize-cli db:seed:all --env test
```

## Unit Test

```bash
npm test
```

## Running This Project

```bash
npm start
```
