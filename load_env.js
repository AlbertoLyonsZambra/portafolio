const fs = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  production: false,
  emailjs: {
    serviceId: '${process.env.EMAILJS_SERVICE_ID}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID}',
    publicKey: '${process.env.EMAILJS_PUBLIC_KEY}',
    emailTo: '${process.env.EMAILJS_EMAIL_TO}',
  }
};
`;

fs.writeFileSync(targetPath, envConfigFile);