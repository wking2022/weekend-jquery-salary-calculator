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



    $('#tBody').append(`
        <tr>
            <td>${employeeArr.firstName}</td>
            <td>${employeeArr.lastName}</td>
            <td>${employeeArr.employeeId}</td>
            <td>${employeeArr.jobTitle}</td>
            <td>${employeeArr.annualSal}</td>
            <td><button class="deleteBut" >Delete</button></td>
        </tr>`)
        
    // $('#firstName').val();
    // $('#lastName').val('');
    // $('#employeeId').val('');
    // $('#jobTitle').val('');
    // $('#annualSal').val('');

}



