import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="container1">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
