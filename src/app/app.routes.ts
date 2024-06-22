import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PrivacyPolicyENComponent } from './privacy-policy-en/privacy-policy-en.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'datenschutzrichtlinien', component: PrivacyPolicyComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyENComponent },
];
