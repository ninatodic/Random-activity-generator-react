import React from 'react';

const Filter = ({ setType, setParticipants, setMoney }) => {
  const selectType = (event) => setType(event.target.value);
  const selectParticipants = (event) => setParticipants(event.target.value);
  const selectMoney = (event) => setMoney(event.target.value);
  return (
    <div className="filter">
      <label htmlFor="type">Type of activity:</label>
      <select onChange={selectType} name="type" id="type">
        <option value="all">All types</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">Diy</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>

      <label htmlFor="participants">Number of participants:</label>
      <select
        onChange={selectParticipants}
        name="participants"
        id="participants"
      >
        <option value="all">It does not matter</option>
        <option value="1">Only me</option>
        <option value="2">A friend and I</option>
        <option value="3">Three of us</option>
        <option value="4">Four!</option>
        <option value="5">Bunch of friends</option>
      </select>

      <label htmlFor="price">Money needed:</label>
      <select onChange={selectMoney} name="price" id="price">
        <option value="all">It is irrelevant</option>
        <option value="price=0.0">No money needed</option>
        <option value="minprice=0.01&maxprice=1">Some funds needed</option>
      </select>
    </div>
  );
};

export default Filter;
