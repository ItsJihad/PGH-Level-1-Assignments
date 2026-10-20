# 🎓 eTuitionBd — Tuition Management Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)

**eTuitionBd** is a full-stack tuition management platform that connects students and parents with qualified tutors. It simplifies tuition posting, tutor applications, hiring, and payment management through dedicated dashboards for students, tutors, and administrators.

## 🔗 Live Links

- **Live Website:** [eTuitionBd](https://etutorsbd.netlify.app/)
- **Backend API:** [Vercel Server](https://etutorsbd.vercel.app/)
- **Frontend Repository:** [GitHub]([https://github.com/ItsJihad/E-TuitionBD-Frontend](https://github.com/ItsJihad/PGH-Level-1-Assignments/tree/Assignment-8/frontend))
- **Backend Repository:** [GitHub]([https://github.com/ItsJihad/E-TuitionBD-Backend](https://github.com/ItsJihad/PGH-Level-1-Assignments/tree/Assignment-8/backend))

## ✨ Key Features

### 👨‍🎓 Student
- Post tuition requirements with subjects, class levels, budgets, and locations.
- Review tutor profiles and manage applications.
- Hire tutors and make payments through Stripe.
- Track tuition posts and payment history.

### 🧑‍🏫 Tutor
- Browse and filter available tuition opportunities.
- Apply for tuitions with expected salaries and credentials.
- Track application statuses and relevant earnings information.

### 🛡️ Administrator
- Manage users and their roles.
- Approve or reject tuition posts.
- Monitor platform statistics, revenue, and transactions.

### 🚀 General
- Responsive interface for mobile, tablet, and desktop.
- Firebase email/password and Google authentication.
- JWT-based authentication and role-protected routes.
- Search, filtering, and pagination.
- Interactive animations and notifications.
- Secure payment processing and transaction tracking.

## 🛠️ Technology Stack

| Frontend | Backend & Services |
|---|---|
| React.js | Node.js |
| Tailwind CSS & DaisyUI | Express.js 5 |
| React Router DOM | MongoDB & Mongoose |
| Axios & TanStack Query | Firebase Admin SDK |
| Framer Motion | Stripe API |
| React Hook Form | dotenv & CORS |
| Firebase Authentication | mongoose-aggregate-paginate-v2 |

## ⚙️ Installation and Setup

**1. Clone both repositories**

```bash
git clone https://github.com/ItsJihad/E-TuitionBD-Frontend.git
git clone https://github.com/ItsJihad/E-TuitionBD-Backend.git
```

**2. Set up the frontend**

```bash
cd E-TuitionBD-Frontend
npm install
npm run dev
```

Create a `.env.local` file in the frontend root:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_API_URL=http://localhost:5000
VITE_PAYMENT_GATEWAY_PK=your_stripe_publishable_key
```

**3. Set up the backend**

```bash
cd E-TuitionBD-Backend
npm install
npm run dev
```

Create a `.env` file in the backend root:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password

STRIPE_SECRET_KEY=your_stripe_secret_key

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="your_private_key"
```

Configure the environment variables according to the actual backend implementation. Ensure MongoDB, Firebase Admin SDK, Stripe, and CORS are properly configured.

## 🏗️ Architecture

eTuitionBd follows a client-server architecture. The React frontend communicates with the Express REST API, which handles authentication verification, role-based authorization, database operations, and payment processing. MongoDB stores application data, while Firebase provides authentication and Stripe handles payments.

## 🚀 Deployment

| Component | Platform |
|---|---|
| Frontend | [Netlify](https://etutorsbd.netlify.app/) |
| Backend | [Vercel](https://etutorsbd.vercel.app/) |
| Database | MongoDB Atlas |
| Authentication | Firebase |
| Payments | Stripe |

## 🔐 Security

- Verify Firebase ID tokens on the backend.
- Protect sensitive endpoints with role-based authorization.
- Keep database credentials, Firebase private keys, and Stripe secret keys in environment variables.
- Never commit secret credentials to GitHub.


*Making tuition management easier, more accessible, and more organized.* 🎓
