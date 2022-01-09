export const backendServerConfig = {
  appUrl: 'http://localhost'
};

const env = 'localhost';
const port = 4000;

export const MICROSERVICE_BASE_URL = env == 'localhost'
  ? {
    ADMIN: `${backendServerConfig.appUrl}:${port}/admin/`,
    USER: `${backendServerConfig.appUrl}:${port}/user/`,
    VEHICULE: `${backendServerConfig.appUrl}:${port}/vehicule/`,

  }
  : {
    ADMIN: `${backendServerConfig.appUrl}/admin/`,

  };
