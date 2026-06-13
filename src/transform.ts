export const transform = (
  content: string,
  dictionary: Map<string, string>,
): string => {
  if (typeof content !== "string") {
    return "";
  }

  return content
    .split("")
    .map((char) => {
      const key = char.toLocaleLowerCase();
      return dictionary.has(key) ? dictionary.get(key)! : char;
    })
    .join("");
};

export default transform;
