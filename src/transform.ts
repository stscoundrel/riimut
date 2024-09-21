export const transform = (
  content: string,
  dictionary: Map<string, string>,
): string => {
  let result = "";
  const parts: string[] = content.split("");

  for (const part of parts) {
    const partKey = part.toLocaleLowerCase();

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  }

  return result;
};

export default transform;
