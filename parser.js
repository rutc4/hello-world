let users = [];

let deleteElement = e => {
    if($(e.target).hasClass('remove-btn')) {
     $(e.target).parents('tr').remove();    //Удаление нужного элемента из users

     /**
     */

     users.splice(users.indexOf("stringToRemoveFromArray"), 1);

    }
};

$.ajax({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    method: 'GET',
    error: (e) => {
        console.log(e);
    },
    success: (data) => {
        console.log(data);

            let htmlStr = ``;
            for(let index in data) {

                htmlStr += `<tr>
                    <td>${data[index].r030}</td>
                    <td>${data[index].exchangedate}</td>
                    <td>${data[index].cc}</td>
                    <td>${data[index].txt}</td>
                    <td>${data[index].rate}</td>
                    <td><button class="remove-btn">Удалить</button></td>
                </tr>`;
            }
            $('tbody').html(htmlStr);
    }
});
$('table tbody').on('click', deleteElement);

/*
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
            <td><img src="${users[index].picture}"></td>
            <td><button class="remove-btn">Remove</button></td>
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



$('#submitBtn').on('click', addUser);
*/




