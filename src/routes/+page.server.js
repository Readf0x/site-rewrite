const hello = [
  ["Hi", "English"],
  ["Hola", "Spanish"],
  ["Nǐ hǎo", "Chinese"],
  ["Konnichiwa", "Japanese"],
  ["Buongiorno", "Italian"],
  ["Namaste", "Hindi"],
  ["Bonjour", "French"],
  ["Mrhban", "Arabic"],
  ["Hyālō", "Bengali"],
  ["Olá", "Portuguese"],
  ["Privyet", "Russian"],
  ["Halo", "Indonesian"],
  ["Hallo", "German"],
  ["Merhaba", "Turkish"],
  ["Annyeong", "Korean"],
  ["Hello", "English"]
];

export const load = async () => {
  return { hello: hello[Math.floor(Math.random() * hello.length)] };
};
