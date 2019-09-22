let users = [];
/*
let deleteElement = e => {
    if($(e.target).hasClass('remove-btn')) {
      //Удаление нужного элемента из users
    }
};
*/


$('body').on('click', 'input.remove-btn', function() {
   $(this).parents('tr').remove();  
});





let renderUsers = users => {
    let htmlStr = ``;
    for(let index in users) {
        htmlStr += `<tr>
            <td>${+index+1}</td>
            <td>${users[index].firstName}</td>
            <td>${users[index].email}</td>
            <td>${users[index].age}</td>
            <td><img src="${users[index].picture} width="50px" height="50px"></td>
          
			 <td> <input class="remove-btn" type="button" value="Remove" onclick="SomeDeleteRowFunction(this);"></td>
			
			
        </tr>`;
    }
    $('#firstName, #email, #age, #picture').val('');
    $('tbody').html(htmlStr);
};

let addUser = e => {
    e.preventDefault();
    console.log('We are starting....');
    let userObject = {
        firstName: $('#firstName').val(),
        email: $('#email').val(),
        age: $('#age').val(),
        picture: $('#picture').val()
    };
    if(!userObject.firstName || !userObject.email || !userObject.age || !userObject.picture) {
        alert('Заполните все поля');
        return;
    }
    users.push(userObject);
    renderUsers(users);
};

$('table tbody').on('click', deleteElement);

$('#submitBtn').on('click', addUser);

/*$.ajax({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    method: 'GET',
    error: (e) => {
        console.log(e);
    },
    success: (data) => {
        console.log(data);
    }
});*/
