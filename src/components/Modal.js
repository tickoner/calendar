import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    }

  openModal(){
    console.log(this);
  }

  addEvent(event) {
    event.preventDefault();
    console.log('gonna make add some event');
    const ev = {
      eventName: this.eventName.value,
            day: this.day.value,
   participants: this.participants.value,
          about: this.about.value
    }
    console.log(ev);
  }

  render(){
    return (
      <form className="cellModal hidden" onSubmit={(e) => this.addEvent(e)}>

        <input ref={(input) => this.eventName = input} type="text" placeholder="Подія" className="modal-event" />

        <input ref={(input) => this.day = input} type="text" placeholder="Дата" className="modal-day" />

        <input ref={(input) => this.participants = input} type="text" placeholder="Імена учасників" className="modal-participants" />

        <textarea ref={(input) => this.about = input} placeholder="Опис події" rows="8" cols="80" className="modal-about"></textarea>
        <button type="submit"> Додати подію </button>
      </form>
    )
  }
}

export default Modal;
