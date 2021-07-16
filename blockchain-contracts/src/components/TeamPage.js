import TeamCSS from './TeamPage.module.css';

const TeamPage = () => {
  return (
    <div>
      <h1 id="title">Meet the Team </h1>

      <div className={TeamCSS.row}>
        <div className={TeamCSS.column}>
          <div className={TeamCSS.card}>
            <div className={TeamCSS.container}>
              <h2>John Doe</h2>
              <p className={TeamCSS.title}>Web Development</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button className={TeamCSS.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={TeamCSS.column}>
          <div className={TeamCSS.card}>
            <div className={TeamCSS.container}>
              <h2>John Doe</h2>
              <p className={TeamCSS.title}>Web Development</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button className={TeamCSS.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={TeamCSS.column}>
          <div className={TeamCSS.card}>
            <div className={TeamCSS.container}>
              <h2>John Doe</h2>
              <p className={TeamCSS.title}>Web Development</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button className={TeamCSS.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={TeamCSS.column}>
          <div className={TeamCSS.card}>
            <div className={TeamCSS.container}>
              <h2>John Doe</h2>
              <p className={TeamCSS.title}>Web Development</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p>
                <button className={TeamCSS.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
