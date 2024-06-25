const slugify = (title) => {
  title = title.toLowerCase();
  const words = title.split(" ");
  let slug = "";
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      slug += "-";
    }
    slug += words[i];
  }
  return slug;
};

// Перевіримо роботу функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
