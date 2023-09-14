const userService = require("./users.service");
const { sendEmail } = require("./email.service");

jest.mock("./email.service", () => ({
  sendEmail: jest.fn(),
}));

describe("METHOD generateUserWelcomeEmail", () => {
  it("should return null when user doesn't have an email", () => {
    const response = userService.generateUserWelcomeEmail({
      firstName: "Todor",
    });

    expect(response).toBe(null);
  });

  it("should return null when user is not passed", () => {
    const response = userService.generateUserWelcomeEmail();

    expect(response).toBe(null);
  });

  it("should call sendEmail method with an email object", () => {
    const user = {
      email: "test@mail.com",
      firstName: "John",
      lastName: "Doe",
    };
    userService.generateUserWelcomeEmail(user);

    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(sendEmail).toHaveBeenCalledWith({
      to: "test@mail.com",
      subject: `Welcome John!`,
      body: `Dear John Doe, welcome to our platform.`,
    });
  });
});

describe("METHOD getUserById", () => {
  it("should return the user when the user exists in the array", () => {
    // test data
    const mike = {
      id: 1,
      name: "Mike",
    };
    const john = {
      id: 2,
      name: "John",
    };

    const response1 = userService.getUserById([mike, john], 1);
    expect(response1).toBe(mike);

    const response2 = userService.getUserById([mike, john], 2);
    expect(response2).toBe(john);
  });

  it("should throw an error when user can not be found", () => {
    expect(() => userService.getUserById([], 1)).toThrow(Error);
    expect(() => userService.getUserById([], 1)).toThrowError("User not found");
  });
});
