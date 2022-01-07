var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [], label: "Programming Languages 2021",
            backgroundColor: [],
            borderColor: [],
            borderWidth: 8,
        },
        ],
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 60,
                bottom: 0,
            },
            tooltips: {
                backgroundColor: 'red',
            },

        },

    },
});

function updatechart() {
    const tabledata = document.getElementById("tabledata");

    const tabledatatr = document.createElement('tr');
    const tabledatatd = document.createElement('td');
    const tabledatatd2 = document.createElement('td');
    const tabledatatd3 = document.createElement('td');
    const tabledatatd4 = document.createElement('td');
    const tabledatatd5 = document.createElement('td');
    const tabledatatd6 = document.createElement('td');


    tabledata.appendChild(tabledatatr);
    tabledatatr.appendChild(tabledatatd);
    tabledatatr.appendChild(tabledatatd2);
    tabledatatr.appendChild(tabledatatd3);
    tabledatatr.appendChild(tabledatatd4);
    tabledatatr.appendChild(tabledatatd5);
    tabledatatr.appendChild(tabledatatd6);


    const inputData = document.getElementById('inputData');
    const inputcolor = document.getElementById('inputcolor');
    const inputlabel = document.getElementById('inputlabel');
    const inputborder = document.getElementById('inputborder');
    console.log(inputData.value);

    myChart.data.datasets[0].data.push(inputData.value);
    myChart.data.datasets[0].backgroundColor.push(inputcolor.value);
    myChart.data.datasets[0].borderColor.push(inputborder.value);
    myChart.data.labels.push(inputlabel.value);

    tabledatatd.innerHTML = inputData.value;
    tabledatatd2.innerHTML = inputcolor.value;
    tabledatatd3.innerHTML = inputlabel.value;
    tabledatatd4.textContent = inputborder.value;
    tabledatatd5.innerHTML = '<input type="button" value="Delete" onclick=removechart(this); class="delete";>'
    tabledatatd6.innerHTML = '<input type="button" value="Update" onclick=updaterow(); class="update";>'

    myChart.update();
}

function removechart(x) {
    
    


    // let next = tabledata.lastElementChild;
    // console.log(next)
    // tabledata.removeChild(next);
    // myChart.update();


 
 myChart.data.datasets[0].data.pop(inputData.value);
    myChart.data.datasets[0].backgroundColor.pop(inputcolor.value);
    myChart.data.datasets[0].borderColor.pop(inputborder.value);
    myChart.data.labels.pop(inputlabel.value);
    
    var s=x.parentNode.parentNode;
    s.parentNode.removeChild(s);
    
    
    myChart.update();
  
   
}






