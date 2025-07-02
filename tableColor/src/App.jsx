import { useState } from "react"


function App() {
  const [extremeColor, setExtremeColor] = useState("red")
  const [moderateColor, setModerateColor] = useState("yellow")
  const [lowColor, setLowColor] = useState("green")

  const data = [
    { id: 1, zone: "Zone A", level: "Extreme" },
    { id: 2, zone: "Zone B", level: "Moderate" },
    { id: 3, zone: "Zone C", level: "Low" },
    { id: 4, zone: "Zone D", level: "Extreme" },
    { id: 5, zone: "Zone E", level: "Low" },
    { id: 6, zone: "Zone F", level: "None" },
  ]

  const extremeOptions = ["red", "black", "maroon"]
  const moderateOptions = ["yellow", "orange", "gold"]
  const lowOptions = ["green", "lightgreen", "aqua"]

  const getTextColor = (bg) => {
    const lightColors = ["yellow", "gold", "lightgreen", "aqua", "khaki", "white"]
    return lightColors.includes(bg.toLowerCase()) ? "black" : "white"
  }

  return (
    <>
      <div className="p-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Hazard Zone Table</h1>

        <table className="w-full text-center border shadow rounded mb-10">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Zone</th>
              <th className="py-2 px-4 border">Level</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const bgColor =
                row.level === "Extreme"
                  ? extremeColor
                  : row.level === "Moderate"
                  ? moderateColor
                  : row.level === "Low"
                  ? lowColor
                  : "white"

              const textColor = getTextColor(bgColor)

              return (
                <tr key={row.id} style={{ backgroundColor: bgColor, color: textColor }}>
                  <td className="py-2 px-4 border">{row.id}</td>
                  <td className="py-2 px-4 border">{row.zone}</td>
                  <td className="py-2 px-4 border">{row.level}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* Color Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Extreme */}
          <div className="text-center">
            <p className="mb-2 font-semibold">Extreme</p>
            {extremeOptions.map((color) => (
              <button
                key={color}
                onClick={(e) => setExtremeColor(color)}
                className="px-4 py-2 m-1 rounded-full shadow"
                style={{
                  backgroundColor: color,
                  color: getTextColor(color),
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </div>

          {/* Moderate */}
          <div className="text-center">
            <p className="mb-2 font-semibold">Moderate</p>
            {moderateOptions.map((color) => (
              <button
                key={color}
                onClick={(e) => setModerateColor(color)}
                className="px-4 py-2 m-1 rounded-full shadow"
                style={{
                  backgroundColor: color,
                  color: getTextColor(color),
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </div>

          {/* Low */}
          <div className="text-center">
            <p className="mb-2 font-semibold">Low</p>
            {lowOptions.map((color) => (
              <button
                key={color}
                onClick={(e) => setLowColor(color)}
                className="px-4 py-2 m-1 rounded-full shadow"
                style={{
                  backgroundColor: color,
                  color: getTextColor(color),
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
