window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }


  document.querySelector("#email-icon").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector("#email-display").style.display= "block";
    window.scrollTo(0, document.body.scrollHeight)
  })
