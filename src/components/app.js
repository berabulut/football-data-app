import React from 'react';
import Header from './header';
import GetDate from '../js/date';
import Axios from 'axios';
import Moment from 'moment';
import Footer from './footer';
import LeagueTable from './LeagueTable';
import FixtureTable from './fixtureTable';

export default class App extends React.Component  {
   
      options = {
        header : {
          headers: { 'X-Auth-Token':  '754836c7b68145caae82230c32b7eae1' },
        },
        url : {
          leagueTable: "http://api.football-data.org/v2/competitions/PL/standings",
          matches: `https://api.football-data.org/v2/competitions/PL/matches?dateFrom=${GetDate()}&dateTo=${GetDate('nextWeek')}`
          // https://cors-anywhere.herokuapp.com/ JUST IN CASE
        }
      }

      plFixture = {
        home: [],
        away: [],
        date: [],
        time: []
      }

      pLeague = {
        teams: [],
        points: [],
        mGoal: [],
        pGoal: [],
        avarage: []
      }

      componentDidMount() {
        this.pLeagueTable();
        this.pLeagueFixture();
      }

      pLeagueTable = async () => {
        let res =  await Axios.get(this.options.url.leagueTable, this.options.header);
        res.data.standings[0].table.map((data, index) => {
            this.pLeague.teams.push(data.team.name)
            this.pLeague.points.push(data.points)
            this.pLeague.mGoal.push(data.goalsAgainst)
            this.pLeague.pGoal.push(data.goalsFor)
            this.pLeague.avarage.push(data.goalDifference)
          })
          this.forceUpdate();
      }

      pLeagueFixture = async () => {
        let matchRes = await Axios.get(this.options.url.matches, this.options.header)
        matchRes.data.matches.map((data, index) => {
          this.plFixture.home.push(data.homeTeam.name)
          this.plFixture.away.push(data.awayTeam.name)
          this.plFixture.date.push(Moment(data.utcDate).format('MMMM Do YYYY'))
          this.plFixture.time.push(Moment(data.utcDate).format('h:mm:ss a'))
        })

        this.forceUpdate();
    }  

    render() {
        return(
          <div className = "page">
            <Header className = "header" title = "FOOTBALL-LEAGUE-APP"/>
            <div className = "premierLeagueContainer">
              <LeagueTable
              className = "section LeagueTable"
                teams = {this.pLeague.teams}
                points = {this.pLeague.points}
                avarage = {this.pLeague.avarage}
                mGoal = {this.pLeague.mGoal}
                pGoal = {this.pLeague.pGoal}
              />
                <FixtureTable
                  className = "section FixtureTable"
                  home = {this.plFixture.home}
                  away = {this.plFixture.away}
                  date = {this.plFixture.date}
                  time = {this.plFixture.time}
                />
                </div>
                <Footer className = "footer"/>
          </div>
        )
    }
}