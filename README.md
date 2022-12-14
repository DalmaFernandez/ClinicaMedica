

<img src="https://i.imgur.com/ss2Z4zB.png" alt="logo" style="display: block; margin-left: auto; margin-right: auto;" />

# Bienvenido al repositorio de Salud Integral Clínica Médica

## Introducción:
Este es el repositorio de la página web de la Clínica médica Salud Integral. En esta página los usuarios pacientes pueden ver información general sobre la clínica y los usuarios administradores tienen acceso a la gestión de pacientes y turnos.
Es decir, página cuenta con dos vistas principales: una vista informativa para cualquier persona y otra restrictiva al administrador del sistema. 
### Vista informativa:
La vista informativa es una página web que cuenta con tres secciones: 
- **Inicio:**
La página de Inicio cuenta con un Navbar que contiene 3 links (Inicio, Contacto, Nosotros), un logo de la clínica y una opción en forma de botón para poder acceder a la página como Administrador.
Por debajo se encuentran diferentes secciones. La primera contiene un Carousel con imágenes y un botón para sacar turnos.
La segunda sección cuenta con una serie de imágenes / noticias con sus respectivas descripciones y cards que indican información básica de la clínica (horarios, contacto, especialidades, etc).
Y la tercera sección está incluida con más cards informativas e interactivas, y una imagen de fondo de la clínica.
Por último la página de Inicio también cuenta con un footer con información y contacto acerca de la clínica.

- **Contacto:**
Esta sección tiene un formulario para que los usuarios puedan enviar consultas. El formulario tiene tres campos: nombre, email y mensaje. 
Por otro lado, contiene un mapa funcional ubicado en la dirección de la clínica e iconos de acceso a las redes sociales de Salud Integral.

- **Nosotros:**
En esta sección se incluye la misión y la visión de Salud Integral. Se agregan imágenes ilustrativas. Termina con los nombres y las fotos de los miembros del equipo.

Tambíen se influye una página de error404 para los links no funcionales de la página. Contiene un botón para regresar a la página de inicio.

### Vista de Administrador:
La vista de administrador cuenta con tres secciones:
- **Turnos programados:** Muestra todos los turnos programados en forma de cards ordenados por fecha y hora (el más próximo primero). Se permite filtrar los turnos con selectores por médico, paciente o fecha. Si no hay turnos programados se muestra un mensaje de aviso. 
- **Pacientes:** Esta sección contiene un formulario para crear y modificar pacientes. El formulario contiene los campos: *nombre, apellido, DNI, fecha de nacimiento, sexo, obra social, teléfono, domicilio y email*. Abajo del formulario se muestra una tabla con los siguientes datos: *nombre y apellido, DNI, edad y obra social*, con una columna que contiene tres botones: el primero permite ver *más información* del paciente (toda la información cargada en el formulario), el segundo se puede usar para *editar* los datos del paciente y el tercero para *eliminar* el paciente.
- **Gestión de turnos:** Esta sección contiene un formulario para crear y modificar turnos. El formulario contiene los campos: *paciente, especialidad, medico, fecha, horario y notas.*
Todos los campos son selectores excepto el de notas.
Las opciones de médicos se encuentran cargadas por defecto en el sitio.
Abajo del formulario se muestra una tabla con los siguientes datos: *paciente, medico, fecha y hora*, y una columna que contiene tres botones: el primero permite ver *más información* del turno (toda la información cargada en el formulario), el segundo se puede usar para *editar* los turnos y el tercero para *eliminar*.

## Instrucciones para administradores:
1.  Acceder al panel de administrador desde la página de inicio de Salud Integral: Presionar el botón de acceso que se encuentra en el navbar, ingresar la clave (1234) y acceder. Automáticamente se abre el panel de administrador.
2.  Cargar un paciente: en el panel de administrador, acceder a la sección "Pacientes", completar el formulario y presionar el botón cargar. Puede ver el paciente cargado en la tabla que se muestra abajo del formulario.
3. Cargar un turno: acceder a la sección "Gestión de Turnos", completar el formulario y presionar el botón cargar. Puede ver el turno cargado en la tabla que se muestra abajo del formulario.
4. En la sección "Turnos Programados" se pueden ver todos los turnos ordenados por fecha y hora. Para filtrar por medico, paciente o por fecha, seleccionar una opción y presionar el botón *Aplicar filtro*. Para eliminar los filtros y mostrar todos los turnos presionar el botón *Eliminar Filtros*. En cada tarjeta de turno se puede observar toda la información del paciente haciendo click en el botón al lado del nombre del paciente. 
5. Al intentar salir de la vista de administrador aparece un aviso para pedir confirmación. Si se confirma, automáticamente se dirige a la página principal. Para volver a ingresar se accede nuevamente con clave desde el botón de acceso que se encuentra en el navbar.

## Acceso a la página de Salud Integral:
La página se encuentra cargada en Netlify:
https://saludintegral.netlify.app/

## Construído con:
- HTML5
- CSS3
- JAVASCRIPT
- BOOTSTRAP5
- FONT AWESOME
- SWEET ALERT 2
## Colaboradores:
- Juan Pablo Alba Fernández: [JuanPiAlba](https://github.com/JuanPiAlba)
- Jenny Gonzalez: [Jenny-gonzalez](https://github.com/Jenny-gonzalez)
- Martín D'Orta: [MartinDorta](https://github.com/MartinDorta)
- Dalma Fernández: [DalmaFernandez](https://github.com/DalmaFernandez)

#### Fin.
