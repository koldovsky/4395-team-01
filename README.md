# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```
## Team
<table>
  <tr>
    <th>№</th>
    <th>Name</th>
    <th>Github</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Serhii Karpus</td>
    <td><a href="https://github.com/Siren1790">Link</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Maksym Poliakov</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Liashenko Sofiia</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Halaichuk Vladyslav</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Gerlib Andriy</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Levenets Yuriy</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Kuzhil Vitaliy</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Nychkalo Vira</td>
    <td><a href="https://github.com/vironchiks">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Pasichnyk Anna</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Heiko Mykola</td>
    <td><a href="https://github.com">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Semen Hoinets</td>
    <td><a href="https://github.com/goosepinggg201">GitHub</a></td>
    <td>FullStack Python/React Developer</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Serhii Popovniak</td>
    <td><a href="https://github.com/SsergS1">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
   <tr>
    <td>13</td>
    <td>Oksana Kovalenko</td>
    <td><a href="https://github.com/talking-puppet">GitHub</a></td>
    <td>Fullstack JS Developer</td>
  </tr>
    <tr>
    <td>14</td>
    <td>Yuriy Suharskiy</td>
    <td><a href="https://github.com/YuriySuharskiy">GitHub</a></td>
    <td>FullStack Python/React Developer</td>
  </tr>
    <tr>
    <td>15</td>
    <td>Volodymyr Oleshchuk</td>
    <td><a href="https://github.com/VolodymyrOleshchuk">GitHub</a></td>
    <td>Frontend Developer</td>
  </tr>
</table>