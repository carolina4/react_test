import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    const commentsArray = comments.map((comment) => {
      var date = new Date(comment.date);
      var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];

      return (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <br />
          <div>-- {comment.author}, {month} {date.getDate()}, {date.getFullYear()}</div>
          <br />
        </div>
      );
    });

    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentsArray}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  renderDish(dish) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        {this.renderComments(dish.comments)}
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        this.renderDish(this.props.dish)
      );
    } else {
      return (<div></div>);
    }
  }
}

export default DishDetail;