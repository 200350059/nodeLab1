const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`<h3>Table of Content</h3>
    <table >
    <tr>
      <td>/</td>
      <td> - </td>
      <td>Index</td> 
    </tr>
    <tr>
      <td>/about</td>
      <td> - </td>
      <td>Information about me</td> 
    </tr>
    <tr>
      <td>/contact</td>
      <td> - </td>
      <td>That's how you can contact me</td>
    </tr>
  </table>` );
});

app.get('/about', (req, res) => {
    res.send(`<h3>About Me!</h3>
    Hello! My name is Karankumar Patel.<br> I am a mechanical engineer and a computer programmer as well.`);
});

app.get('/contact', (req, res) => {
    res.send(`<h3>Contact</h3>
    You can send me mail on 200350059@student.georgianc.on.ca. <br>
    Or call me anytime on +17058960219.`);
});

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`It is port ${port}`));
