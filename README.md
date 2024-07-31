# akademiplus_nodejs

# npm init -y

# npm i express
# npm i dotenv

# npm i sequelize mysql2 
# .sequelizec düzenledikten sonra npm i --save-dev sequelize-cli
# npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string

# npx sequelize-cli:create
# npx sequelize-cli:migrate


# npx sequelize-cli model:generate --name Role --attributes name:string
# npx sequelize-cli model:generate --name Permission --attributes name:string,code:string
# npx sequelize-cli model:generate --name RolePermission --attributes roleId:integer,permissionId:integer
# npx sequelize-cli model:generate --name UserRole --attributes userId:integer,roleId:integer

# npx sequelize-cli seed:generate --name  insert-admin-user 


# npm i express-validator