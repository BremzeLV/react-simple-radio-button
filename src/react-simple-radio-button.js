import React from 'react'
import './style.scss'

class ReactSimpleRadioButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      isOptionsVisible: false
    }
  }

  onOptionClick = (item) => {
    this.props.onChange ? this.props.onChange(item) : null;
  }

  indexOf = (options, value) => {
    let optionIndex = -1;
    for (let i = 0; i < options.length; i++) {
      if (value == options[i]) {
        optionIndex = i;
        break;
      }
    }
    return optionIndex;
  }

  render() {
    let self = this
    let props = this.props
    let state = this.state
    let className = `${props.className ? props.className : '' } custom_radio_component`
    let width = props.width + 'px'
    let isLinear = props.isLinear;
    let options = (props.options && Array.isArray(props.options)) ? props.options : [];
    let defaultSelected = props.defaultSelected && this.indexOf(props.options, props.defaultSelected) > -1 ? props.defaultSelected : null;
    
    return <div className={className}>
      <div className="container">
        <ul className={'radio_group_container ' + (isLinear ? 'linear' : '')}>
          {
            options.map((item, index)=>{
              return <li key={index} className={'radio_item ' + (isLinear ? 'linear' : '') + (item === defaultSelected ? ' selected': '')}>
                <input type="radio" 
                  defaultChecked={item === defaultSelected} 
                  id={"option_label" + index} 
                  name="selector"/>
                <label htmlFor={"option_label" + index} onClick={() => this.onOptionClick(item)} className="radio_label">{item}</label>
                <div className="check"></div>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  }
}

export default ReactSimpleRadioButton
