# Blut-Blood-Donation-Campaign

<!-- live link -->

[Live Link](https://blut-blood-donation-compaign.vercel.app/)

<!-- Team Name -->

## Team Name: **`Champ Coders`**

<!-- Team Leader -->

### Team Leader: [**`Md. Mahafujur Rahaman Masud`**](https://github.com/masud90895)

<!-- Team Members -->

### Team Members:

- [**`Md. Mahafujur Rahaman Masud`**](https://github.com/masud90895)
- [**`Nur Mohammad`**](https://github.com/programmer-nur)
- [**`Sarwar Hossain`**](https://github.com/sarwar-asik)
- [**`Hasan Rifat`**](https://github.com/Hasan-Rifat)
- [**`Md. Minhazul Islam Khan`**](https://github.com/MDMinhazulIslamKhan)

<!-- Project Goal  -->

## Project Goal:

The primary goal of this project is to create a comprehensive and user-friendly online platform that promotes blood donation accessibility and encourages active participation. This project will help to save lives by connecting blood donors with recipients. This project will also help to create awareness about blood donation and its importance.The platform aims to bridge the gap between blood donors and those in need by leveraging technology to streamline the donation process, provide valuable information, and foster a sense of community engagement.

<!-- Project Features -->

## Project Features:

<!-- Functional Requirement -->

<!-- Main Features  -->

### Main Features:

1. Donation

- User-Donate Blood
- User request for blood
- User accept her blood request
- User can see their donation history with status (Pending, Approved, Rejected).
- Can see history of blood request.
- Admin Can View, Update, Delete Donor.
- Admin Can View Donation Request made by donor and can approve or reject that request based on disease of donor.

2. Event

- Users can view our event
- Users can see the details page
- Admin can view, create, edit, delete

3. Blog

   - Users can view our blog
   - Users can see the details page
   - User can comment on individual Blog
   - Admin can view, create, edit, delete

4. Notification

- If the user sends a request for blood, the blood owner gets a notification
- If the Blood Owner accepts a blood request, the request user gets a notification

<!-- Live Chat-socket.io => Video List -->

5. Live Chat (socket.io) => [Video List](https://www.kapwing.com/6596f6058bdc8ad34edfba67/studio/editor/sharing)

- Users can live chat with the admin in real time
- Admin can show all chat messages, and also chat with the user

6. Contact (Node Mailer)

- Users can contact the admin. Admin can Show contact list on the dashboard also mail sent on admin mail by Node mailer

### Functional Requirement:

1. Open

   - Registration
   - Login
   - All Donors
   - Blood group-wise Donors list

2. User
   - Profile
     - total donation
     - last donation
     - total received
   - Update Profile
   - Request for blood from the user
   - Individual Donor details or contact info
   - Cancel request
   - Accept request

<!-- Pages -->

### Pages:

1. Landing page
2. All Donors page
3. Blood group wise Donors page
4. Donors details page
5. About us
6. Real-Time Event Promotion
7. Blog Page
8. Contact US
9. Promotion of a Lifelong Commitment to Donation
10. Donation Center Locations
11. Notification
12. Message
13. Chat-AI-(Optional-if we get time)
14. Registration
15. Login
16. Profile / Dashboard
17. Update Profile
18. Change password

<!-- API endpoints -->

### API endpoints:

<!-- Donors route -->

1. Donors route
   - /donors (get) ⇒ get all donors with pagination and filtering
   - /donors/:group (get) ⇒ get all group-wise donors with pagination and filtering
   - /donors/:userId (get) ⇒ get donor info {protected}
   - /donors/request (patch) ⇒ request for blood
   - /donors/cancel-request (patch) ⇒ cancel request by donor
   - /donors/accept (patch) ⇒ accept request from donor

<!-- Notification -->

2. Notification
   - /notification/:id (GET)
   - /notification/:id (PATCH)
   - /notification/:id (DELETE) => Only Admin

<!-- Blog -->

3. Blog
   - /blog (GET) => Get all Blog
   - /blog/:id (GET) => get single blog
   - /blog/:id (PATCH) => Update Single Blog
   - /blog/:id (DELETE) => Delete Single Blog

<!-- Messaging -->

4. Messaging
   - CRUD Operations

<!-- Banner -->

5. Banner
   - /banner (GET) => Get all Banner
   - /banner/:id (DELETE) => Delete Single Banner

<!-- Auth route -->

6. Auth route
   - /auth/signup (post)
   - /auth/login (post)
   - /auth/refresh-token(post)
   - /auth/change-password (patch) {protected}
   - /auth/profile (get) ⇒ (for getting own profile information) {protected}
   - /auth/profile (patch) ⇒ (for updating own profile) {protected}

<!-- Banner -->

7. Banner
   - /banners(GET) => Get all Banner
   - /banner/:id (PATCH) => update Banner
   - /banner/:id (DELETE) => Delete Banner

<!-- Technology -->

## Technology:

<!-- Backend -->

### Backend:

- TypeScript
- NodeJs | ExpressJs
- MongoDB | Mongoose
- Zod
- Jsonwebtoken
- Bcrypt
- Cors
- Cookie-parser
- Dotenv
- HTTP-status
- Ts-node-dev
- ESLint
- Prettier
- Lint-staged
- Husky

<!-- Frontend -->

### Frontend:

- TypeScript
- NextJs
- Redux | Redux Toolkit
- Axios
- React Hook Form । Hook Form Resolvers
- Yup
- Ant Design
- Tailwind
- Jwt-decode
- ESLint
