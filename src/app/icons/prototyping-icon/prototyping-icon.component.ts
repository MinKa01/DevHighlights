import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prototyping-icon',
  imports: [],
  template: `
    <svg 
      [attr.class]="className" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
      [attr.stroke]="strokeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-keyframes">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
          d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
      <path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
      <path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
    </svg>
  `,
  styles: ``
})
export class PrototypingIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
