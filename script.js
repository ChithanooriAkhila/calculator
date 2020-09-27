    $('button').click(function(){
        if($(this).html()=='='){
            $('#display').val(eval($('#display').val()));
        }else if ($(this).html()=='Clear'){
            $('#display').val('');
        }else{
            $('#display').val($('#display').val() + $(this).html());
        }
    });
