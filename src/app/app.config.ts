import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })],
};
