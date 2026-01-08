# 🎯 Events & Activities – Client

## 📌 Project Overview

The **Events & Activities Platform** is a social web application that connects people who want to participate in local events, sports, or hobbies but don’t have companions.

Whether it’s a concert, hiking trip, board game night, or tech meetup, users can discover events and join like-minded people. The platform bridges the gap between **online discovery** and **real-world social participation**, ensuring no one misses out on experiences due to a lack of company.

---

## 🎯 Objectives

- Build a social platform for connecting people through events and activities
- Enable event creation and participant matching
- Allow users to build rich profiles showcasing hobbies and interests
- Provide a secure, intuitive, and responsive UI/UX
- Implement role-based authentication and protected routes

---

## 🛠️ Tech Stack (Frontend)

- **Next.js (App Router)**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **ShadCN UI**
- **Fetch API**
- **JWT-based Authentication**
- **Cloudinary / ImgBB** (Image Upload)

---

## ✨ Core Features Breakdown

### 🔐 User Authentication & Roles

- **Authentication**
  - Email & Password based login and registration
- **Roles**
  - **User**: Join events, view events, manage profile
  - **Host**: Create & manage events, view participants, receive payments
  - **Admin**: Manage users, hosts, and events
- **Security**
  - JWT-based authentication
  - Role-protected routes and dashboards

---

### 👤 User Profile Management (CRUD)

- Create & edit profile
  - Full name
  - Profile image (Cloudinary)
  - Bio / About section
  - Interests (Music, Sports, Gaming, Art, etc.)
  - Location (City / Area)
- Public profile viewing to discover compatible users and hosts

---

### 📅 Event & Activity Management (CRUD)

- Event details include:
  - Event name & category (Concert, Hike, Dinner, etc.)
  - Date & time
  - Location
  - Minimum & maximum participants
  - Description
  - Event banner image
  - Joining fee
  - Status (Open, Full, Cancelled, Completed)
- Events are searchable and visible to all users

---

### 🔍 Search & Matching System

- Search events by:
  - Category / Event type
  - Date & time
  - Location
- Filtered and keyword-based search experience

---

### ⭐ Review & Rating System

- Users can rate and review hosts after attending events
- Ratings (1–5 stars) displayed on host profiles

---

### 💳 Payment Integration

- Hosts can set joining fees for events
- Users securely pay to join paid events
- Supported gateways:
  - Stripe 

---

## 🧭 Pages & Functional Requirements

> The pages below represent the core UI structure. Additional pages and UI flows may be added as needed.

---

### 🧭 Navbar

#### Logged Out
- Home
- Explore Events
- Become a Host
- Login
- Register

#### Logged In (User)
- Home
- Explore Events
- My Events
- Profile
- Logout

#### Logged In (Host)
- Home
- Explore Events
- My Hosted Events
- Create Event
- Profile
- Logout

#### Logged In (Admin)
- Admin Dashboard
- Manage Users
- Manage Hosts
- Manage Events
- Profile
- Logout

---

### 🔑 Authentication Pages

- `/register` – User registration
- `/login` – Secure login

---

### 🏠 Home / Landing Page (`/`)

- Hero section explaining the platform
- Call-to-action buttons (Find Activities / Create Event)
- Featured or upcoming events
- Minimum **6 sections**, such as:
  - How It Works
  - Popular Events
  - Top-Rated Hosts
  - Event Categories
  - Testimonials
  - Why Choose Us

---

### 👤 Profile Page (`/profile/[id]`)

- User information & interests
- Rating summary
- Hosted events & joined events
- Edit profile option (own profile only)

---

### 📊 Dashboard (`/dashboard`)

- **User Dashboard**
  - Upcoming joined events
  - Past events
  - Saved events
- **Host Dashboard**
  - Hosted events
  - Participant management
  - Revenue & payment tracking
- **Admin Dashboard**
  - User management
  - Host management
  - Event moderation

---

### ✍️ Create / Edit Event

- `/events/create`
- `/events/edit/[id]`
- Includes:
  - Event form
  - Date & time picker
  - Location input
  - Image upload

---

### 📋 Event Listing & Search (`/events`)

- Grid / list view of events
- Filters by category, date, and location
- Keyword search bar

---

### 📄 Event Details Page (`/events/[id]`)

- Full event details
- Host profile summary
- Participant list
- Join / Leave event action

---

## 🌟 Optional Features

| Feature | Description |
|------|------------|
| 📅 Calendar View | Visual calendar of joined events |
| 📍 Map View | Browse events on a map |
| 🤝 Friend System | Follow friends and see their activities |

---

## 🗂️ Folder Structure

```txt
src/
├── app/
│   ├── (commomlayout)/login, register, event
│   ├── (dashboardLayout)/  
|   |    ├── (commonProtectedayout)
|   |    ├── (userDashboLayout)/dashboard
|   |    ├── admin/dashboard
|   |    ├── host/dashboard
|   
├── Components/
│   ├── auth/
│   ├── modules/
│   ├── shared
│   └── ui/
├── hooks/
├── lib/
├── services/
├── types/
├── zod/
└── proxy.ts