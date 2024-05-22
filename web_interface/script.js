const sensors_domain = 'http://localhost:3023'

async function fetchHumidity() {
    const response = await fetch(`${sensors_domain}/humidity`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    console.log(response.json())
}

async function fetchTemperature() {
    const response = await fetch(`${sensors_domain}/temperature`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    console.log(response.json())
}

async function fetchSoilMoisture() {
    const response = await fetch(`${sensors_domain}/soilmoisture`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    console.log(response.json())
}

async function fetchData(dataTypePath) {
  const response = await fetch(`${sensors_domain}/${dataTypePath}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  console.log(response.json());
}

function getDataTypePath(buttonName) {
  switch (buttonName) {
      case 'Humidity':
          return "humidity";
          
      case 'Temperature':
          return "temperature";
          
      case 'Soil Moisture':
        return "soilmoisture";

      default:
        console.log("error!");
  }
}

function handleButtonClick(buttonName) {
    return fetchData(getDataTypePath(buttonName));
}

window.onload = function(){
  let buttons = document.getElementsByClassName("menu-button");
  let i;
  for( i = 0 ; i < buttons.length; i++){
    const button = buttons[i];
    button.onclick = handleButtonClick(button.id);
  };
}