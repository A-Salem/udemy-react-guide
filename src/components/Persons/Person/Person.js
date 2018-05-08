import React, { Component } from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor (props) {
    super(props);
    console.log('[Person.js] Inside Constructor()', props);
  }

  componentWillMount () {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[Person.js] Inside componentDidMount()');
  }

  render () {
    console.log('[Person.js] Inside render()');
    return <Aux>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Aux>

    // return [
    //   <div key="1" className={classes.Person}>
    //     <p key="2" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
    //     <p key="3">{this.props.children}</p>
    //     <input key="4" type="text" onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // ]
  }

};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
