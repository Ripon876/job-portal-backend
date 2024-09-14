// Utility function to pick keys from an object
export const pick = (obj: Record<string, any>, keys: string[]) => {
  const finalObj: Record<string, any> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }

  return finalObj;
};
