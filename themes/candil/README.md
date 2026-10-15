# candil

Un tema para Hugo cálido y minimalista: papel, luz de lámpara y detallitos hechos a mano.

## Instalación

1. Copia la carpeta `candil/` dentro de `themes/` en tu blog.
2. En tu `hugo.toml` pon `theme = "candil"` y añade lo de `exampleSite/hugo.toml` que te interese.
   Importante: `[markup.highlight] noClasses = false`, que es lo que hace que el código use los colores del tema.
3. Para publicar en GitHub Pages copia `exampleSite/.github/workflows/hugo.yml` a `.github/workflows/`
   y en el repo ve a Settings → Pages → Source: **GitHub Actions**.

Pruébalo en local con `hugo server`, o desde esta carpeta con:
`hugo server --source exampleSite --themesDir ../..`

## Parámetros (`[params]`)

| clave        | qué hace |
|--------------|----------|
| `titular`    | Titular grande de la portada. Admite markdown: `*mapas*` sale en cursiva y color teja. |
| `intro`      | Párrafo de presentación (markdown). |
| `ahora`      | Notita "ahora mismo…" pegada con celo en la portada. Si lo quitas, desaparece. |
| `saludo`     | Saludo fijo. Si no lo pones, cambia según la hora (buenos días / tardes / noches). |
| `ciudad`     | Sale en el pie: "Escrito con calma desde …". |
| `footer`     | Sustituye por completo la frase del pie (markdown). |
| `social`     | Lista de `{ name, url }` para el pie. |
| `mainSection`, `homePosts` | Sección de entradas (`posts`) y cuántas salen en portada (6). |

En el front matter de una entrada puedes poner `subtitulo` y, si no quieres letra capitular, `capitular: false`.

## Shortcodes

```
{{< nota titulo="ojo" >}}Texto escrito a mano en una nota adhesiva.{{< /nota >}}
{{< nota lado="derecha" >}}…pegada a la derecha{{< /nota >}}
{{< polaroid src="/img/tejados.jpg" pie="Lisboa, octubre" >}}
```

## Los detallitos

- **El candil** (arriba a la derecha) enciende el modo noche y la llama titila. Si no lo has tocado, sigue la preferencia del sistema, y recuerda lo que eliges.
- **La ventana del logo** muestra el cielo de día y se ilumina de noche. La maceta crece un poco al pasar el ratón.
- **Tiempo de lectura en tacitas de café** (una por cada ~5 min), que echan vapor al pasar el ratón.
- **Enlaces** con un subrayado que se ondula al pasar por encima.
- **Grano de papel**, letra capitular, separadores (`---`) con una florecita, viñetas ✿.
- **Tira de azulejos** en el pie, que cambia de color con el tema.
- En el código: etiqueta del lenguaje escrita a mano y botón de copiar.
- Barra de lectura en las entradas. Se respeta `prefers-reduced-motion`.

## Personalizar colores

Todos los colores son variables al principio de `assets/css/candil.css` (`--teja`, `--papel`, `--azul`…).
Para cambiarlos sin tocar el tema, crea `assets/css/candil.css` en tu propio sitio y Hugo usará el tuyo.
