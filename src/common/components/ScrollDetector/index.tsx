import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

interface IProps  {
  children: any,
  location?: any,
  excludeRoutes?: [],
}

class ScrollDetector extends Component<IProps,{}> {



  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrollListener);
  //   this.scrollListener();
  // }

  componentDidUpdate(prevProps: any) {
    if (this.props.location && this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      const excluded = this.props.excludeRoutes && this.props.excludeRoutes.filter((route: any) =>
        this.props.location.pathname.match(route)
      ).length;
      if (!excluded) {
        animateScroll.scrollToTop({
          duration: 200,
          delay: 0,
          smooth: true,
        });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener = () => {
    const top =
      typeof window.scrollY === 'undefined'
        ? window.pageYOffset
        : window.scrollY;
    document.body.classList[top > 70 ? 'add' : 'remove']('scrolled');
  };

  render() {
    return this.props.children;
  }
}

export default ScrollDetector;
