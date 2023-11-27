import { Model, Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    preferences?: string | null;
    remember_token?: string | null;
    created_at: Date;
    updated_at: Date;
}
interface CreateUserRequest{
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    preferences?: string | null;
    remember_token?: string | null;
  }
  
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }
export { UserAttributes, UserCreationAttributes,CreateUserRequest };
