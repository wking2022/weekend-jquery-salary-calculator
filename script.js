$(document).ready(onReady);

function onReady(){
    $('#butt').on('click', eInfoCollect);
}

let employeeArr = [];

function eInfoCollect(){
    let employee = {
        firstName: $('#fName').val(),
        lastName: $('#lName').val(),
        employeeId: $('#ID').val(),
        jobTitle: $('#jTitle').val(),
        annualSal: $('#anSal').val(),
    }
    (employeeArr).push(employee);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#jobTitle').val('');
    $('#annualSal').val('');

    $('#tBody').append(`
        <tbody id="tBody">
            <tr>
                <td id="fName">${employeeArr.firstName}</td>
                <td id="lName"><${employeeArr.lastName}/td>
                <td id="ID">>${employeeArr.employeeId}</td>
                <td id="jTitle">${employeeArr.jobTitle}</td>
                <td id="anSal">${employeeArr.annualSal}</td>
                <td><button class="deleteBut" >Delete</button></td>
            </tr>`)

}



