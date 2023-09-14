const { sendEmail } = require("./email.service");

function generateUserWelcomeEmail(user) {
  if (!user?.email) {
    return null;
  }

  const email = {
    to: user.email,
    subject: `Welcome ${user.firstName}!`,
    body: `Dear ${user.firstName} ${user.lastName}, welcome to our platform.`,
  };

  sendEmail(email);
}

function getUserById(users, id) {
  const user = users.find(u => u.id === id);

  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
}

module.exports = {
  generateUserWelcomeEmail,
  getUserById,
};
