import React from "react";

import Calendar from "react-big-calendar";
import moment from 'moment';
import 'moment/locale/ko';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import mainStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

//moment.lang('ko'); // 언어팩 변경

const localizer = Calendar.momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class BigSchedulerPage extends React.Component {
    state = {
        events: [
          {
            id : 1,
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Some title1",
            resource: "A",
            //color: '#3174ad'
            classname: 'rbc-event',
            style: 'background-color:#3174ad'
          },
          {
            id : 2,
            start: new Date(moment().subtract(6, "days")),
            end: new Date(moment().subtract(10, "days")),
            title: "Some title2",
            resource: "B",
            //className: '#ad314f'
            classname: 'rbc-event2',
            style: 'background-color:#ad314f'
          },
          {
            id : 3,
            start: new Date(moment().add(1, "days")),
            end: new Date(moment().add(4, "days")),
            title: "Some title3",
            resource: "C",
            //className: '#ad314f'
            classname: 'rbc-event'
          }
        ],
        selectedIdx : 0
    };

    onSelectEvent = ({ title, start, end, allDay, resource, id }) => {
        console.log("onSelectEvent resource : " + resource);
        console.log("onSelectEvent idx : " + id);
    
        // change the border color just for fun
        //$(this).css('border-color', 'red');
    };

    onDoubleClickEvent = ({title, start, end, allDay}) => {
        console.log("onDoubleClickEvent" + title);
    };

    onSelectSlot = ({ title, start, end, allDay, resource, id }) => {
        console.log("onSelectSlot idx : " + id);
    };

    // 일정 리사이즈
    onEventResize = ({ event, start, end, allDay, id }) => {
        this.setState(state => {
            state.events[event.id - 1].start = start;
            state.events[event.id - 1].end = end;
            return { events: state.events };
        });
    };

    // 일정 DROP 시
    onEventDrop = ({ event, start, end, allDay, id }) => {
        this.setState(state => {
            state.events[event.id - 1].start = start;
            state.events[event.id - 1].end = end;
            return { events: state.events };
        });
    };

    render() {

        return (
            <div>
                <DnDCalendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    onEventDrop={this.onEventDrop}
                    onEventResize={this.onEventResize}
                    onSelectEvent={this.onSelectEvent}
                    onDoubleClickEvent={this.onDoubleClickEvent}
                    onSelectSlot={this.onSelectSlot}
                    resizable
                    selectable
                    style={{ height: "100vh" }}
                />
            </div>
        );
    };
}


export default withStyles(mainStyle)(BigSchedulerPage);
 


