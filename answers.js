1. $(document).ready(function(){console.log("Party")})

2.$('article img').addClass('image-center');

3.$('article p:last').remove();

4.$('#title').css('font-size', Math.floor(Math.random() * 100));

5.$('ol').append('<li>Whatever</li>');

6.$('aside').empty().append('<p>Sorry about the list</p>');

7. 

$(document).ready(function() {
  const redInput = $('#red');
  const greenInput = $('#green');
  const blueInput = $('#blue');

  redInput.on('input', updateBackgroundColor);
  greenInput.on('input', updateBackgroundColor);
  blueInput.on('input', updateBackgroundColor);

  function updateBackgroundColor() {
    
const redValue = redInput.val();
    const greenValue = greenInput.val();
    const blueValue = blueInput.val();
    $('body').css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')');
  }
});

8.
 $(document).ready(function() {
  const image = $('img');

  image.on('click', function() {
    image.remove();
  });
});

