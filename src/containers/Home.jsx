import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {
  Layout, Header, Content, Footer, FooterSection,
  FooterLinkList, Grid, Cell
} from 'react-mdl';

import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

export default class Home extends React.Component {
  render() {
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet title="Dashboard" />
        <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>

          <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="Dashboard" scroll />
          <Content component="main">
            <Grid component="section" className="section--center" shadow={0} noSpacing>
              <Cell col={12} tablet={12} phone={12}>
                Dashboard Contents
              </Cell>
            </Grid>

            <Footer size="mega">
              <FooterSection type="bottom" logo="More Information">
                <FooterLinkList>
                  <a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}
