const React = require('react');
const Layout = require('./Layout');

module.exports = function Words({ word, title, words }) {
  return (
    <Layout title={title}>
      <main className="container">
        <a href="/">Go home</a>
        <h1>
          {word}
        </h1>
        <p>The anagrams of &quot;{word}&quot; are ...</p>
        { words.length ? words.map((w) => (
          <p key={w.id}>
            {w}
          </p>
        )) : <p>No anagrams found.</p> }
      </main>
      <div>
        <form method="POST" action="/words">
          <input name="word" />
          <button>Отправить!</button>
        </form>
      </div>
    </Layout>
  );
};
