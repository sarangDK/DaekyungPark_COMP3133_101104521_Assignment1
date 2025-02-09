# Employee Management System (GraphQL Backend)

## Overview
This project is a backend application for an **Employee Management System** built using **Node.js, Express, GraphQL, and MongoDB**. The system provides authentication and employee management functionalities through a GraphQL API.

## Repository Information
**Repository Name:** `DaekyungPark_COMP3133_101104521_Assignment1`

## Technologies Used
- **Node.js**
- **Express.js**
- **GraphQL (Apollo Server / express-graphql)**
- **MongoDB (Mongoose)**
- **JWT for Authentication (Optional)**
- **Express-validator for Input Validation**
- **Postman for API Testing**
- **GitHub for Version Control**
- **DevOps Tools for Deployment (Optional: Heroku, Vercel, Render, etc.)**

---

## GraphQL API Implementation

### Authentication & User Management
| Operation | Method | Description |
|-----------|--------|-------------|
| **Signup** | Mutation | Allows a new user to create an account |
| **Login** | Query | Authenticates a user using email/username and password |

### Employee Management
| Operation | Method | Description |
|-----------|--------|-------------|
| **Get All Employees** | Query | Fetches the list of all employees |
| **Add New Employee** | Mutation | Adds a new employee to the system |
| **Search Employee by ID** | Query | Fetches employee details using employee ID |
| **Update Employee by ID** | Mutation | Updates employee details by ID |
| **Delete Employee by ID** | Mutation | Deletes an employee from the system |
| **Search Employee by Designation/Department** | Query | Fetches employees based on designation or department |

---

## Database Schema
### Users Collection
| Field Name | Type | Constraints |
|------------|------|-------------|
| `_id` | Object ID | Auto-generated |
| `username` | String | Primary Key |
| `email` | String | Unique |
| `password` | String | Encrypted Storage |
| `created_at` | Date | Timestamp of creation |
| `updated_at` | Date | Timestamp of last update |

### Employees Collection
| Field Name | Type | Constraints |
|------------|------|-------------|
| `_id` | Object ID | Auto-generated |
| `first_name` | String | Required |
| `last_name` | String | Required |
| `email` | String | Unique |
| `gender` | String | Male/Female/Other |
| `designation` | String | Required |
| `salary` | Float | Must be >= 1000 |
| `date_of_joining` | Date | Required |
| `department` | String | Required |
| `employee_photo` | String | Image path |
| `created_at` | Date | Timestamp of creation |
| `updated_at` | Date | Timestamp of last update |

---

## API Testing & Validation
### Validation
- **Library Used:** `express-validator`
- **Purpose:** To validate incoming API requests for correct data formats and constraints.

### Testing with Postman
- **All API endpoints are tested in Postman**
- **Screenshots are captured and included in the documentation**
- **Postman collection is exported for submission**

---

## Implementation Guidelines
- Use **Apollo Server** or **express-graphql** to implement the GraphQL API.
- Validate all input data before processing requests.
- Return appropriate error messages for invalid inputs or failures.
- Ensure all API responses are in JSON format.
- Secure API endpoints using JWT authentication (optional).

---

## Submission Checklist
1. **MongoDB Console Screenshots:**
   - Include screenshots showing collections in MongoDB.
2. **Postman API Collection:**
   - Export and include the Postman collection.
3. **API Testing Screenshots:**
   - Provide labeled screenshots of each API being tested.
4. **Project ZIP File:**
   - Remove `node_modules` and compress the project files.
5. **GitHub Repository:**
   - Submit the link to the repository: `DaekyungPark_COMP3133_101104521_Assignment1`
6. **Sample User Details:**
   - Include sample user credentials for testing login.
7. **Comments & Notes:**
   - Add relevant comments and documentation.
8. **Hosting URL (Optional):**
   - Provide a link if the project is deployed on **Heroku, Vercel, Render, etc.**

---

## Evaluation Criteria
| Points | Evaluation Component |
|--------|----------------------|
| 10 | GraphQL Schema & MongoDB Models |
| 60 | GraphQL API Functionality |
| 10 | Screenshots & Error Handling |
| 10 | GitHub Repository Maintenance (with README) |
| 10 | Testing with Postman & Screenshots |

---

## Contact Information
For any questions or clarifications, please contact:
- **Instructor Email:** `pritesh.patel2@georgebrown.ca`
- **Slack Channel:** `COMP 3133 Slack`

#### Important Notes:
- **No extensions will be granted for late submissions.**
- **Ensure all required documents and screenshots are submitted properly.**

---

### References
- [GraphQL Documentation](https://graphql.org/learn/)
- [How to GraphQL](https://www.howtographql.com/)
- [GraphQL with Express](https://www.apollographql.com/blog/backend/using-express-with-graphqlserver-node-js/)

