import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as bootstrap from 'bootstrap';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private service: ContactService
    ) {}
    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]]
        });
    }

    public enviar() {
        if (this.formGroup.valid) {
            this.service.sendEmail(this.formGroup.value).subscribe(
                (e) => {
                    const myToast: HTMLElement | null = document.getElementById('liveToast');
                    if (myToast) {
                        const toast = new bootstrap.Toast(myToast);
                        toast.show();
                    }

                    this.formGroup.reset()
                },
                (err) => {
                    const myToast: HTMLElement | null = document.getElementById('liveToastError');
                    if (myToast) {
                        const toast = new bootstrap.Toast(myToast);
                        toast.show();
                    }

                    this.formGroup.reset()
                }
            );
        } else {
            this.formGroup.markAsTouched()
        }
    }

    public openEmail() {
        const email = 'majuliatestoni@gmail.com';
        const subject = 'Olá!';

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoUrl);
    }
}
