function teste(){
  //ação
}
$(document).on("click","#bt1", function(){
    function callback(){

    }
  navigator.notification.alert("Alerta Simples", callback, 'Aqui o titulo da mensagem', 'ok');
});


$(document).on("click","#bt2", function(){
  function onConfirm(buttonIndex) {
    if(buttonIndex == 1){
      navigator.notification.alert("Butão Un 1", teste, "Certô Miseravi", "ok");
    }else{
      navigator.notification.alert("Butão Dois 2", teste, "Certô tambeim Miseravi", "ok");
    }
    
}
  navigator.notification.confirm("Escolha um botão", onConfirm, 'titulo',['Botão 1','Botão 2']);
});

$(document).on("click", "#bt3",function(){
  navigator.notification.beep(1)
})

$(document).on("click", "#bt4", function(){
  navigator.vibrate([500,1000,500,1000,500]);
})

$(document).on("click", "#bt4", function(){
  navigator.camera;
})
function showMap(lat, long){
  L.mapquest.key = 'GCAyx3qfmXYLM7fTeXn7eZD12nqWG0YG';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
          });

        map.addControl(L.mapquest.control());
}
$(document).on("click", "#bt5", function(){
  var onSuccess = function(position) {
        showMap(position.coords.latitude, position.coords.longitude)  
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
 
})
