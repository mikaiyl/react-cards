import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        { props.children }
    </div>
);

const Card = ( props ) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={ `icon fa card__descriptionIcon ${ props.extraClassName }` } />
            <div className="card__descriptionText">
                { props.name }
                <br />
                { props.description }
            </div>
        </div>
        <div className="card__price"> { props.price } </div>
    </div>
);

const App = () => (
    <CardGroup>
        <Card  extraClassName='fa-thumbs-o-up'  name='Trial'  description=''  price='Free'  ></Card>
        <Card  extraClassName='fa-trophy'  name='Basic tier'  description='(most popular)'  price='$10.00'  ></Card>
        <Card  extraClassName='fa-bolt'  name='Advanced tier'  description='(only for enterprise-level professionals)'  price='$6000.00'  ></Card>
    </CardGroup>
)

export default App;
