// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcclerate = () => {
    const {count} = this.state
    if (count < 200) {
      // console.log('Acclerate')

      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      // console.log('braked')
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <h1 className="main_heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image_1"
        />
        <h1 className="description">Speed is {count}mph</h1>
        <p className="description_2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button_container">
          <button
            onClick={this.onAcclerate}
            type="button"
            className="button_Acclerate"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} type="button" className="button_Brake">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
