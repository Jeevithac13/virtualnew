import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'virtual';
  options=['debitcard', 'creditcard', 'upi', 'netbanking'];
//userModel = new User('jeevita','c')
  //userModel = new User('','','','','','','','','');
  userModel = new User('','','','','','','','','','','');

  constructor(private _enrollmentService: EnrollmentService ) {}


  onSubmit()
  {
    console.log(this.userModel)
    this. _enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!', error)
    )
    
  }
}
