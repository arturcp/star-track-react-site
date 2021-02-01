import { Component } from "react";
import './styles.css';

export default class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        <div class={`clash-card ${this.props.cardType}`}>
          <div class={`clash-card__image clash-card__image--${this.props.cardType}`}>
            <img src={this.props.image} alt={this.props.cardType} />
          </div>
          <div class={`clash-card__level clash-card__level--${this.props.cardType}`}>{this.props.subtitle}</div>
          <div class="clash-card__unit-name">{this.props.title}</div>
          <div class="clash-card__unit-description">
            {this.props.description}
          </div>

        </div>
      </div>
    )
  }
}
