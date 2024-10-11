import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
   private users = [
    {
      'id':1,
      "name":'abc',
      "role":"INTERN"
    },
    {
      'id':2,
      "name":'efg',
      "role":"ADMIN"
    },
    {
      'id':3,
      "name":'hij',
      "role":"ENGINEER"
    }
   ]

  findAll()  {
    return this.users;
  }
}
