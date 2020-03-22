import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            labels: "Africa",
            datasets: [{
                label: [],
                backgroundColor: [],
                borderColor: [],
                data: [
                  {
                  x: 10,
                  y: 10,
                  r: 10,
                  }
                ],
            },
            {
              label: [],
              backgroundColor: [],
              borderColor: [],
              data: [
                {
                x: 10,
                y: 10,
                r: 10,
                }
              ],
          }]
        },
        options: {
          title: {
            display: true,
            text: 'GDP, happiness and population'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Happiness"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "GDP (PPP)"
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
      }
    }
  },
  methods: {
    fetchItems: function () {
      var i = 0;
      database.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.datasets[i].label.push(doc.data().label)
            this.datacollection.datasets[i].backgroundColor.push(doc.data().backgroundcolor)
            this.datacollection.datasets[i].borderColor.push(doc.data().bordercolor)
            this.datacollection.datasets[i].data[0].x = doc.data().data[0]
            this.datacollection.datasets[i].data[0].y = doc.data().data[1]
            this.datacollection.datasets[i].data[0].z = doc.data().data[2]
            i++
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}