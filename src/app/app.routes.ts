import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [


    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];
