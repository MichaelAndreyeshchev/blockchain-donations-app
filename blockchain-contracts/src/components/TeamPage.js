import TeamCSS from './TeamPage.module.css';
import team from './data/team.json';
import React from 'react';

const TeamPage = () => {
  return (
    <React.Fragment>
      <h1 className={TeamCSS.bigTitle}> Meet the Team </h1>
      <div className={TeamCSS.row}>
        {team.members.map((data) => {
          return (
            <div className={TeamCSS.column}>
              <div className={TeamCSS.card}>
                <div className={TeamCSS.container}>
                  <h2>{data.name}</h2>
                  <p className={TeamCSS.title}>{data.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default TeamPage;
