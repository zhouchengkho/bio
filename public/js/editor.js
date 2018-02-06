/**
 * Created by zhoucheng on 2/5/18.
 */



$(document).ready(function(){
  var editor = {};
  ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then(function(edi) {
      editor = edi;
    }).catch(function(error) {
      console.error( error );
    });


  $('#save').on('click', function() {

    var data = {
      title: $('#title').val(),
      abstract: $('#abstract').val(),
      text: editor.getData()
    }

    if(!data.title || !data.text || !data.abstract) {
      alert('yo fill out the necessary field dude');
      return
    }

    $.ajax({
      url: '/blog',
      method: 'POST',
      data: data
    }).done(function(res) {
      if(res.status == 200) {
        window.location.href='/blog/'+res.data.id
      } else {
        alert(JSON.stringify(res.data))
      }
    })

  })
})
