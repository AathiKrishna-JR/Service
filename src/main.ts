import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './tasks/tasks.service';

bootstrapApplication(AppComponent).catch((err) => console.error(err));