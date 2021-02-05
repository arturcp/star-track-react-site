import { Component } from "react";
import './styles.scss';

export default class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className={`clash-card ${this.props.cardType}`}>
          <div className="clash-card__image">
            <img src={this.props.image} alt={this.props.cardType} />
          </div>
          <div className={`clash-card__level clash-card__level--${this.props.cardType}`}>{this.props.subtitle}</div>
          <div className="clash-card__unit-name">{this.props.title}</div>
          <div className="clash-card__unit-description">
            {this.props.description}
          </div>

        </div>
      </div>
    )
  }
}
