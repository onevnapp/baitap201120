import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {
  }

  avatarUrl: string = "assets/img/default-avatar.png";

  profileForm = this.fb.group({
    name: ["", [Validators.required]],
    birthday: [""],
    phone: ["", Validators.required],
    bio: [""],
    addresses: this.fb.array([this.fb.control("")]),
  });

  constructor(private fb: FormBuilder) {}

  get addresses() {
    return this.profileForm.get("addresses") as FormArray;
  }

  addAddress() {
    this.addresses.push(this.fb.control(""));
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onFileChange(): void {
  
  }

  updateProfile() {
    console.log(this.profileForm.value);
  }

}
