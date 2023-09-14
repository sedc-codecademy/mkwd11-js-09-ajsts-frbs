const { sendEmail } = require("./email.service");
const { log } = require("./logger.service");

module.exports = {
  informSubscribersOfNewSongs: (songs, subscribers) => {
    if (!songs?.length || !subscribers?.length) {
      throw new Error("No songs or subscribers!");
    }

    const rapSongs = songs.filter(s => s.genre === "rap");

    if (!rapSongs.length) {
      log("No rap songs!");
    }

    const rapSubscribers = subscribers.filter(s => s.genres.includes("rap"));

    if (!rapSubscribers.length) {
      log("No rap subscribers");
    }

    if (rapSongs.length && rapSubscribers.length) {
      rapSubscribers.forEach(s => {
        sendEmail({
          to: s.email,
          subject: "New rap songs!",
          body: `Hey ${s.name}, we have some new rap songs for you.`,
        });
      });
    }
  },
};
