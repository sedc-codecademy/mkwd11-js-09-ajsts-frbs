const { informSubscribersOfNewSongs } = require("./songs.service");
const { sendEmail } = require("./email.service");
const { log } = require("./logger.service");

jest.mock("./email.service", () => ({
  sendEmail: jest.fn(),
}));

jest.mock("./logger.service", () => ({
  log: jest.fn(),
}));

describe("METHOD informSubscribersOfNewSongs", () => {
  it("should throw an error when there are no songs or subscribers", () => {
    expect(() => informSubscribersOfNewSongs([{}])).toThrow(Error);
    expect(() => informSubscribersOfNewSongs(undefined, [{}, {}])).toThrow(
      Error
    );
  });

  //   it("should log when there are no rap songs and there are no rap subscribers", () => {
  //     const popSong = {
  //       id: 1,
  //       genre: "pop",
  //     };
  //     const subscriberToPop = {
  //       id: 1,
  //       name: "John",
  //       genres: ["pop"],
  //     };

  //     informSubscribersOfNewSongs([popSong], [subscriberToPop]);

  //     expect(log).toHaveBeenCalledTimes(2);
  //     expect(sendEmail).not.toHaveBeenCalled();
  //   });

  it("should notify rap subscribers", () => {
    const rapSong = {
      id: 1,
      genre: "rap",
    };
    const folkSong = {
      id: 2,
      genre: "folk",
    };

    const mike = {
      id: 1,
      name: "Mike",
      email: "mike@mail.com",
      genres: ["rap"],
    };
    const jack = {
      id: 2,
      name: "Jack",
      email: "jack@mail.com",
      genres: ["rap", "folk"],
    };
    const jane = {
      id: 3,
      name: "Jane",
      email: "jane@mail.com",
      genres: ["rock"],
    };

    informSubscribersOfNewSongs([rapSong, folkSong], [mike, jack, jane]);

    expect(log).not.toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalledTimes(2);
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "mike@mail.com",
      })
    );
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "jack@mail.com",
      })
    );
  });
});
