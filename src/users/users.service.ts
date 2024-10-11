import { Injectable } from '@nestjs/common';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: any) {
    return this.users.filter((user) => user.id == id);
  }

  create(user: { name: string; role: 'INTERN' | 'ADMIN' | 'ENGINEER' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: { name?: string; role?: 'INTERN' | 'ADMIN' | 'ENGINEER' },
  ) {
    this.users = this.users.map((item) => {
      if (item.id == id) {
        return { ...item, ...userUpdate };
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
