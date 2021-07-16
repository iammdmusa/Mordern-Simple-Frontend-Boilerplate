import "./styles/index.scss";

const helloFellow = () => {
  return "Welcome to hell of a ride!";
};

export const numberConvertIntoReadableString = (num) => {
  if (num > 999 && num < 1000000) {
    // convert to K for number from > 1000 < 1 million
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    // convert to M for number from > 1 million
    return (num / 1000000).toFixed(1) + "M";
  } else if (num <= 999) {
    // if value < 1000, nothing to do
    return num;
  }
};

const getRandom = (min, max) => {
  return Math.floor(
    Math.random() * (Math.ceil(max) - Math.floor(min) + 1) + min
  );
};

const getConvidInformationAllStates = {
  badenWuerttemberg: numberConvertIntoReadableString(getRandom(500, 50000)),
  bayern: numberConvertIntoReadableString(getRandom(500, 50000)),
  berlin: numberConvertIntoReadableString(getRandom(500, 50000)),
  berndenburg: numberConvertIntoReadableString(getRandom(500, 50000)),
  bremen: numberConvertIntoReadableString(getRandom(500, 50000)),
  hamburg: numberConvertIntoReadableString(getRandom(500, 50000)),
  hessen: numberConvertIntoReadableString(getRandom(500, 50000)),
  mecklenburgVorpommern: numberConvertIntoReadableString(getRandom(100, 5000)),
  niedersachsen: numberConvertIntoReadableString(getRandom(200, 5000)),
  nordheinWestfalen: numberConvertIntoReadableString(getRandom(500, 50000)),
  rheinlandPfalz: numberConvertIntoReadableString(getRandom(500, 50000)),
  saarland: numberConvertIntoReadableString(getRandom(500, 50000)),
  sachsen: numberConvertIntoReadableString(getRandom(500, 50000)),
  sachsenAnhalt: numberConvertIntoReadableString(getRandom(500, 50000)),
  schleswingHolstein: numberConvertIntoReadableString(getRandom(500, 50000)),
  thueringen: numberConvertIntoReadableString(getRandom(500, 50000)),
};

// helloFellow();
// getConvidInformationAllStates();

const load = () => {
  // document.getElementById("root").innerHTML = helloFellow();
  const renderConvid19 = () =>
    `
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.badenWuerttemberg}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.bayern}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.berlin}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.bremen}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.hamburg}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.hessen}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.mecklenburgVorpommern}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.niedersachsen}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.nordheinWestfalen}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.rheinlandPfalz}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.saarland}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.sachsen}
        </div>
        <div>
          Baden Wuerttemberg : ${getConvidInformationAllStates.sachsenAnhalt}
        </div>
        <div>
          Schleswing Holstein : ${getConvidInformationAllStates.schleswingHolstein}
        </div>
        <div>
          Thüringen : ${getConvidInformationAllStates.thueringen}
        </div>
      `;
  document.getElementById("root").innerHTML = renderConvid19();
};

load();
