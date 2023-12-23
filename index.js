const logMouseCoordinates = (coordinates) => {
  let [x, y] = coordinates;
  console.log(`x - ${x} y - ${y}`);
};

function debauncer(delay, cb) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function main() {
  let coordinates = [0, 0];
  let debauncedLog = debauncer(100, logMouseCoordinates);
  document.addEventListener("mousemove", (e) => {
    coordinates[0] = e.clientX;
    coordinates[1] = e.clientY;
    debauncedLog(coordinates);
  });
}
main();
