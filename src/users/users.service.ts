import { Injectable ,NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'abc',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'efg',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'hij',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const rolesArray =  this.users.filter((user) => user.role === role);
      if(!rolesArray.length) throw new NotFoundException("User Role Not Found")
      return rolesArray
    }
    return this.users;
  }

  findOne(id: any) {

    const user = this.users.filter((user) => user.id == id);

    if(!user.length) throw new NotFoundException("User Not exist")

    return user

  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
    this.users = this.users.map((item) => {
      if (item.id == id) {
        return { ...item, ...updateUserDto };
      }
      return item;
    });

    return this.findOne(id);
  }

  delete(id:number){
    this.users = this.users.filter(item => item.id !== id)

    return this.findAll()
  }
}
