ADITYA PLK — ONE-PAGE ONLINE RESUME

Contents
- index.html: single-page resume markup and CV content
- style.css: responsive design and print stylesheet
- script.js: interactive career timeline, mobile navigation and print action
- images/profile.png: headshot extracted from the supplied CV

RUN LOCALLY
Open index.html in a modern browser. Keep the images folder beside index.html.

AWS DEPLOYMENT LATER
This is a static website (HTML, CSS, JavaScript and an image), so it can be hosted without a server:
1. Create an Amazon S3 bucket for the website files.
2. Upload index.html, style.css, script.js and the images/ folder, preserving this structure.
3. For a production public website, put Amazon CloudFront in front of the S3 bucket using Origin Access Control; keep the bucket private and configure the default root object as index.html.
4. Add a domain and HTTPS certificate through Route 53 / AWS Certificate Manager if desired.
5. Update the CloudFront distribution whenever you publish changed files (invalidate the cache if needed).

For a quick test you can use S3 static website hosting, but the recommended production pattern is private S3 + CloudFront. AWS configuration, permissions, domain and billing are not created by these files.

EDITING
Edit the content in index.html. Replace images/profile.png to change the portrait. Change the design in style.css. The Print button opens the browser print dialog; choose Save as PDF.

CONTENT NOTE
Resume content is based on the uploaded CV. Verify all dates and details before publishing. The 30% BLE metric is reproduced from the CV.
