import React from 'react';
import got from './data.js'
import Card from './cards.js'
// console.log(got);



class Tags extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameTag: "",
        }
    }
    handleClick(name){
        this.setState({
            nameTag:name,
        })
    }
    render(){
        return (
            <>
            <ul className="all-house-names">
                {
                    got.houses.map(house => <li key={house.name} className={(this.state.nameTag === house.name) ? 'active' : ''} onClick={() => this.handleClick(house.name)} >{house.name}</li>)
                }
            </ul>
            <Card allPeople={(!this.state.nameTag) ? got.houses.map(house => house.people) : got.houses.find(house => (house.name === this.state.nameTag)).people}/>
            </>
        )
    }
}

export default Tags;