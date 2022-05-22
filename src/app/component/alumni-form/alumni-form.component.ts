import { HttpClientModule } from '@angular/common/http';
import {
  Validators,
  FormArray,
  FormControl,
  FormBuilder,
  Form,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AluminFeedbackServiceService } from './../../alumin-feedback-service.service';

import { FormDataa } from 'src/app/form-data';
@Component({
  selector: 'app-alumni-form',
  templateUrl: './alumni-form.component.html',
  styleUrls: ['./alumni-form.component.css'],
})
export class AlumniFormComponent implements OnInit {
  alumniFeedback: FormGroup; //step 1
  organization = ['Corporate', 'PSU', 'Startup', 'Academic', 'Research', 'Other'];
  qualifications = ['Graduate', 'Masters', 'Doctorate'];
  option3 = ['Strongly agree', 'Agree', 'Undecided', 'Disagree'];
  option4 = ['Fundamental knowledge', 'Practical Exposure', 'Communication skill', 'Programming skill', 'All of the above'];
  option5 = ['Yes', 'No'];
  option6 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

  constructor(public postService: AluminFeedbackServiceService) { }

  ngOnInit(): void {
    // step 3- add the data model for the formgroup
    this.alumniFeedback = new FormGroup({
      stuName: new FormControl('', Validators.required),
      orgName: new FormControl('', Validators.required),
      organization: new FormArray([]),
      qualifications: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.min(7),
      ]),
      regNum: new FormControl(''),
      q1: new FormControl(''),
      q2: new FormControl(''),
      q3: new FormControl(''),
      q4: new FormControl(''),
      q5: new FormControl(''),
      q6: new FormControl(''),
      q7: new FormControl(''),
      q8: new FormControl(''),
      q9: new FormControl(''),
      q10: new FormControl(''),
      q11: new FormControl(''),
      q12: new FormControl(''),
      q13: new FormControl(''),
      q14: new FormControl(''),
      q14b: new FormControl(''),
      q15: new FormControl(''),
      q15b: new FormControl(''),
      q16: new FormControl(''),
      q17: new FormControl(''),
      q18: new FormControl(''),
    });

  }


  onCheckBoxChange(e: any) {
    const organization = (this.alumniFeedback.controls.organization as FormArray);
    if (e.target.checked) {
      organization.push(new FormControl(e.target.value))
    } else {
      const index = organization.controls.findIndex(x => x.value == e.target.value);
      organization.removeAt(index);
    }
  }


  onSubmit() {
    if (this.alumniFeedback.valid) {
      console.log(this.alumniFeedback.value);
      this.postService
        .postAlumniFeedback(this.alumniFeedback.value)
        .subscribe((res) => {
          console.log(res);
        });
      this.alumniFeedback.reset();
    }
  }
}
