import React from 'react';

const Main = ({ type, participants, money, setActivity }) => {
  let baseUrl = 'http://www.boredapi.com/api/activity/';
  let filters = [
    `type=${type}`,
    `participants=${participants}`,
    `${money}`,
  ].filter((item) => item.substr(-3) !== 'all');

  const path = () => {
    if (filters.length !== 0) {
      let concatFilters = '';
      filters.forEach((filter) => {
        concatFilters = concatFilters + filter + '&';
      });
      return baseUrl + '?' + concatFilters;
    } else {
      return baseUrl;
    }
  };

  const getActivity = () => {
    fetch(`${path()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.activity !== undefined) {
          setActivity(data.activity);
        } else {
          setActivity(
            'Sorry, that combination of filters does not produce any results'
          );
        }
      });
  };

  return (
    <div>
      <button onClick={getActivity} className="get-activity">
        Give Me Idea What To Do
      </button>
    </div>
  );
};

export default Main;
