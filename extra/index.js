import  { triangle ,diamond }  from './pattern';
import { permission ,validateUsers } from './utils';
import { permissions , user } from './utils/constants';
//import {user } from './utils/constants';



triangle(10);
diamond(10);

console.log(permission('getUser','trainee','all'));

permissions.getUser ={
        all:['head-trainee'],
        read:['trainees','trainer'],
        write:['trainer'],
        delete:[],



    }

   
  // console.log(validateUsers(user));
  const result = validateUsers(user);
  console.log(result);
  