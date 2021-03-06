var React = require('react');
var {Link} = require('react-router');

var Examples =(props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Salvador">Salvador, Brazil</Link>
        </li>
        <li>
          <Link to="/?location=Rio de Janeiro">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
