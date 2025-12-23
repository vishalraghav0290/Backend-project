# Backend Project

A Node.js backend project with Express, MongoDB, and authentication features.

## Features
- Express.js server setup
- MongoDB integration with Mongoose
- JWT authentication
- Email functionality with Nodemailer
- Password hashing with bcrypt
- CORS enabled
- Environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation
```bash
npm install
```

### Running the Application
```bash
npm run dev
```

## Project Structure
```
src/
  ├── app.js          # Express application setup
  ├── index.js        # Entry point
  └── constrainst.js  # Constants and configurations
public/
  └── temp/           # Temporary files
```

## Dependencies
- express: Web framework
- mongoose: MongoDB ODM
- bcrypt: Password hashing
- jsonwebtoken: JWT authentication
- nodemailer: Email service
- cors: CORS middleware
- dotenv: Environment variables
- prettier: Code formatting

## License
ISC