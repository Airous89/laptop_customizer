import React, { Component } from 'react';




class customOptions extends Component {
    render() {
     const features = Object.keys(this.props.features)
     .map(key => {
        const options = this.props.features[key].map((item,index) => {
            const ListClass = items.name === this.props.list[key].name?  'feature__List' : '';
            const CoolClass = 'Cool__option ' + ListClass;
            return <li key={index} className="itemOnSale">
                <div className={CoolClass}
                onClick={e => this.props.updateFeature(key, item)}>
                    {item.name}
                    ({new Intl.NumberFormat('en-us', {style: 'currenty', currency: 'USD'})
                    .format(item.cost) })
                </div>
            </li>
        });
        return <div className ="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
                {options}
            </ul>
        </div>
     })   
     return (
         <div className="return">
             <section className="form">
                { features }
             </section>
         </div>
    )};
}

export default customOptions;