function fifth_answer(text: string): void {
  let reverse_text: string = '';

  for(let i = text.length - 1; i >= 0;i--) {
    reverse_text += text[i]
  }

  console.log(`The reversed string of '${text}' is '${reverse_text}'`);
  
}

fifth_answer("this is a short string");