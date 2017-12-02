import React from 'react';
import Modal from './Modal';

class Cell extends React.Component {
 constructor(props){
   super(props);
   this.getDate = this.getDate.bind(this);
   }

 getDate(){
   alert(this.props.day+' '+this.props.mounth+' '+this.props.year);
 }

 render(){
   return (
     <div className={`singleCell ${ this.props.blueOrRed }`} onClick={this.getDate}>
       <a>{this.props.day}</a>
       <Modal />
     </div>
     );
 }
}

export default Cell;
