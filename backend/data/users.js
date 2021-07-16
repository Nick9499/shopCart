import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@lol.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Chris Brown',
        email: 'chris@lol.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Drake',
        email: 'drake@lol.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
