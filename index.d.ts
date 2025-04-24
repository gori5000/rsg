/**
 * Generates a random string based on the provided charset, uniqueness, and optional formatting options.
 * 
 * @param charset - The set of characters to use for generating the random string. (e.g., "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
 * @param unique - A boolean flag indicating whether the generated string should be unique (no duplicates).
 * @param format - A string that defines the format of the generated string. For example, "AAAA-1111-XXXX".
 * @param prefix - A string to prepend to the generated random string.
 * @param suffix - A string to append to the generated random string.
 * @returns A randomly generated string based on the specified options.
 */
function Generate(charset: string, unique: boolean, format: string, prefix: string, suffix: string): string {
  let result = '';
  const charsetLength = charset.length;
  const generateRandom = (length: number) => {
    let randomString = '';
    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * charsetLength);
      randomString += charset[randomIndex];
  }
  return randomString;
  };
  if(format){
    let formatResult = '';
    for(let i = 0; i < format.length; i++){
    const char = format[i];
    if(char === 'A'){
      formatResult += generateRandom(1);
    }else if(char === '1'){
      formatResult += generateRandom(1);
    }else if(char === 'X'){
      formatResult += generateRandom(1);
    }else{
      formatResult += char;
    }
    }
    result = formatResult;
  }else{
    result = generateRandom(10);
  }
  if(unique){}
  if(prefix){
    result = prefix + result;
  }
  if(suffix){
    result = result + suffix;
  }
  return result;
}