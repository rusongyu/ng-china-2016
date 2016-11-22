import { Component } from '@angular/core';

interface RegisterInformation {
    firstName: string;
    lastName: string;
    age?: number;
    gender?: boolean;
    email: string;
    phone?: string;
    address?: string;
    birthday?: Date;
}

interface OptionalRegisterInformation {
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: boolean;
    email?: string;
    phone?: string;
    address?: string;
    birthday?: Date;
}

function validateRegisterInfo(info: OptionalRegisterInformation): info is RegisterInformation {
    return !!(info.firstName && info.lastName && info.email);
}

function registerOnServer(info: RegisterInformation) {
    // send the information to server
    // ...
}

@Component({
    template: `
    <form (submit)="onSubmit()">
        <input name="firstName" [(ngModel)]="registerInfo.firstName">
        <input name="lastName" [(ngModel)]="registerInfo.lastName">
        <input name="email" [(ngModel)]="registerInfo.email">
    </form>
    `
})
export class TestComponent {
    registerInfo: OptionalRegisterInformation;

    onSubmit() {
        // errors when use unchecked info object
        registerOnServer(this.registerInfo);
        if (validateRegisterInfo(this.registerInfo)) {
            registerOnServer(this.registerInfo);
        }

        // errors when use unchecked info object
        registerOnServer(this.registerInfo);
    }
}

// profiling and text explorer


