import React from 'react';
//import Team from './teams';
import Axios from  'axios'

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
          url: "https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/PL/standings"
        }
      }

      componentDidMount() {
        this.getData();
      }


      getData = async () => {
        console.log(typeof(this.state.text))
        let res =  await Axios.get(this.options.url.url, this.options.header);
        console.log(res.data.standings[0].table)
        res.data.standings[0].table.map((data, index) => {
          this.setState(() => {
            this.state.team.push(data.team.name)
            this.state.points.push(data.points)
            this.state.mGoal.push(data.goalsAgainst)
            this.state.pGoal.push(data.goalsFor)
            this.state.avarage.push(data.goalDifference)
          });
        })
        this.forceUpdate()
    }            
    
    deneme = () => {
      console.log(this.state.text)
    }

    render() {
      return(
        <div>
        <h2 id = "pLeagueTitle">PREMIER LEAGUE</h2>
          <table className = "PremierLeagueTable">
          <thead>
          <tr>
            <th>SIRA</th>
            <th>TAKIM</th>
            <th>PUAN</th>
            <th>Atılan Gol</th>
            <th>Yenilen Gol</th>
            <th>AVERAJ</th> 
          </tr>
          {
            this.state.team.map((i,j) => {
              return(
                <tr>
                  <td>{ j + 1 }</td>
                  <td>{ this.state.team[j] }</td>
                  <td>{ this.state.points[j] }</td>
                  <td> { this.state.pGoal[j] }</td>
                  <td> { this.state.mGoal[j] }</td>
                  <td>{ this.state.avarage[j] }</td>
                </tr>
              )
            })
          }
          </thead> 
        </table>
        </div>
        
      )}}  