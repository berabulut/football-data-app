import React from 'react';
import Moment from 'moment';
import GetDate from '../js/date'
import Axios from  'axios'
import pLogo from '../styles/pics/pleague.png'

export default class leagueTable extends React.Component {
    state = {
        team: [],
        points: [],
        mGoal: [],
        pGoal: [],
        avarage: []
      }
      
      options = {
        header : {
          headers: { 'X-Auth-Token':  '754836c7b68145caae82230c32b7eae1' },
        },
        url : {
          leagueTable: "https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/PL/standings",
          matches: `https://api.football-data.org/v2/competitions/PL/matches?dateFrom=${GetDate()}&dateTo=${GetDate('nextWeek')}`
        }
      }

      fixture = {
        home: [],
        away: [],
        date: [],
        time: []
      }

      componentDidMount() {
        this.getData();
      }


      getData = async () => {
        let res =  await Axios.get(this.options.url.leagueTable, this.options.header);
        res.data.standings[0].table.map((data, index) => {
          this.setState(() => {
            this.state.team.push(data.team.name)
            this.state.points.push(data.points)
            this.state.mGoal.push(data.goalsAgainst)
            this.state.pGoal.push(data.goalsFor)
            this.state.avarage.push(data.goalDifference)
          });
        })

        let matchRes = await Axios.get(this.options.url.matches, this.options.header)
        matchRes.data.matches.map((data, index) => {
          this.fixture.home.push(data.homeTeam.name)
          this.fixture.away.push(data.awayTeam.name)
          this.fixture.date.push(Moment(data.utcDate).format('MMMM Do YYYY'))
          this.fixture.time.push(Moment(data.utcDate).format('h:mm:ss a'))
        })

        this.forceUpdate()
        // this.deneme()
    }            
    
    // deneme = () => {
    //   const today = new Date()
    //   // console.log(GetDate('a'))
    //   console.log(this.options.url.matches)
    // }

    render() {
      return(
        <div className = "container">
        <div>
          <table className = "PremierLeagueTable">
          <thead>
          <tr>
            <th>SIRA</th>
            <th>TAKIM</th>
            <th>Atılan Gol</th>
            <th>Yenilen Gol</th>
            <th>AVERAJ</th>
            <th>PUAN</th> 
          </tr>
          {
            this.state.team.map((i,j) => {
              return(
                <tr>
                  <td>{ j + 1 }</td>
                  <td>{this.state.team[j]}</td>
                  <td> {this.state.pGoal[j]}</td>
                  <td> {this.state.mGoal[j]}</td>
                  <td>{this.state.avarage[j]}</td>
                  <td>{this.state.points[j]}</td>
                </tr>
              )
            })
          }
          </thead> 
        </table>
        </div>
        
        <div className = "fixture">
          <h2 id = "fixtureTitle">FİKSTÜR</h2>
          <table className = "fixtureTable">
            <thead>
              <tr>
                <th>SAAT</th>
                <th>EV SAHİBİ</th>
                <th>DEPLASMAN</th>
                <th>TARİH</th>
              </tr>
              {
                this.fixture.home.map((i,j) => {
                  return(
                    <tr>
                      <td>{this.fixture.time[j]}</td>
                      <td>{this.fixture.home[j]}</td>
                      <td>{this.fixture.away[j]}</td>
                      <td>{this.fixture.date[j]}</td>
                    </tr>
                  )
                })
              }
            </thead>
          </table>
        </div>
        <div>
          <img id = "pLogo" src = {pLogo}></img>
        </div>
      </div> 
    )}}  