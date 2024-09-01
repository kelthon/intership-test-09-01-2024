function fifth_answer(text: string): void {
  let reverse_text: string = '';
  let stack: string[] = [];

  for(let i = 0; i < text.length - 1; i++) {
    stack.push(text[i]);
  }

  for(let i = 0; i < text.length - 1; i++) {
    reverse_text += stack.pop();
  }

  console.log(`The reversed string of '${text}' is '${reverse_text}'`);
  
}

fifth_answer("this is a short string");