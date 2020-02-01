import Moment from 'moment'

const GetDate = (string) => {
     const date = Moment().format('YYYY-MM-DD')

    
    if(string) {
        let currentDate = Moment(date)
        currentDate.add(1, 'week');
        return currentDate.format("YYYY-MM-DD")
    }

    else
        return date;
}

export default GetDate;