const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLFloat, GraphQLNonNull, GraphQLID } = require('graphql');
const User = require('../models/User');
const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

// User Type definition
const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  })
});

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    _id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    designation: { type: GraphQLString },
    salary: { type: GraphQLFloat },
    date_of_joining: { type: GraphQLString },
    department: { type: GraphQLString },
    employee_photo: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    login: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const user = await User.findOne({ email: args.email });
        if (!user) {
          throw new Error('User not found');
        }
        const isExist = await bcrypt.compare(args.password, user.password);
        if (!isExist) {
          throw new Error('Invalid credentials');
        }
        return "Login successful";
      }
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      async resolve() {
        return await Employee.find();
      }
    },
    employeeById: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLID }
      },
      async resolve(parent, args) {
        return await Employee.findById(args.id);
      }
    }
  }
});

// Mutation definition
const Mutation = new GraphQLObjectType({
  name: `Mutation`,
  fields: {
    signup: {
      type: userType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const user = new User({
          username: args.username,
          email: args.email,
          password: hashedPassword
        });
        return await user.save();
      }
    },
    addEmployee: {
      type: EmployeeType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        designation: { type: GraphQLString },
        salary: { type: GraphQLFloat },
        date_of_joining: { type: GraphQLString },
        department: { type: GraphQLString },
        employee_photo: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const employee = new Employee(args);
        return await employee.save();
      }
    },
    updateEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      async resolve(parent, { id, ...rest }) {
        return await Employee.findByIdAndUpdate(id, rest, { new: true });
      }
    },
    deleteEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLID }
      },
      async resolve(parent, { id }) {
        return await Employee.findByIdAndDelete(id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});