const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log('Connection succesful.')
    conn.write('Name: CHU');
  })

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
}