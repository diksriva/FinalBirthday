import React, { useState, useEffect } from "react";
import "./css/main.css";
import "./css/normalize.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BirthCal = () => {
  const birthData = [
    { name: "Tyrion Lannister", birthday: "12/02/1978" },
    { name: "Cersei Lannister", birthday: "11/30/1975" },
    { name: "Daenerys Targaryen", birthday: "11/24/1991" },
    { name: "Arya Stark", birthday: "11/25/1996" },
    { name: "Jon Snow", birthday: "12/03/1989" },
    { name: "Sansa Stark", birthday: "08/15/1992" },
    { name: "Jorah Mormont", birthday: "12/16/1968" },
    { name: "Jaime Lannister", birthday: "12/06/1975" },
    { name: "Sandor Clegane", birthday: "11/07/1969" },
    { name: "Tywin Lannister", birthday: "10/12/1951" },
    { name: "Theon Greyjoy", birthday: "12/31/1989" },
    { name: "Samwell Tarly", birthday: "12/07/1990" },
    { name: "Joffrey Baratheon", birthday: "06/12/1992" },
    { name: "Catelyn Stark", birthday: "12/03/1962" },
    { name: "Bran Stark", birthday: "12/02/1995" },
    { name: "Petyr Baelish", birthday: "11/20/1974" },
    { name: "Robb Stark", birthday: "11/28/1986" },
    { name: "Brienne of Tarth", birthday: "11/27/1985" },
    { name: "Margaery Tyrell", birthday: "12/02/1989" },
    { name: "Stannis Baratheon", birthday: "09/14/1971" },
    { name: "Davos Seaworth", birthday: "02/13/1973" },
    { name: "Tormund Giantsbane", birthday: "12/14/1974" },
    { name: "Jeor Mormont", birthday: "11/01/1955" },
    { name: "Eddard Stark", birthday: "12/02/1963" },
    { name: "Khal Drogo", birthday: "12/05/1980" },
    { name: "Ramsay Bolton", birthday: "12/05/1976" },
    { name: "Robert Baratheon", birthday: "12/02/1965" },
    { name: "Daario Naharis", birthday: "12/02/1985" },
    { name: "Viserys Targaryen", birthday: "12/06/1984" },
  ];

  const [valueState, setValueState] = useState("2022");

  const mn = [],
    te = [],
    wd = [],
    tu = [],
    fi = [],
    st = [],
    sn = [];
  const [mon, setMonValue] = useState([]);
  const [tue, setTueValue] = useState([]);
  const [wed, setWedValue] = useState([]);
  const [thu, setThuValue] = useState([]);
  const [fri, setFriValue] = useState([]);
  const [sat, setSatValue] = useState([]);
  const [sun, setSunValue] = useState([]);

  const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [textvalue, setTextValue] = useState(birthData);
  console.log("textarea=> ",textvalue);

  const renderDay = (valueState,textvalue) => {
    textvalue.map((data, key) => {
      console.log("kanika=> ", data);
      let bdate = data.birthday;
      bdate = bdate.substring(0, 5);
      bdate = bdate + "/" + valueState;
      const birthday = new Date(bdate);
      let day1 = birthday.getDay();
      const weekday = day[day1];
      console.log(weekday);
      console.log("kanikad=> ", bdate);
      let name = data.name;
      name = name.split(" ");
      let fname = name[0];
      let lname = name[1];
      fname = fname.substring(0, 1);

      lname = lname.substring(0, 1);

      name = fname + lname;
      if (weekday === "MON") {
        mn.push({
          name: name,
        });
        setMonValue(mn);
      }
      if (weekday === "TUE") {
        te.push({
          name: name,
        });
        setTueValue(te);
      }
      if (weekday === "WED") {
        wd.push({
          name: name,
        });
        setWedValue(wd);
      }
      if (weekday === "THU") {
        tu.push({
          name: name,
        });
        setThuValue(tu);
      }
      if (weekday === "FRI") {
        fi.push({
          name: name,
        });
        setFriValue(fi);
      }
      if (weekday === "SAT") {
        st.push({
          name: name,
        });
        setSatValue(st);
      }
      if (weekday === "SUN") {
        sn.push({
          name: name,
        });
        setSunValue(sn);
      }
      return null;
    });
  };

  const handler = (event) => {
    const value = event.target.value;
    setValueState(value);
    renderDay(valueState,textvalue);
  };

   useEffect(() => {
     renderDay(valueState,textvalue);
   },[valueState,textvalue]);

  return (
    <>
      <div className="app">
        <h1 className="app__header">Birthday Cal &ndash; Work Area</h1>

        <div className="app__content">
          <div id="work-area">
            <div className="calendar-container">
              <div className="row seven-cols">
                <div className="day-of-week">
                  <p className="day">MON</p>
                  <div className='row'>
                  {mon.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <p className="dname">{data.name}</p>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">TUE</p>
                  <div className='row'>
                  {tue.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">WED</p>
                  <div className="row">
                  {wed.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">THU</p>
                  <div className="row">
                  {thu.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">FRI</p>
                  <div className="row">
                  {fri.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">SAT</p>
                  <div className="row">
                  {sat.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="day-of-week">
                  <p className="day">SUN</p>
                  <div className="row">
                  {sun.map((data, key) => {
                    return (
                      <div key={key} className={"column key" + key}>
                        <div className="dname">{data.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>

            <div className="app__inputs">
              <textarea
                className="app__txt js-json"
                id="json-input"
                placeholder="Paste the json here."
                value={JSON.stringify(textvalue)}
                onChange={event => setTextValue(JSON.parse(event.target.value))}
              />

              <div className="app__actions">
                <label>Year</label>
                <select
                  className="js-year-input"
                  value={valueState}
                  onChange={handler}
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-line app__border" />
        </div>
      </div>
    </>
  );
};

export default BirthCal;