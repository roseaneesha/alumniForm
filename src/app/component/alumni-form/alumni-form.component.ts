import { HttpClientModule } from '@angular/common/http';
import {
  Validators,
  FormArray,
  FormControl,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AluminFeedbackServiceService } from './../../alumin-feedback-service.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-alumni-form',
  templateUrl: './alumni-form.component.html',
  styleUrls: ['./alumni-form.component.css'],
})
export class AlumniFormComponent implements OnInit {
  alumniFeedback: FormGroup;
  organization = [
    'Corporate',
    'PSU',
    'Startup',
    'Academic',
    'Research',
    'Other',
  ];
  qualifications = ['Graduate', 'Masters', 'Doctorate'];
  option3 = ['Strongly agree', 'Agree', 'Undecided', 'Disagree'];
  option4 = [
    'Fundamental knowledge',
    'Practical Exposure',
    'Communication skill',
    'Programming skill',
    'All of the above',
  ];
  option5 = ['Yes', 'No'];
  option6 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

  constructor(
    public postService: AluminFeedbackServiceService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
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
      regNum: new FormControl('', Validators.required),
      q1: new FormControl('', Validators.required),
      q2: new FormControl('', Validators.required),
      q3: new FormControl('', Validators.required),
      q4: new FormControl('', Validators.required),
      q5: new FormControl('', Validators.required),
      q6: new FormControl('', Validators.required),
      q7: new FormControl('', Validators.required),
      q8: new FormControl('', Validators.required),
      q9: new FormControl('', Validators.required),
      q10: new FormControl('', Validators.required),
      q11: new FormControl('', Validators.required),
      q12: new FormControl('', Validators.required),
      q13: new FormControl('', Validators.required),
      q14: new FormControl('', Validators.required),
      q14b: new FormControl(''),
      q15: new FormControl('', Validators.required),
      q15b: new FormControl(''),
      q16: new FormControl('', Validators.required),
      q17: new FormControl('', Validators.required),
      q18: new FormControl(''),
    });
  }

  onChangeYes(e) {
    const aPart = this.alumniFeedback.get('q14').value;
    const bPart = this.alumniFeedback.get('q14b');
    if (aPart === 'Yes') {
      bPart.setValidators([Validators.required]);
      bPart.updateValueAndValidity();
      return;
    }
  }

  onCheckBoxChange(e: any) {
    const organization = this.alumniFeedback.controls.organization as FormArray;
    if (e.target.checked) {
      organization.push(new FormControl(e.target.value));
    } else {
      const index = organization.controls.findIndex(
        (x) => x.value == e.target.value
      );
      organization.removeAt(index);
    }
  }

  onSubmit() {
    for (const key of Object.keys(this.alumniFeedback.controls)) {
      if (this.alumniFeedback.controls[key].invalid) {
        const wrongAnswer = this.el.nativeElement.querySelector(
          '[formControlName="' + key + '"]'
        );
        console.log(key);

        wrongAnswer.focus();
        break;
      }
    }
    if (this.alumniFeedback.valid) {
      this.postService
        .postAlumniFeedback(this.alumniFeedback.value)
        .subscribe((res) => {});
      this.alumniFeedback.reset();
    }
  }
}
