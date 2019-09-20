const URL = 'https://api.sawatchlabs.com/models/13/2017'
const table = document.querySelector('#swt-table-body')

// fetch api data and displaying it 
document.addEventListener('DOMContentLoaded', () => {
    fetch(URL)
        .then(response => response.json())
        .then(sortByVehicleModel)
        .then(populateTable)
})

// sort by vehicle model
const sortByVehicleModel = (vehicles) => {
    return vehicles.data.sort(compareModel)
}
const compareModel = (a, b) => {
    if (a.vehicle_model >= b.vehicle_model) return 1
    if (a.vehicle_model <= b.vehicle_model) return -1
    else return 0
}

// adding table rows
const populateTable = (vehicles) => {
    vehicles.map(addRow)
}
const addRow = (vehicle) => {
    const row = table.insertRow(-1)
    const yearCell = row.insertCell(0)
    const makeCell = row.insertCell(1)
    const modelCell = row.insertCell(2)
    const displacementCell = row.insertCell(3)
    const cylindersCell = row.insertCell(4)
    const vehicleClassCell = row.insertCell(5)
    const year = document.createTextNode(`${vehicle.vehicle_year}`)
    const make = document.createTextNode(`${vehicle.make}`)
    const model = document.createTextNode(`${vehicle.vehicle_model}`)
    const dipsplacement = document.createTextNode(`${vehicle.displacement}`)
    const cylinders = document.createTextNode(`${vehicle.cylinders}`)
    const vehicleClass = document.createTextNode(`${vehicle.class}`)
    yearCell.appendChild(year)
    makeCell.appendChild(make)
    modelCell.appendChild(model)
    displacementCell.appendChild(dipsplacement)
    cylindersCell.appendChild(cylinders)
    vehicleClassCell.appendChild(vehicleClass)
}