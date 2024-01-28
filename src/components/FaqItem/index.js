import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isValue: false}

  getButtonId = () => {
    const {isValue} = this.state
    this.setState(prevState => ({isValue: !prevState.isValue}))
    console.log(isValue)
  }

  render() {
    const {isValue} = this.state
    const {itemDetails} = this.props
    const {id, questionText, answerText} = itemDetails

    const imgUrl = !isValue
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

    const altText = !isValue ? 'plus' : 'minus'

    return (
      <li className="list-container" key={id}>
        <div className="list-con1">
          <h2 className="h1">{questionText}</h2>
          <button className="button" type="button" onClick={this.getButtonId}>
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {isValue && (
          <div>
            <hr className="hr1" />
            <p className="text-p1">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
