import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from './tab.component';
import Logo from '../../assets/logo.svg';

class TabGroup extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <div>
          <ol className="tab-list" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            {
              children.map((child) => {
                const { label } = child.props;
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })
            }
            </div>
            <li className="logo">
              <img src={Logo} alt="logo" style={{ width: '110px' }} />
            </li>
          </ol>
        </div>
        <div className="tab-content">
          {
            children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })
          }
        </div>
      </div>
    );
  }
}

export default TabGroup;