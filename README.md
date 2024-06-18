**HOW TO INITIALIZE AND RUN**

1. Run "npm install" on both 'server' and 'client' root directories
2. Create a .env file inside the root directory of the 'server' directory
3. Enter the following contents inside that .env file and input your own credentials (cloudinary API credentials, cloudinary upload preset (if any), database port, host, user, password (if any), and database name)

    CLOUDINARY_CLOUD_NAME=
   
    CLOUDINARY_API_KEY=
   
    CLOUDINARY_API_SECRET=
   
    CLOUDINARY_UPLOAD_PRESET=
   
    PORT=
   
    DB_HOST=
   
    DB_USER=
   
    DB_PASSWORD=''
   
    DB_DATABASE=
   
4. Create a .env file inside the root directory of the 'client' directory
5. Enter the following contents inside that .env file and input your own Firebase credentials

     VITE_FIREBASE_API_KEY=""

     VITE_FIREBASE_AUTH_DOMAIN=""

     VITE_FIREBASE_PROJECT_ID=""

     VITE_FIREBASE_STORAGE_BUCKET=""

     VITE_FIREBASE_MESSAGING_SENDER_ID=""

     VITE_FIREBASE_APP_ID=""
    
6. Run "npm run dev" on both 'server' and 'client' root directories
7. Open the localhost port used and use the platform
