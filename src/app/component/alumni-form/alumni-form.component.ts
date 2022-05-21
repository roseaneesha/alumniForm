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
  dataAlumni: FormDataa;
  option3 = [
    {
      value: 'Strongly agree',
    },
    {
      value: 'Agree',
    },
    {
      value: 'Undecided',
    },
    {
      value: 'Disagree',
    },
  ];
  organization = [
    { value: 'Corporate' },
    { value: 'PSU' },
    {
      value: 'Startup',
    },
    {
      value: 'Academic',
    },
    {
      value: 'Research',
    },
    {
      value: 'Other',
    },
  ];
  qualifications = [
    {
      value: 'Graduate',
    },
    {
      value: 'Masters',
    },
    {
      value: 'Doctorate',
    },
  ];

  option4 = [
    {
      value: 'Fundamental knowledge',
    },
    {
      value: 'Practical Exposure',
    },
    {
      value: 'Communication skill',
    },
    {
      value: 'Programming skill',
    },
    {
      value: 'All of the above',
    },
  ];
  option6 = [
    {
      value: '01',
    },
    {
      value: '02',
    },
    {
      value: '03',
    },
    {
      value: '04',
    },
    {
      value: '05',
    },
    {
      value: '06',
    },
    {
      value: '07',
    },
    {
      value: '08',
    },
    {
      value: '09',
    },
    {
      value: '10',
    },
  ];

  option5 = [{ value: 'Yes' }, { value: 'No' }];

  constructor(
    private fb: FormBuilder,
    public postService: AluminFeedbackServiceService
  ) {
    // step 2- initilaxe fb service
  }
  //todo- qualifications and organization not working

  ngOnInit(): void {
    // step 3- add the data model for the formgroup
    this.alumniFeedback = new FormGroup({
      stuName: new FormControl('', Validators.required),
      orgName: new FormControl('', Validators.required),
      organization: new FormArray([]),
      qualifications: new FormArray([]),
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
    // this.alumniFeedback.valueChanges.subscribe(console.log);
  }

  // selectedOption = null;

  onCbChange(e: any) {
    console.log(this.org);

    if (e.target.checked) {
      if (!this.org.dirty) {
        this.org.controls.push(new FormControl(e.target.value));
      }
      // if (!this.qualify.dirty) {
      //   this.qualify.controls.push(new FormControl(e.target.value));
      // }
    } else {
      let i = 0;
      this.org.controls.forEach((item) => {
        if (item.value == e.target.value) {
          this.org.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onDropDownChange(e: any) {
    console.log(e.value);
    this.q17.setValue(e.target.value, { onlySelf: true });
  }
  get org() {
    return this.alumniFeedback.get('qualifications') as FormArray;
  }
  get qualify() {
    return this.alumniFeedback.get(' organization') as FormArray;
  }
  get q17() {
    return this.alumniFeedback.get('q17');
  }

  onSubmit() {
    if (this.alumniFeedback.valid) {
      console.log(this.alumniFeedback.value);
      this.postService
        .postAlumniFeedback(this.alumniFeedback.value)
        .subscribe((res) => {
          console.log('send ig');
        });

      this.alumniFeedback.reset();
    }
  }
}
