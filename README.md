# akademiplus_nodejs

# npm init -y

# npm i express
# npm i dotenv

# npm i sequelize mysql2 
# .sequelizec düzenledikten sonra npm i --save-dev sequelize-cli
# npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string

# npx sequelize-cli db:create
# npx sequelize-cli db:migrate


# npx sequelize-cli model:generate --name Role --attributes name:string
# npx sequelize-cli model:generate --name Permission --attributes name:string,code:string
# npx sequelize-cli model:generate --name RolePermission --attributes roleId:integer,permissionId:integer
# npx sequelize-cli model:generate --name UserRole --attributes userId:integer,roleId:integer

# npx sequelize-cli seed:generate --name  insert-admin-user 

# npx sequelize-cli db:seed:all

# npm i express-validator

# npm i jsonwebtoken

# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"


# INSERT INTO `mysql-node`.`Permissions` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES (1, 'READ', 'READ', now(), now());
# INSERT INTO `mysql-node`.`Permissions` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES (2, 'CREATE', 'CREATE', now(), now());
# INSERT INTO `mysql-node`.`Permissions` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES (3, 'UPDATE', 'UPDATE', now(), now());
# INSERT INTO `mysql-node`.`Permissions` (`id`, `name`, `code`, `createdAt`, `updatedAt`) VALUES (4, 'DELETE', 'DELETE', now(), now());

# INSERT INTO `mysql-node`.`RolePermissions` (`roleId`, `permissionId`, `createdAt`, `updatedAt`) VALUES (1, 1, now(), now());
# INSERT INTO `mysql-node`.`RolePermissions` (`roleId`, `permissionId`, `createdAt`, `updatedAt`) VALUES (1, 2, now(), now());
# INSERT INTO `mysql-node`.`RolePermissions` (`roleId`, `permissionId`, `createdAt`, `updatedAt`) VALUES (1, 3, now(), now());
# INSERT INTO `mysql-node`.`RolePermissions` (`roleId`, `permissionId`, `createdAt`, `updatedAt`) VALUES (1, 4, now(), now());

# npm i express-async-errors


# npx sequelize-cli model:generate --name Book --attributes title:string,author:string,publisher:string,publicationDate:date,numberOfPages:integer




# npm i --save-dev mocha assert sinon