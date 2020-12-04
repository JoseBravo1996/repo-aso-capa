import { AbstractControl } from '@angular/forms';
import { UsersService } from '@data/services/api/users/users.service';
import { map } from 'rxjs/operators';

export class MyValidations {

    static validateEmail(usersService: UsersService){
        return (control: AbstractControl) => {
            const value = control.value;
            console.log(control.value);
            return usersService.checkEmail(value).pipe(
                map((response) =>{
                    const isEmailAvailable = response.isEmailAvailable;
                    return isEmailAvailable? null : { notAvailable: true };
                })
            );
        }
    }
}