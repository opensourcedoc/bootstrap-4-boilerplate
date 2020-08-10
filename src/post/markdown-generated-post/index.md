{% extends 'layout/layout.html' %}

{% block title %}
A Markdown-generated Post
{% endblock %}

{% block content %}
{% markdown %}
# A Mardown-generated Post

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, velit sit amet sodales pulvinar, elit massa sollicitudin nisl, in viverra nisl urna lobortis velit. Quisque sit amet mollis nibh, eu dapibus libero. Morbi ac ipsum at lectus viverra mollis. Sed ac augue sodales libero faucibus auctor. Morbi a diam tempus, mollis sem id, vestibulum purus. Sed iaculis, tortor a dapibus mollis, mi purus tempus risus, at fermentum odio ex eget risus. Praesent iaculis, odio eget commodo egestas, neque urna dapibus augue, eget vehicula diam tellus et dolor. Fusce at lacinia quam.

Duis id rhoncus mi, in mollis nisl. Duis eu dictum massa. Phasellus mattis porta leo, vel mollis nisi consequat sit amet. Pellentesque ultricies, lacus nec scelerisque consequat, ante diam congue odio, non viverra velit ante commodo tortor. Nunc nec commodo risus, eu pellentesque nulla. Nunc quis efficitur velit. Ut finibus magna neque, quis dignissim turpis sagittis eget. Vivamus ut ultricies dolor. Nullam sagittis est et rutrum hendrerit. Donec arcu urna, pulvinar pharetra aliquet quis, tempor eu justo. Ut congue ipsum eget magna dictum mattis. Vivamus tincidunt felis quis diam varius, sed bibendum elit convallis. Ut semper malesuada mattis. Duis tincidunt euismod odio varius luctus. Morbi odio dui, finibus et semper eu, viverra nec metus. Etiam rhoncus ante mauris, fermentum eleifend dui porta nec.

* Item 1
* Item 2
* Item 3

Go back to [the index page](/).
{% endmarkdown %}
{% endblock %}