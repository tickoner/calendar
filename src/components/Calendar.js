import React from 'react';
import moment from 'moment';
import Cell from './Cell';

class Calendar extends React.Component {
	constructor(props){
		super(props);

    this.addFish = this.addFish.bind(this);
		this.state = {
			monthRef: 0,
      eventSt: {},
      order: {}
		}
		this.forward = this.forward.bind(this);
		this.backward = this.backward.bind(this);
	}

  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};
    //add in our date
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish
    //setState
    this.setState({ fishes: fishes});
  }

	forward(){
		let currentMonth = this.state.monthRef;
		this.setState({monthRef: currentMonth + 1});
	}

	backward(){
		let currentMonth = this.state.monthRef;
		this.setState({monthRef: currentMonth - 1});
		console.log(this.state.monthRef);
	}
  goToday(){
    alert('open Today');
  }

	render(){
		const startWeek = moment().startOf('month').add(this.state.monthRef, "month").week();
		const endWeek = moment().endOf('month').add(this.state.monthRef, "month").week();
		let calendar = [];
		let weeks = [];
    let days= {
      sun: "Неділя",
      mon: "Понеділок",
      tue: "Вівторок",
      wed: "Середа",
      thu: "Четвер",
      fri: "Пятниця",
      sat: "Субота"
    }

		for(var week = startWeek;week<endWeek+1;week++){
  			calendar.push({
    			week:week,
    			days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('isoweek').clone().add(n + i, 'day'))
  			})
		}

		for(var d=0;d<calendar.length;d++){
			let daysInWeek = [];
			for(var e=0;e<7;e++){
        if(e==6) {
          daysInWeek.push(<Cell day={calendar[d].days[e].format("D")}
                                mounth={calendar[d].days[e].format("MMM")}
                                year={calendar[d].days[e].format("YYYY")}
                                blueOrRed='red'
                          />);
        } else {
          daysInWeek.push(<Cell day={calendar[d].days[e].format("D")}
                                mounth={calendar[d].days[e].format("MMM")}
                                year={calendar[d].days[e].format("YYYY")}
                                blueOrRed='gray'/>);
        }
			}
			weeks.push(<div className="cellRow">{daysInWeek}</div>);
		}
		console.log(weeks);
		return(
			<div className="calendar-container">
        <div className="calendar-header">
          <div className="calendar-control-container">
            <a className="ctrl-btn btn-left" onClick={this.backward} title="backward">&lt;</a>
            <h2>{moment().startOf('month').add(this.state.monthRef, "month").format("MMMM YYYY")}</h2>
            <a  className="ctrl-btn" onClick={this.forward} title="forward">&gt;</a>
            <a className="ctrl-btn btn-right btn-today" onClick={this.goToday}>today</a>
          </div>
          <div className="calendar-search-container">
            <input type="text" name="search" value="" placeholder=""></input>
          </div>
        </div>
        <div className="calendar-day-cont">
          <div className="calendar-day-head">{days.mon}</div>
          <div className="calendar-day-head">{days.tue}</div>
          <div className="calendar-day-head">{days.wed}</div>
          <div className="calendar-day-head">{days.thu}</div>
          <div className="calendar-day-head">{days.fri}</div>
          <div className="calendar-day-head">{days.sat}</div>
          <div className="calendar-day-head">{days.sun}</div>
        </div>
				<div className="cell-container">
					{weeks}
				</div>
				<h4></h4>
			</div>
		)
	}
 }

export default Calendar;
