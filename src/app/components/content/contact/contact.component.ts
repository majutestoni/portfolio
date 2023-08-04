import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  public enviar(){
    if(this.formGroup.valid){

    }
  }

  public openEmail() {
    const email = 'majutestoni@outlook.com';
    const subject = 'Olá!';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoUrl);
  }
}
