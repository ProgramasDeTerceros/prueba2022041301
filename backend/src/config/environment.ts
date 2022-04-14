

  const MONGO_DB_USERNAME="admin-user";
  const MONGO_DB_PASSWORD="admin-password";
  const MONGO_DB_HOST="localhost";
  const MONGO_DB_PORT="";
  const MONGO_DB_PARAMETERS="?authSource=admin";
  const MONGO_DB_DATABASE="soccer";
;
export const environment = {
	mongodb: {
    uri:
      "mongodb://" +
      MONGO_DB_USERNAME +
      ":" +
      MONGO_DB_PASSWORD +
      "@" +
      MONGO_DB_HOST +
      (MONGO_DB_PORT
        ? ":" + MONGO_DB_PORT + "/"
        : "/") +
      MONGO_DB_DATABASE +
      MONGO_DB_PARAMETERS,
  },
};
