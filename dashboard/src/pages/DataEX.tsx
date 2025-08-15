import React from 'react';
import CollapsiblePanel from '../components/CollapsiblePanel';
import '../styles/DataEX.css';

const DataEX = () => {
  // Original sample data
  const originalData = [
    {
      ID: "A-1",
      Source: "Source2",
      Severity: 3,
      Start_Time: "2016-02-08 05:46:00",
      End_Time: "2016-02-08 11:00:00",
      Start_Lat: 39.865147,
      Start_Lng: -84.058723,
      End_Lat: "NAN",
      End_Lng: "NAN",
      Distance: 0.01,
      Description: "Right lane blocked due to accident on I-70 Eastbound",
      Street: "I-70 E",
      City: "Dayton",
      County: "Montgomery",
      State: "OH",
      Zipcode: "45424",
      Country: "US",
      Timezone: "US/Eastern",
      Airport_Code: "KFFO",
      Weather_Timestamp: "2016-02-08 05:58:00",
      Temperature: 36.9,
      Wind_Chill: "NAN",
      Humidity: 91.0,
      Pressure: 29.68,
      Visibility: 10.0,
      Wind_Direction: "Calm",
      Wind_Speed: "NAN",
      Precipitation: 0.02,
      Weather_Condition: "Light Rain",
      Amenity: false,
      Bump: false,
      Crossing: false,
      Give_Way: false,
      Junction: false,
      No_Exit: false,
      Railway: false,
      Roundabout: false,
      Station: false,
      Stop: false,
      Traffic_Calming: false,
      Traffic_Signal: false,
      Turning_Loop: false,
      Sunrise_Sunset: "Night",
      Civil_Twilight: "Night",
      Nautical_Twilight: "Night",
      Astronomical_Twilight: "Night"
    },
    {
      ID: "A-2",
      Source: "Source2",
      Severity: 2,
      Start_Time: "2016-02-08 06:07:59",
      End_Time: "2016-02-08 06:37:59",
      Start_Lat: 39.928059,
      Start_Lng: -82.831184,
      End_Lat: "NAN",
      End_Lng: "NAN",
      Distance: 0.01,
      Description: "Accident on Brice Rd at Tussing Rd. Expect delays.",
      Street: "Brice Rd",
      City: "Reynoldsburg",
      County: "Franklin",
      State: "OH",
      Zipcode: "43068-3402",
      Country: "US",
      Timezone: "US/Eastern",
      Airport_Code: "KCMH",
      Weather_Timestamp: "2016-02-08 05:51:00",
      Temperature: 37.9,
      Wind_Chill: "NAN",
      Humidity: 100.0,
      Pressure: 29.65,
      Visibility: 10.0,
      Wind_Direction: "Calm",
      Wind_Speed: "NAN",
      Precipitation: 0.00,
      Weather_Condition: "Light Rain",
      Amenity: false,
      Bump: false,
      Crossing: false,
      Give_Way: false,
      Junction: false,
      No_Exit: false,
      Railway: false,
      Roundabout: false,
      Station: false,
      Stop: false,
      Traffic_Calming: false,
      Traffic_Signal: false,
      Turning_Loop: false,
      Sunrise_Sunset: "Night",
      Civil_Twilight: "Night",
      Nautical_Twilight: "Night",
      Astronomical_Twilight: "Day"
    },
    {
      ID: "A-3",
      Source: "Source2",
      Severity: 2,
      Start_Time: "2016-02-08 06:49:27",
      End_Time: "2016-02-08 07:19:27",
      Start_Lat: 39.063148,
      Start_Lng: -84.032608,
      End_Lat: "NAN",
      End_Lng: "NAN",
      Distance: 0.01,
      Description: "Accident on OH-32 State Route 32 Westbound at Dela Palma Rd.",
      Street: "State Route 32",
      City: "Williamsburg",
      County: "Clermont",
      State: "OH",
      Zipcode: "45176",
      Country: "US",
      Timezone: "US/Eastern",
      Airport_Code: "KI69",
      Weather_Timestamp: "2016-02-08 06:56:00",
      Temperature: 36.0,
      Wind_Chill: 33.3,
      Humidity: 100.0,
      Pressure: 29.67,
      Visibility: 10.0,
      Wind_Direction: "SW",
      Wind_Speed: 3.5,
      Precipitation: "NAN",
      Weather_Condition: "Overcast",
      Amenity: false,
      Bump: false,
      Crossing: false,
      Give_Way: false,
      Junction: false,
      No_Exit: false,
      Railway: false,
      Roundabout: false,
      Station: false,
      Stop: false,
      Traffic_Calming: false,
      Traffic_Signal: true,
      Turning_Loop: false,
      Sunrise_Sunset: "Night",
      Civil_Twilight: "Night",
      Nautical_Twilight: "Day",
      Astronomical_Twilight: "Day"
    },
    {
      ID: "A-4",
      Source: "Source2",
      Severity: 3,
      Start_Time: "2016-02-08 07:23:34",
      End_Time: "2016-02-08 07:53:34",
      Start_Lat: 39.747753,
      Start_Lng: -84.205582,
      End_Lat: "NAN",
      End_Lng: "NAN",
      Distance: 0.01,
      Description: "Accident on I-75 Southbound at Exits 52 52B US-35.",
      Street: "I-75 S",
      City: "Dayton",
      County: "Montgomery",
      State: "OH",
      Zipcode: "45417",
      Country: "US",
      Timezone: "US/Eastern",
      Airport_Code: "KDAY",
      Weather_Timestamp: "2016-02-08 07:38:00",
      Temperature: 35.1,
      Wind_Chill: 31.0,
      Humidity: 96.0,
      Pressure: 29.64,
      Visibility: 9.0,
      Wind_Direction: "SW",
      Wind_Speed: 4.6,
      Precipitation: "NAN",
      Weather_Condition: "Mostly Cloudy",
      Amenity: false,
      Bump: false,
      Crossing: false,
      Give_Way: false,
      Junction: false,
      No_Exit: false,
      Railway: false,
      Roundabout: false,
      Station: false,
      Stop: false,
      Traffic_Calming: false,
      Traffic_Signal: false,
      Turning_Loop: false,
      Sunrise_Sunset: "Night",
      Civil_Twilight: "Day",
      Nautical_Twilight: "Day",
      Astronomical_Twilight: "Day"
    },
    {
      ID: "A-5",
      Source: "Source2",
      Severity: 2,
      Start_Time: "2016-02-08 07:39:07",
      End_Time: "2016-02-08 08:09:07",
      Start_Lat: 39.627781,
      Start_Lng: -84.188354,
      End_Lat: "NAN",
      End_Lng: "NAN",
      Distance: 0.01,
      Description: "Accident on McEwen Rd at OH-725 Miamisburg Centerville Rd.",
      Street: "Miamisburg Centerville Rd",
      City: "Dayton",
      County: "Montgomery",
      State: "OH",
      Zipcode: "45459",
      Country: "US",
      Timezone: "US/Eastern",
      Airport_Code: "KMGY",
      Weather_Timestamp: "2016-02-08 07:53:00",
      Temperature: 36.0,
      Wind_Chill: 33.3,
      Humidity: 89.0,
      Pressure: 29.65,
      Visibility: 6.0,
      Wind_Direction: "SW",
      Wind_Speed: 3.5,
      Precipitation: "NAN",
      Weather_Condition: "Mostly Cloudy",
      Amenity: false,
      Bump: false,
      Crossing: false,
      Give_Way: false,
      Junction: false,
      No_Exit: false,
      Railway: false,
      Roundabout: false,
      Station: false,
      Stop: false,
      Traffic_Calming: false,
      Traffic_Signal: true,
      Turning_Loop: false,
      Sunrise_Sunset: "Day",
      Civil_Twilight: "Day",
      Nautical_Twilight: "Day",
      Astronomical_Twilight: "Day"
    }
  ];
  

  const descriptionHeaders = [
    "Severity", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng",
    "Distance(mi)", "Temperature(F)", "Wind_Chill(F)", "Humidity(%)",
    "Pressure(in)", "Visibility(mi)", "Wind_Speed(mph)", "Precipitation(in)"
  ];

  const descriptionRows = {
    count: ["7.72e+06", "7.72e+06", "7.72e+06", "4.32e+06", "4.32e+06", "7.72e+06", "7.56e+06", "5.72e+06", "7.55e+06", "7.58e+06", "7.55e+06", "7.15e+06", "5.52e+06"],
    mean: ["2.21", "36.20", "-94.70", "36.26", "-95.72", "0.56", "61.66", "58.25", "64.83", "29.53", "9.09", "7.68", "0.008"],
    std: ["0.49", "5.08", "17.39", "5.27", "18.11", "1.78", "19.01", "22.39", "22.82", "1.01", "2.69", "5.42", "0.11"],
    min: ["1", "24.55", "-124.62", "24.57", "-124.54", "0", "-89", "-89", "1", "0", "0", "0", "0"],
    "25%": ["2", "33.40", "-117.22", "33.46", "-117.75", "0", "49", "43", "48", "29.37", "10", "4.6", "0"],
    "50%": ["2", "35.82", "-87.77", "36.18", "-88.03", "0.03", "64", "62", "67", "29.86", "10", "7", "0"],
    "75%": ["2", "40.08", "-80.35", "40.18", "-80.25", "0.46", "76", "75", "84", "30.03", "10", "10.4", "0"],
    max: ["4", "49", "-67.11", "49.08", "-67.10", "441.75", "207", "207", "100", "58.63", "140", "1087", "36.47"]
  };

  const infoData = [
    ["ID", "object"], ["Source", "object"], ["Severity", "int64"], ["Start_Time", "object"],
    ["End_Time", "object"], ["Start_Lat", "float64"], ["Start_Lng", "float64"],
    ["End_Lat", "float64"], ["End_Lng", "float64"], ["Distance(mi)", "float64"],
    ["Description", "object"], ["Street", "object"], ["City", "object"], ["County", "object"],
    ["State", "object"], ["Zipcode", "object"], ["Country", "object"], ["Timezone", "object"],
    ["Airport_Code", "object"], ["Weather_Timestamp", "object"], ["Temperature(F)", "float64"],
    ["Wind_Chill(F)", "float64"], ["Humidity(%)", "float64"], ["Pressure(in)", "float64"],
    ["Visibility(mi)", "float64"], ["Wind_Direction", "object"], ["Wind_Speed(mph)", "float64"],
    ["Precipitation(in)", "float64"], ["Weather_Condition", "object"], ["Amenity", "bool"],
    ["Bump", "bool"], ["Crossing", "bool"], ["Give_Way", "bool"], ["Junction", "bool"],
    ["No_Exit", "bool"], ["Railway", "bool"], ["Roundabout", "bool"], ["Station", "bool"],
    ["Stop", "bool"], ["Traffic_Calming", "bool"], ["Traffic_Signal", "bool"],
    ["Turning_Loop", "bool"], ["Sunrise_Sunset", "object"], ["Civil_Twilight", "object"],
    ["Nautical_Twilight", "object"], ["Astronomical_Twilight", "object"]
  ];

  const nanData = [
    ["ID", 0], ["Source", 0], ["Severity", 0], ["Start_Time", 0], ["End_Time", 0],
    ["Start_Lat", 0], ["Start_Lng", 0], ["End_Lat", 3402762], ["End_Lng", 3402762],
    ["Distance(mi)", 0], ["Description", 5], ["Street", 10869], ["City", 253],
    ["County", 0], ["State", 0], ["Zipcode", 1915], ["Country", 0], ["Timezone", 7808],
    ["Airport_Code", 22635], ["Weather_Timestamp", 120228], ["Temperature(F)", 163853],
    ["Wind_Chill(F)", 1999019], ["Humidity(%)", 174144], ["Pressure(in)", 140679],
    ["Visibility(mi)", 177098], ["Wind_Direction", 175206], ["Wind_Speed(mph)", 571233],
    ["Precipitation(in)", 2203586], ["Weather_Condition", 173459], ["Amenity", 0],
    ["Bump", 0], ["Crossing", 0], ["Give_Way", 0], ["Junction", 0], ["No_Exit", 0],
    ["Railway", 0], ["Roundabout", 0], ["Station", 0], ["Stop", 0],
    ["Traffic_Calming", 0], ["Traffic_Signal", 0], ["Turning_Loop", 0],
    ["Sunrise_Sunset", 23246], ["Civil_Twilight", 23246],
    ["Nautical_Twilight", 23246], ["Astronomical_Twilight", 23246]
  ];
 
  const CleanedData = [
      {
        Source: "Source2",
        Severity: 3,
        Start_Lat: 39.865147,
        Start_Lng: -84.058723,
        Distance_mi: 0.01,
        Description: "Right lane blocked due to accident on I-70 Eas...",
        City: "Dayton",
        County: "Montgomery",
        State: "OH",
        Airport_Code: "KFFO",
        Temperature_F: 36.9,
        Humidity_Percent: 91.0,
        Pressure_in: 29.68,
        Visibility_mi: 10.0,
        Wind_Direction: "CALM",
        Wind_Speed_mph: 4.6,
        Precipitation_in: 0.02,
        Weather_Condition: "Light Rain",
        Amenity: false,
        Crossing: false,
        Give_Way: false,
        Junction: false,
        No_Exit: false,
        Railway: false,
        Station: false,
        Stop: false,
        Traffic_Signal: false,
        Sunrise_Sunset: "Night",
        Hour: 5,
        Day: 8,
        Month: 2,
        Year: 2016,
        Weekday: "Monday",
        Duration_Minutes: 314,
        Desc_Word_Count: 16,
        Desc_Sentiment: 0.080357,
        has_accident: true,
        has_blocked: true,
        has_delay: false,
        has_construction: false,
        has_closed: false,
        has_fire: false,
        has_collision: false,
        has_overturned: false,
        has_disabled: false,
        has_lane: false,
        has_roadwork: true,
        has_debris: false,
      },
      {
        Source: "Source2",
        Severity: 2,
        Start_Lat: 39.928059,
        Start_Lng: -82.831184,
        Distance_mi: 0.01,
        Description: "Accident on Brice Rd at Tussing Rd. Expect del...",
        City: "Reynoldsburg",
        County: "Franklin",
        State: "OH",
        Airport_Code: "KCMH",
        Temperature_F: 37.9,
        Humidity_Percent: 100.0,
        Pressure_in: 29.65,
        Visibility_mi: 10.0,
        Wind_Direction: "CALM",
        Wind_Speed_mph: 4.6,
        Precipitation_in: 0.0,
        Weather_Condition: "Light Rain",
        Amenity: false,
        Crossing: false,
        Give_Way: false,
        Junction: false,
        No_Exit: false,
        Railway: false,
        Station: false,
        Stop: false,
        Traffic_Signal: false,
        Sunrise_Sunset: "Night",
        Hour: 6,
        Day: 8,
        Month: 2,
        Year: 2016,
        Weekday: "Monday",
        Duration_Minutes: 30,
        Desc_Word_Count: 9,
        Desc_Sentiment: 0.0,
        has_accident: true,
        has_blocked: false,
        has_delay: true,
        has_construction: false,
        has_closed: false,
        has_fire: false,
        has_collision: false,
        has_overturned: false,
        has_disabled: false,
        has_lane: false,
        has_roadwork: false,
        has_debris: false,
      },
      {
        Source: "Source2",
        Severity: 2,
        Start_Lat: 39.063148,
        Start_Lng: -84.032608,
        Distance_mi: 0.01,
        Description: "Accident on OH-32 State Route 32 Westbound at ...",
        City: "Williamsburg",
        County: "Clermont",
        State: "OH",
        Airport_Code: "KI69",
        Temperature_F: 36.0,
        Humidity_Percent: 100.0,
        Pressure_in: 29.67,
        Visibility_mi: 10.0,
        Wind_Direction: "SW",
        Wind_Speed_mph: 3.5,
        Precipitation_in: 0.0,
        Weather_Condition: "Overcast",
        Amenity: false,
        Crossing: false,
        Give_Way: false,
        Junction: false,
        No_Exit: false,
        Railway: false,
        Station: false,
        Stop: false,
        Traffic_Signal: true,
        Sunrise_Sunset: "Night",
        Hour: 6,
        Day: 8,
        Month: 2,
        Year: 2016,
        Weekday: "Monday",
        Duration_Minutes: 30,
        Desc_Word_Count: 13,
        Desc_Sentiment: 0.0,
        has_accident: true,
        has_blocked: false,
        has_delay: true,
        has_construction: false,
        has_closed: false,
        has_fire: false,
        has_collision: false,
        has_overturned: false,
        has_disabled: false,
        has_lane: false,
        has_roadwork: false,
        has_debris: false,
      },
      {
        Source: "Source2",
        Severity: 3,
        Start_Lat: 39.747753,
        Start_Lng: -84.205582,
        Distance_mi: 0.01,
        Description: "Accident on I-75 Southbound at Exits 52 52B US...",
        City: "Dayton",
        County: "Montgomery",
        State: "OH",
        Airport_Code: "KDAY",
        Temperature_F: 35.1,
        Humidity_Percent: 96.0,
        Pressure_in: 29.64,
        Visibility_mi: 9.0,
        Wind_Direction: "SW",
        Wind_Speed_mph: 4.6,
        Precipitation_in: 0.0,
        Weather_Condition: "Mostly Cloudy",
        Amenity: false,
        Crossing: false,
        Give_Way: false,
        Junction: false,
        No_Exit: false,
        Railway: false,
        Station: false,
        Stop: false,
        Traffic_Signal: false,
        Sunrise_Sunset: "Night",
        Hour: 7,
        Day: 8,
        Month: 2,
        Year: 2016,
        Weekday: "Monday",
        Duration_Minutes: 30,
        Desc_Word_Count: 11,
        Desc_Sentiment: 0.0,
        has_accident: true,
        has_blocked: false,
        has_delay: true,
        has_construction: false,
        has_closed: false,
        has_fire: false,
        has_collision: false,
        has_overturned: false,
        has_disabled: false,
        has_lane: false,
        has_roadwork: false,
        has_debris: false,
      },
      {
        Source: "Source2",
        Severity: 2,
        Start_Lat: 39.627781,
        Start_Lng: -84.188354,
        Distance_mi: 0.01,
        Description: "Accident on McEwen Rd at OH-725 Miamisburg Cen...",
        City: "Dayton",
        County: "Montgomery",
        State: "OH",
        Airport_Code: "KMGY",
        Temperature_F: 36.0,
        Humidity_Percent: 89.0,
        Pressure_in: 29.65,
        Visibility_mi: 6.0,
        Wind_Direction: "SW",
        Wind_Speed_mph: 3.5,
        Precipitation_in: 0.0,
        Weather_Condition: "Mostly Cloudy",
        Amenity: false,
        Crossing: false,
        Give_Way: false,
        Junction: false,
        No_Exit: false,
        Railway: false,
        Station: false,
        Stop: false,
        Traffic_Signal: true,
        Sunrise_Sunset: "Day",
        Hour: 7,
        Day: 8,
        Month: 2,
        Year: 2016,
        Weekday: "Monday",
        Duration_Minutes: 30,
        Desc_Word_Count: 11,
        Desc_Sentiment: 0.0,
        has_accident: true,
        has_blocked: false,
        has_delay: true,
        has_construction: false,
        has_closed: false,
        has_fire: false,
        has_collision: false,
        has_overturned: false,
        has_disabled: false,
        has_lane: false,
        has_roadwork: false,
        has_debris: false,
      }
    ];
    const infoCleanedData = [
      ["Source", "object"],
      ["Severity", "int64"],
      ["Start_Lat", "float64"],
      ["Start_Lng", "float64"],
      ["Distance(mi)", "float64"],
      ["Description", "object"],
      ["City", "object"],
      ["County", "object"],
      ["State", "object"],
      ["Airport_Code", "object"],
      ["Temperature(F)", "float64"],
      ["Humidity(%)", "float64"],
      ["Pressure(in)", "float64"],
      ["Visibility(mi)", "float64"],
      ["Wind_Direction", "object"],
      ["Wind_Speed(mph)", "float64"],
      ["Precipitation(in)", "float64"],
      ["Weather_Condition", "object"],
      ["Amenity", "bool"],
      ["Crossing", "bool"],
      ["Give_Way", "bool"],
      ["Junction", "bool"],
      ["No_Exit", "bool"],
      ["Railway", "bool"],
      ["Station", "bool"],
      ["Stop", "bool"],
      ["Traffic_Signal", "bool"],
      ["Sunrise_Sunset", "object"],
      ["Hour", "int32"],
      ["Day", "int32"],
      ["Month", "int32"],
      ["Year", "int32"],
      ["Weekday", "object"],
      ["Duration_Minutes", "float64"],
      ["Desc_Word_Count", "int64"],
      ["Desc_Sentiment", "float64"],
      ["has_accident", "int64"],
      ["has_blocked", "int64"],
      ["has_delay", "int64"],
      ["has_construction", "int64"],
      ["has_closed", "int64"],
      ["has_fire", "int64"],
      ["has_collision", "int64"],
      ["has_overturned", "int64"],
      ["has_disabled", "int64"],
      ["has_lane", "int64"],
      ["has_roadwork", "int64"],
      ["has_debris", "int64"]
    ];
    
    const NonanData = [
      ["Source", 0], ["Severity", 0], ["Start_Lat", 0], ["Start_Lng", 0], ["Distance(mi)", 0],
      ["Description", 0], ["City", 0], ["County", 0], ["State", 0], ["Airport_Code", 0],
      ["Temperature(F)", 0], ["Humidity(%)", 0], ["Pressure(in)", 0], ["Visibility(mi)", 0],
      ["Wind_Direction", 0], ["Wind_Speed(mph)", 0], ["Precipitation(in)", 0], ["Weather_Condition", 0],
      ["Amenity", 0], ["Crossing", 0], ["Give_Way", 0], ["Junction", 0], ["No_Exit", 0],
      ["Railway", 0], ["Station", 0], ["Stop", 0], ["Traffic_Signal", 0], ["Sunrise_Sunset", 0],
      ["Hour", 0], ["Day", 0], ["Month", 0], ["Year", 0], ["Weekday", 0],
      ["Duration_Minutes", 0], ["Desc_Word_Count", 0], ["Desc_Sentiment", 0], ["has_accident", 0],
      ["has_blocked", 0], ["has_delay", 0], ["has_construction", 0], ["has_closed", 0], ["has_fire", 0],
      ["has_collision", 0], ["has_overturned", 0], ["has_disabled", 0], ["has_lane", 0],
      ["has_roadwork", 0], ["has_debris", 0]
    ];
    
  

  return (
    <div className="dataex-container">
      <div className="page-header">
        <h1>Data Exploration</h1>
        <p>Detailed analysis of the US accident dataset</p>
      </div>
      
      <div className="data-sections">
        <CollapsiblePanel title="Original Data" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  {Object.keys(originalData[0]).map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {originalData.map((row, idx) => (
                  <tr key={idx}>
                    {Object.entries(row).map(([key, value]) => (
                      <td key={key}>{value !== null ? value.toString() : ''}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel title="Data Description" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  {descriptionHeaders.map((col) => <th key={col}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {Object.entries(descriptionRows).map(([key, values]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    {values.map((val, idx) => <td key={idx}>{val}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel title="Data Info" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {infoData.map(([field, type]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel title="Missing Values" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>NaN Count</th>
                </tr>
              </thead>
              <tbody>
                {nanData.map(([col, count]) => (
                  <tr key={col.toString()}>
                    <td>{col}</td>
                    <td>{count.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel title="Data Shape" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rows</th>
                  <th>Columns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7,728,394</td>
                  <td>46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>
      </div>
      <CollapsiblePanel title="Cleaned Data" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  {Object.keys(CleanedData[0]).map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CleanedData.map((row, idx) => (
                  <tr key={idx}>
                    {Object.entries(row).map(([key, value]) => (
                      <td key={key}>{value !== null ? value.toString() : ''}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>
        <CollapsiblePanel title="Cleaned Data Info" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {infoCleanedData.map(([field, type]) => (
                  <tr key={field}>
                    <td>{field}</td>
                    <td>{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>
        <CollapsiblePanel title="Missing Values (Cleaned Data)" className="data-section">
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>NaN Count</th>
                </tr>
              </thead>
              <tbody>
                {NonanData.map(([col, count]) => (
                  <tr key={col.toString()}>
                    <td>{col}</td>
                    <td>{count.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsiblePanel>
    </div>
  );
};

export default DataEX;