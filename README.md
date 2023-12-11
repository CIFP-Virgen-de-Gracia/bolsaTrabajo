Intrucciones para el montaje del entorno
	- Requisitos
		1. Angular +15.2.1
		2. NodeJS +16.18.0

	- Base de datos
		1. importar el fichero myDb.sql, dentro de 'bolsatrabajo', en el gestor de bases de datos que utilices

	- Backend
		1. Posicionarse en el directorio 'bolsatrabajo/back'
		2. Ejecutar el comando 'npm install'
		3. Arrancar el servidor mediante el comando 'nodemon app'

		En el fichero '.env' se pueden configurar parametros como las credenciales de la base de datos o el puerto donde arranca el servidor
		Es importante y necesario arrancar el servidor en http://localhost:9090

	- Frontend
		1. Posicionarse en el directorio 'bolsatrabajo/front'
		2. Ejecutar el comando 'npm install'
		3. Arrancar la aplicación mediante el comando 'ng serve'

		Por defecto la aplicacion arranca en http://localhost:4200

	- Usuarios con los que se han realizado las pruebas (es posible usar usuarios creados por mediante registro, es necesario confirmar el correo para utilizar el usuario)
		1. Alumno - Correo: alumno3@correo.es - Contraseña: 1234
		2. Empresa - Correo: as@fffff.com - Contraseña: 1234
		3. Admin - Correo: iop@cifvirgendegracia.com - Contraseña: 1234
