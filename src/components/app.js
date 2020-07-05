import React from 'react';
import Header from './header';
import GetDate from '../js/date';
import Axios from 'axios';
import Moment from 'moment';
import Footer from './footer';
import LeagueTable from './LeagueTable';
import FixtureTable from './fixtureTable';

export default class App extends React.Component  {
      
      constructor(props) {
        super(props)

        this.state = {
          plFixture: {
            home: [],
            away: [],
            date: [],
            time: []
          }, 
        
          pLeague : {
            teams: [],
            points: [],
            mGoal: [],
            pGoal: [],
            avarage: []
          }
        }
      }
      
      componentDidMount() {
        this.pLeagueTable(this.props);
        this.pLeagueFixture(this.props);
      }

      pLeagueTable = async (props) => {
        let res =  await Axios.get(props.options.url.leagueTable, props.options.header);   
        
        res.data.standings[0].table.map((data, index) => {   
          this.setState(prevState => ({

            pLeague: {
              teams : [...prevState.pLeague.teams, data.team.name],
              points: [...prevState.pLeague.points, data.points],
              mGoal: [...prevState.pLeague.mGoal, data.goalsAgainst],
              pGoal: [...prevState.pLeague.pGoal, data.goalsFor],
              avarage: [...prevState.pLeague.avarage, data.goalDifference] 
            }

          }))
        })
      }

      pLeagueFixture = async (props) => {
        let matchRes = await Axios.get(props.options.url.matches, props.options.header)
          
        matchRes.data.matches.map((data, index) => {
            this.setState(prevState => ({

              plFixture: {
                home: [...prevState.plFixture.home, data.homeTeam.name],
                away: [...prevState.plFixture.away, data.awayTeam.name],
                date: [...prevState.plFixture.date, Moment(data.utcDate).format('MMMM Do YYYY')],
                time: [...prevState.plFixture.time, Moment(data.utcDate).format('h:mm:ss a')]
              }

            }))
          })
    }  

    render() {
        return(  
          <div className = "page">
            <Header className = "header" title = "FOOTBALL LEAGUE APP"/>
            <div className = "premierLeagueContainer">
              <LeagueTable
              className = "section LeagueTable"
                teams = {this.state.pLeague.teams}
                points = {this.state.pLeague.points}
                avarage = {this.state.pLeague.avarage}
                mGoal = {this.state.pLeague.mGoal}
                pGoal = {this.state.pLeague.pGoal}
              />
                <FixtureTable
                  className = "section FixtureTable"
                  home = {this.state.plFixture.home}
                  away = {this.state.plFixture.away}
                  date = {this.state.plFixture.date}
                  time = {this.state.plFixture.time}
                />
                </div>
                <Footer className = "footer"/>
          </div>
        )
    }
}

App.defaultProps = {
  options : {
    header : {
      headers: { 'X-Auth-Token':  '754836c7b68145caae82230c32b7eae1' },
    },
    url : {
      leagueTable: "https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/PL/standings",
      matches: `https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/matches?dateFrom=${GetDate()}&dateTo=${GetDate('nextWeek')}`
      // https://cors-anywhere.herokuapp.com/ JUST IN CASE
    }
  }
}