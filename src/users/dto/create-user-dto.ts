
import { IsString , IsEnum ,IsNotEmpty} from 'class-validator'

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    
    name:string;

    @IsEnum(['INTERN' , 'ADMIN' , 'ENGINEER'] , {
        message:"Valide role required"
    })
    role:'INTERN' | 'ADMIN' | 'ENGINEER'

}