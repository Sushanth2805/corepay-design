# Deployment Guide

Since this application uses a modern "no-build" approach with standard ES6 modules (imported via `esm.sh`), deployment is incredibly straightforward. You essentially only need to host static files.

## 1. Vercel (Recommended)

Vercel is the easiest platform for React apps.

1.  **Push to GitHub:** Ensure your code is in a GitHub repository.
2.  **Import to Vercel:** Go to [vercel.com/new](https://vercel.com/new).
3.  **Configure:** 
    - The framework preset can be left as "Other" or "Vite" (though strictly not needed).
    - Ensure the **Root Directory** is where `index.html` is located.
4.  **Deploy:** Click Deploy. Vercel will serve your static files automatically.

## 2. Netlify

1.  **Drag and Drop:** You can simply drag the project folder into the Netlify "Drop" zone on their dashboard.
2.  **Git Integration:** Like Vercel, connect your repo.
3.  **Build Settings:** Leave "Build Command" empty and set "Publish directory" to `.`.

## 3. GitHub Pages

1.  Go to your Repository **Settings** > **Pages**.
2.  Under **Build and deployment**, set **Source** to "Deploy from a branch".
3.  Select the `main` branch and the `/ (root)` folder.
4.  Your site will be live at `https://<username>.github.io/<repo-name>/`.

## 4. Local Preview

If you want to test the production feel locally, use a simple HTTP server:

```bash
# Using npx (Node.js required)
npx serve .

# Using Python
python3 -m http.server 8080
```

## 🛠️ Optimization Tips for Production

- **Asset Hosting:** For larger images, consider using a CDN like Cloudinary or Vercel Image Optimization.
- **Environment Variables:** If you add API keys (e.g., Gemini API), ensure they are set in your provider's dashboard (e.g., Vercel Environment Variables) and never hardcoded in the source.
