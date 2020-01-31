import React from 'react';
//import Team from './teams';
import Axios from  'axios'

export default class leagueTable extends React.Component {
    state = {
        text: [],
        index: []
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
        res.data.standings[0].table.map((data, index) => {
          this.setState(() => {
            this.state.text.push(data.team.name)
            this.state.index.push(index + 1)
          });
        })
        this.forceUpdate()
    }            
    
    deneme = () => {
      console.log(this.state.text)
    }

    render() {
      return(
          <table>
          <thead>
          <tr>
            <th>#</th>
            <th>takım</th> 
          </tr>
          {
            this.state.text.map((i,j) => {
              return(
                <tr>
                  <td>
                  {this.state.index[j]}
                  </td>
                  <td>
                    {this.state.text[j]}
                  </td>
                </tr>
              )
            })
          }
          </thead> 
        </table>
        
      )}}  