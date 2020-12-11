import { AbstractControl } from '@angular/forms';
import { UsersService } from '@data/services/users/users.service';
import { map } from 'rxjs/operators';


export class EmailValidators{
    static validateMail(userService: UsersService){
        return (control: AbstractControl) =>{
            const value = control.value
            return userService.checkMail(value).pipe(
                map((response) =>{
                    const validMail = response.validMail;
                    return validMail? null : {notExist:true};
                }
            ))
        }
    }
}