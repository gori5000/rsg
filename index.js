function Generate(charset, unique, format, prefix, suffix){
  let result = '';
  const charsetLength = charset.length;
  const generateRandom = (length) => {
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