import { Component, HostListener, inject } from '@angular/core';
import { ProjectListService } from '../../../project-list.service';
import { CommonModule } from '@angular/common';
import { GlobalJSService } from '../../../global-js.service';

@Component({
  selector: 'app-project-one',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss', 'responsive.project-one.component.scss']
})
export class ProjectOneComponent {

  projectListData = inject(ProjectListService);
  globalJSData = inject(GlobalJSService);

  @HostListener('document:pointermove', ['$event'])
  syncPointer(event: PointerEvent): void {
    const pointerX = event.clientX;
    const pointerY = event.clientY;
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);
  }
}