# Nigeria Independent Hospital Platform

## Overview
A comprehensive healthcare management platform connecting patients, doctors, hospitals, and healthcare service providers.

## Features
- User Authentication & Authorization
- Hospital Registration & Management
- Doctor Registration & Verification
- Patient Management
- Consultation Booking System
- Healthcare Service Provider Integration
- Payment Processing (Paystack)
- Admin Dashboard
- Analytics & Reporting

## Prerequisites
- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- Supabase Account
- Paystack Account

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Paystack Configuration (for production)
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/nigeria-hospital-platform.git
cd nigeria-hospital-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
- Create a new Supabase project
- Run the migration files in the `supabase/migrations` directory in order
- The migrations will create all necessary tables, policies, and initial data

4. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the variables with your actual values

5. Start the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## Production Deployment

### Server Requirements
- Node.js 18.x or higher
- Nginx or Apache web server
- SSL certificate (required for Supabase authentication)
- PM2 or similar process manager

### Deployment Steps

1. Install Node.js and npm:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Install PM2:
```bash
npm install -g pm2
```

3. Clone and setup the application:
```bash
git clone https://github.com/your-username/nigeria-hospital-platform.git
cd nigeria-hospital-platform
npm install
```

4. Build the application:
```bash
npm run build
```

5. Start with PM2:
```bash
pm2 start npm --name "nigeria-hospital" -- start
```

### Nginx Configuration
Create a new Nginx configuration file:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL Setup
```bash
sudo certbot --nginx -d your-domain.com
```

## Database Maintenance

### Backup
Supabase provides automatic backups, but you can also manually backup using:

```bash
pg_dump -h your-supabase-db-host -U postgres -d postgres > backup.sql
```

### Restore
```bash
psql -h your-supabase-db-host -U postgres -d postgres < backup.sql
```

## Security Considerations
- Always use HTTPS in production
- Keep Supabase and Paystack keys secure
- Regularly update dependencies
- Monitor database access logs
- Implement rate limiting
- Regular security audits

## Monitoring
- Use PM2 for process monitoring
- Set up Supabase database monitoring
- Configure error logging
- Monitor API endpoints performance

## Troubleshooting
Common issues and solutions:

1. Database Connection Issues:
   - Verify Supabase credentials
   - Check network connectivity
   - Ensure proper SSL configuration

2. Payment Integration:
   - Verify Paystack configuration
   - Check transaction logs
   - Test webhook endpoints

3. Authentication Issues:
   - Clear browser cache
   - Verify Supabase authentication setup
   - Check SSL certificate validity

## Support
For support, please contact:
- Email: support@nigeriahospital.com
- Phone: +234 (0) 123 456 7890