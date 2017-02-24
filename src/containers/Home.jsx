import React from 'react';
import Helmet from 'react-helmet';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="Home"
          titleTemplate="App - %s"
          defaultTitle="My Default Title"
          onChangeClientState={this.handleChangeClientState} />

        <h1>Welcome to React boilerplate with Ant Design</h1>

        <p>
        In the development process of middleware products, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. After massive project practice and summaries, Ant Design, a design language for middleware, is refined by Experience Technology Department of Ant Financial, which aims to uniform the user interface specs for middleware projects, reduce the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development.
        </p>
        <br />
        <p>
        Ant Design, created specially for middleware design, is committed to improving the experience of users and product designers. User interface designers and user experience designers, collectively, are considered as product designers, and the boundaries of product managers, interaction designers, visual designers, front-end developers and develop engineers are blurred. Taking advantage of unitary specifications, Ant Design makes design and prototype more simple and accessible for all project members, which comprehensively  promotes experience and development efficiency of middleware products.
        </p>
      </div>
    );
  }
}
