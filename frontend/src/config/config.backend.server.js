export const backendServerConfig = {
  appUrl: 'http://localhost'
};

const env = 'localhost'
export const MICROSERVICE_BASE_URL = env == 'localhost'
  ? {
    ADMIN: `${backendServerConfig.appUrl}:4000/admin/`,
    USER: `${backendServerConfig.appUrl}:4000/user/`,
    VEHICULE: `${backendServerConfig.appUrl}:4000/vehicule/`,

  }
  : {
    ADMIN: `${backendServerConfig.appUrl}/admin/`,

  };
