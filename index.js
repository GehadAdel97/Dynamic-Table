var newRow = `<tr>
       <td><input type = 'text' id='fname' placeholder="first name" class="form-control" name="fname"></td>
        <td><input type = 'text' id='lname' placeholder="last name" class="form-control" name="lname"></td>
        <td><input type = 'email' id='email' placeholder="email" class="form-control" name="email"></td>
        <td><input type = 'text' id='pass' placeholder="password" class="form-control" name="password"></td>
    <td><button class = 'btn btn-outline-danger remove'> Remove </td>
  </tr>`
 $(function(){
    $('#mybutton').click(function(){
        $('tbody').append(newRow);
        console.log('HIII');
    });
    $(document).on('click','.remove', function(){
        $(this).parents('tr').remove();
    });
});
