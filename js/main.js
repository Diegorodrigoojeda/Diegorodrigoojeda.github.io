$(document).ready(initPage);

function initPage()
{
  $("#main_menu a").click(navigatePage);
  initScrollMagic();
}

function navigatePage(evt)
{
  evt.preventDefault();
  $("#main_menu li").removeClass('active');
  $(this).addClass('active');

  var section = $(this).attr('href');
  var objSection = $(section);

  TweenMax.to('body', 1, {
    scrollTo:{y:objSection.position().top},
    ease:Quart.easeOut
  });
  console.log(objSection.position().top);
}

function initScrollMagic()
{
  var controller = new ScrollMagic.Controller();


  var dietasScene = new ScrollMagic.Scene({
      triggerElement: '#Dietas'
  })
  .setTween(blockTween)
  .addIndicators()
  .addTo(controller);

  var citasMiScene = new ScrollMagic.Scene({
      triggerElement: '#Citas'
  })
  .setTween(portafolioTween)
  .addIndicators()
  .addTo(controller);

  var quiensoyScene = new ScrollMagic.Scene({
      triggerElement: '#Quiensoy'
  })
  .setTween(blockTween)
  .addIndicators()
  .addTo(controller);

  var noticiasMiScene = new ScrollMagic.Scene({
      triggerElement: '#Noticias'
  })
  .setTween(portafolioTween)
  .addIndicators()
  .addTo(controller);

  var contactoMiScene = new ScrollMagic.Scene({
      triggerElement: '#Contacto'
  })
  .setTween(portafolioTween)
  .addIndicators()
  .addTo(controller);
}



