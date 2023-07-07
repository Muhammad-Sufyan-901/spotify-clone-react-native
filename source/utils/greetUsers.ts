export const greetUsers = (): string => {
  const today: Date = new Date();
  let greetingText: string;

  if (today.getHours() >= 5 && today.getHours() < 12) {
    greetingText = "Selamat pagi";
  } else if (today.getHours() >= 12 && today.getHours() < 18) {
    greetingText = "Selamat siang";
  } else if (today.getHours() >= 18 && today.getHours() < 24) {
    greetingText = "Selamat malam";
  } else {
    greetingText = "Selamat Datang";
  }

  return greetingText;
};
