export interface Environment {
    production: boolean;
    apiEndpoint: string;
    apiKey: string;
    featureToggle: boolean;
  }
  
  export const environment: Environment = {
    production: false,
    apiEndpoint: 'http://localhost:3000/api',
    apiKey: 'your-api-key',
    featureToggle: true
  };
  
