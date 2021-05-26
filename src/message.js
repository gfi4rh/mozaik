const messages = {
  msgPA : null,
  msgGFI4RH : null
}

const changeMessage = (id, new_msg) => {
  messages[id] = new_msg;
}

const readMessage = (id) => {
  return messages[id];
}


module.exports = {
  changeMessage : changeMessage,
  readMessage : readMessage
}