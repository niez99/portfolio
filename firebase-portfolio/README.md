# Firebase Deployment for Portfolio Website

This guide explains how to deploy your static portfolio website to Firebase Hosting.

## Prerequisites

- Node.js and npm installed
- Firebase CLI installed globally (`npm install -g firebase-tools`)
- A Firebase project created in the Firebase Console (https://console.firebase.google.com/)

## Steps to Deploy

1. Open terminal and navigate to your project directory containing your static files (e.g., portfolio.html, education.html, etc.).

2. Initialize Firebase in your project directory:

   ```bash
   firebase login
   firebase init
   ```

   - Select **Hosting**.
   - Choose your Firebase project.
   - Set the public directory to the folder containing your static files (e.g., `public` or `.` if files are in root).
   - Choose `No` for single-page app (unless you want SPA behavior).
   - Choose `No` for automatic build and deploy.

3. Place all your static files (HTML, CSS, JS, images) inside the public directory you specified.

4. Deploy your site:

   ```bash
   firebase deploy
   ```

5. After deployment, Firebase will provide a URL where your site is hosted.

## Notes

- Firebase Hosting serves static files only. If you want to use your Node.js server (server.js), you need to deploy it as a Firebase Cloud Function or use another platform like Heroku.

- For a simple static portfolio, deploying the HTML files is sufficient.

## Example Directory Structure

```
my-portfolio/
├── public/
│   ├── portfolio.html
│   ├── education.html
│   ├── organization.html
│   ├── gallery.html
│   ├── skill.html
│   ├── riwayat-kerja.html
│   ├── style.css
│   └── images/
└── firebase.json
```

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

If you want, I can help you create the firebase.json configuration file and organize your files for deployment.
