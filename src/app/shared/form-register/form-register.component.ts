import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: [
  ]
})
export class FormRegisterComponent implements OnInit {

  // Inject FormBuilder
  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private FormBuilder: FormBuilder,
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService
  ) {}
  // Declarations
  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  // Method to reset form
  private resetForm = ()  => {
    this.formData = this.FormBuilder.group({
      email: [ null, Validators.required ],
      password: [ null, Validators.required ],
      firstname: [ null, Validators.required ],
      lastname: [ null, Validators.required ],
    });
  }

  public registerUser = (event) => {
    console.log(event);
    this.CrudService.createUser('users', event)
      .then( response => {
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }

  // Start
  ngOnInit() {
    this.resetForm();
  }

}
