const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>Welcome to {title}</p>
      <form method="POST" action="/words">
        <input name="word" />
        <button>Отправить!</button>
      </form>
    </Layout>
  );
};
