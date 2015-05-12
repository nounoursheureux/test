console.log('dwag');
$('#btn').click(function(e){
    console.log('lol');
    $.get('http://api.github.com',function(data){
        console.log(data);
    });
});
