**HOW TO INITIALIZE AND RUN**

1. Run "npm install" on both 'server' and 'client' root directories
2. Create a .env file inside the root directory of the 'server' directory
3. Enter the following contents inside that .env file and input your own credentials (cloudinary API credentials, cloudinary upload preset (if any), database port, host, user, password (if any), database name, and your private Firebase Admin SDK Credentials)

    CLOUDINARY_CLOUD_NAME=

    CLOUDINARY_API_KEY=

    CLOUDINARY_API_SECRET=

    CLOUDINARY_UPLOAD_PRESET=

    PORT=

    DB_HOST=

    DB_USER=

    DB_PASSWORD=''

    DB_DATABASE=

    FIREBASE_TYPE=""

    FIREBASE_PROJECT_ID=""

    FIREBASE_PRIVATE_KEY_ID=""

    FIREBASE_PRIVATE_KEY=""

    FIREBASE_CLIENT_EMAIL=""

    FIREBASE_CLIENT_ID=""

    FIREBASE_AUTH_URI=""

    FIREBASE_TOKEN_URI=""

    FIREBASE_AUTH_PROVIDER_X509_CERT_URL=""

    FIREBASE_CLIENT_X509_CERT_URL=""

    FIREBASE_UNIVERSE_DOMAIN=""

4. Create a .env file inside the root directory of the 'client' directory
5. Enter the following contents inside that .env file and input your own Firebase credentials and also link to API being used

     VITE_FIREBASE_API_KEY=""

     VITE_FIREBASE_AUTH_DOMAIN=""

     VITE_FIREBASE_PROJECT_ID=""

     VITE_FIREBASE_STORAGE_BUCKET=""

     VITE_FIREBASE_MESSAGING_SENDER_ID=""

     VITE_FIREBASE_APP_ID=""

     VITE_API_URL=""
    
7. Run "npm run dev" on both 'server' and 'client' root directories
8. Open the localhost port used and use the platform
