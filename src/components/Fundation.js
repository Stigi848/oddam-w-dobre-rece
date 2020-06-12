import React from 'react';
import img2 from '../assets/assets/Decoration.svg';
import { render } from '@testing-library/react';

class Fundations extends React.Component {
  constructor() {
    super();
    this.state = {
      fundacje: [],
      current: 1,
      currentPage: 1,
      ItemsPerPage: 3,
      error: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    fetch('http://localhost:3005/fundations')
      .then(res => res.json())
      .then(fundacje => {
        this.setState({ fundacje })
      })
      .catch(error => this.setState({ error }))
  }

  changeofData = (e) => {
    this.setState({
      current: e.target.value

    })
  }

  get fundation() {
    return this.state.fundacje?.find(fun => fun.id == this.state.current)
  }




  render() {
    const { currentPage, ItemsPerPage } = this.state;

    const indexofLastOrg = currentPage * ItemsPerPage;
    const indexofFirstOrg = indexofLastOrg - ItemsPerPage;
    const currentOrg = this.fundation?.items.slice(indexofFirstOrg, indexofLastOrg);

    const renderOrg = currentOrg?.map((org, i) => {
      return <li key={i}>{org.header} <br /> {org.desc} </li>
    });



    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.fundation?.items.length / ItemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });


    return (<div className='Fundation' id='fundaction'>

      <h1>Komu Pomagamy</h1>
      <img src={img2} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>
        <div><button value="1" className='btnFundation' onClick={this.changeofData}>Fundacjom</button></div>
        <div><button value="2" className='btnFundation' onClick={this.changeofData}  >Organizacjom Pozarządowym</button></div>
        <div><button value="3" className='btnFundation' onClick={this.changeofData}>Lokalnym zbiórkom</button></div>

      </div>
      <br />
      <br />

      <ul id="renderOrg">{renderOrg}</ul>
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
      {/* {this.state.currentPage} */}

      {this.state.error ? this.state.error === true : ''}


    </div>

    );
  }
}
export default Fundations;