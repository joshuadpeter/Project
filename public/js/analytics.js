   function drawChart(Analytics) {

      // Define the chart to be drawn.
      if(document.getElementById('container')){
         var data = google.visualization.arrayToDataTable(Analytics);
         
         var options = {title: 'Gym Capacity By time'}; 

         // Instantiate and draw the chart.
         var chart = new google.visualization.ColumnChart(document.getElementById('container'));
         chart.draw(data, options);
      }
   }

   