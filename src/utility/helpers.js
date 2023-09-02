export const toUpperCaseStr = (str) =>
    str
        .split(" ")
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
