import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// tslint:disable-next-line:class-name
export class FormularioLogin {
  form: FormGroup;

  constructor(form: FormBuilder) {
    this.form = form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
