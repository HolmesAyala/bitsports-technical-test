# Bitsports-technical-test

> Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

### `npm start`

Ejecuta la aplicación en modo de desarrollo ([http://localhost:3000](http://localhost:3000)).

### `npm test`

[Ejecuta los test](https://facebook.github.io/create-react-app/docs/running-tests) en modo interactivo.

### `npm run lint`

Ejecuta el linter del proyecto.

### `npm run build`

Transpila la aplicación para [producción](https://facebook.github.io/create-react-app/docs/deployment) en la carpeta `build`.

### `npm run eject`

**Nota: Una vez que se ejecute `eject`, no se puede revertir!**

Extrae toda la configuración establecida por defecto

## Testing

Resumen:

![image](https://user-images.githubusercontent.com/26050475/170045146-d885314d-a244-490d-97f1-d55038360c56.png)

## Diseño

### Inconsistencias

- **Usar margin en lugar de padding en los componentes del desgin system**

![image](https://user-images.githubusercontent.com/26050475/170035319-2470cf26-a1dd-4836-a647-b430ac304336.png)

El uso de margin en los componentes puede acarrear problemas de margin collapse, por lo tanto se optó por implementarlo con padding.

- **Ubicación de la separación en PersonCell respecto del tamaño del icono**

![image](https://user-images.githubusercontent.com/26050475/170036378-1752fda7-2b63-4187-9015-424496280ae1.png)

La ubicación del espaciado de 16px es incorrecta respecto al espacio que en realidad ocupa en icono.

- **El color del header en la versión movil no es consistente**

![image](https://user-images.githubusercontent.com/26050475/170036943-537e6aae-2b27-4a3c-80c0-0480aae15ba8.png)

Se estableción el color **RavnBlack** para el header en todos los casos.

- **No se provee una manera clara de obtener el height del TopBar en la versión movil**

![image](https://user-images.githubusercontent.com/26050475/170038000-46d5bd84-6de1-4f25-b74d-3e485ea315bd.png)

Por lo tanto se usó el height de la versión de escritorio: 52px.

- **El height de DataCell no es correcto**;

![image](https://user-images.githubusercontent.com/26050475/170038653-46bb520b-6a96-4109-929e-22745698b499.png)


Debería ser de 20px + 16px * 2 = 52px.

La implementación está acorde a ello:

![image](https://user-images.githubusercontent.com/26050475/170039256-7843ebbf-62f7-4683-97f8-1e550a0a499b.png)

- **Uso de colores que no están en el design system**

Border inferior de PersonCell:

![image](https://user-images.githubusercontent.com/26050475/170040643-d0e04d2d-0885-4f89-84a8-104bd415fc27.png)

Separador de secciones en versión de escritorio:

> Nota: No me fue posible seleccionar el elemento (hice uso de un color picker)

![image](https://user-images.githubusercontent.com/26050475/170040731-57799771-cd0a-48e0-8add-86d00328e27d.png)

BoxShadow en el header en la versión de escritorio:

![image](https://user-images.githubusercontent.com/26050475/170040865-4a6ba007-ed06-463f-93a0-632d97ee5186.png)

- **No se establece una manera de reconocer el elemento seleccionado en la versión de escritorio**

Se optó por mostrar el título de la aplicación con el nombre del personaje:

![image](https://user-images.githubusercontent.com/26050475/170042528-a9a06eca-cbfd-4082-8d01-c6238eece368.png)

- **No se proveen los estilos de hover y focus en la versión de escritorio**

Es importante establecer los estilos de hover y focus para los elementos con los que el ususario puede interactuar como botones, inputs, etc.

- **No se proveen casos de uso con texto multilinea**

Se optó por dejar que el height de los componentes de adapte a texto multilinea.

De lo contrario se hubiera implementado algún tipo de ellipsis.
