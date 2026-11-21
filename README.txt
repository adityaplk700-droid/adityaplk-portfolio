Aditya PLK | Personal Portfolio Website
A responsive personal portfolio website developed to showcase my professional experience, technical skills, academic background, certifications, achievements, and projects.
The website is built using HTML, CSS, and JavaScript and deployed on Amazon Web Services (AWS) using Amazon S3 and Amazon CloudFront.
Live Website

Project Overview
This project demonstrates the development and deployment of a personal portfolio website using frontend technologies and AWS cloud infrastructure. It provides a central platform to showcase my technical background, professional experience, and projects in Mechatronics Engineering, Artificial Intelligence, Robotics, IoT, and Cloud Computing.
Technologies Used
Frontend:
•	HTML5
•	CSS3
•	JavaScript
•	Responsive Web Design

AWS Cloud Services:
•	Amazon S3: Used to store and host static website files.
•	Amazon CloudFront: Used as a Content Delivery Network (CDN) to distribute website content through AWS edge locations.
•	AWS WAF: Web application firewall protection integrated with CloudFront, if enabled and configured.

AWS Architecture
The website follows a static website hosting architecture using Amazon S3 and Amazon CloudFront.
1.	Website files are uploaded and stored in an Amazon S3 bucket.
2.	Amazon CloudFront is configured to distribute website content.
3.	Visitors access the website through the CloudFront distribution URL.
4.	CloudFront delivers the requested content from the S3 origin.

Key Features To Showcase:
•	Professional introduction and profile section.
•	Technical skills and technology stack.
•	Professional experience and internship details.
•	Academic qualifications.
•	Projects and technical achievements.
•	Certifications and awards.
•	Responsive design for desktop and mobile devices.
•	Interactive navigation and career timeline.

Project Structure
aditya-personal-portfolio/
│
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.png
│
└── README.md

Deployment Process
The website was deployed using Amazon Web Services.
1.	Developed the portfolio website using HTML, CSS, and JavaScript.
2.	Uploaded the static website files to Amazon S3.
3.	Configured an Amazon CloudFront distribution with the S3 origin.
4.	Enabled HTTPS access through CloudFront.
5.	Published the website using the CloudFront distribution domain name.
