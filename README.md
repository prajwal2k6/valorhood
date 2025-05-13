# VALORHOOD Authentication with Supabase

This project implements a custom authentication UI for VALORHOOD using Supabase for backend authentication services. It features a stylish, interactive login interface with Supabase email/password and Google OAuth authentication.

---

## 🔧 Features

- 🔐 Email/Password authentication with Supabase
- 🔑 Google OAuth sign-in option
- ✍️ Custom username setting (stored in user metadata)
- 💾 Persistent user sessions across reloads
- 👋 Sign out functionality
- 🎮 Interactive UI with "roaming" login button
- 🔒 Secure authentication flow
- 📱 Responsive design

---

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/valorhood-auth.git
cd valorhood-auth
```

2. **Set up Supabase**

- Create a Supabase project at [supabase.com](https://supabase.com)
- Enable Email/Password and Google authentication in the Auth settings
- Copy your Supabase URL and anon key

3. **Configure environment variables**

- Rename `.env.sample` to `.env`
- Add your Supabase URL and anon key to the `.env` file:

```
VITE_SUPABASE_URL='your-supabase-url'
VITE_SUPABASE_ANON_KEY='your-supabase-anon-key'
```

4. **Install dependencies and run**

```bash
npm install
npm run dev
```

## 📦 Dependencies

This project uses the following key dependencies:

- [@supabase/supabase-js](https://github.com/supabase/supabase-js) - Supabase JavaScript client
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
