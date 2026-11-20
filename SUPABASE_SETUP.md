# Configurar la sincronización de favoritos, visitas y museos por visitar

La aplicación puede seguir funcionando sin cuenta y guardar las marcas en el navegador. Para sincronizarlas entre dispositivos, configura un proyecto de Supabase:

1. Crea un proyecto y ejecuta [`supabase/schema.sql`](./supabase/schema.sql) en el SQL Editor. La tabla y sus políticas RLS restringen cada marca al usuario autenticado. Si ya habías configurado la sincronización, vuelve a ejecutar el archivo para habilitar también la marca «Por visitar».
2. Configura el acceso por correo y las URL de retorno:

   - En el panel del proyecto abre **Authentication → Sign In / Providers → Email** y comprueba que Email esté habilitado. La aplicación usa enlaces de acceso sin contraseña.
   - Abre **Authentication → URL Configuration**:
     - **Site URL** debe ser la dirección pública principal de la aplicación, por ejemplo `https://tu-dominio.example/`. Supabase la usa como retorno predeterminado cuando no se especifica uno.
     - En **Redirect URLs** agrega la página de producción y la dirección local de desarrollo. Por ejemplo:

       ```text
       https://tu-dominio.example/
       https://tu-dominio.example/index.html
       http://localhost:8000/**
       http://127.0.0.1:8000/**
       ```

       Agrega solo las URL de producción que realmente se utilicen (raíz o `index.html`). En producción es preferible permitir rutas exactas; los comodines son para desarrollo y no reemplazan el dominio de producción.
   - Al solicitar un enlace, esta aplicación envía a Supabase la dirección de la página abierta, sin sus parámetros ni fragmentos. Esa dirección debe coincidir con una de las **Redirect URLs** permitidas; si no coincide, Supabase puede rechazarla o devolver al usuario a la **Site URL**.
   - Para probar localmente ejecuta la aplicación desde un servidor HTTP, por ejemplo `python -m http.server 8000`, y abre `http://localhost:8000/`. No uses una URL `file://`.

   Supabase puede enviar correos de prueba con su servicio predeterminado, pero tiene restricciones de destinatarios y envío; no es adecuado para una aplicación pública. Para producción, configura un proveedor SMTP propio en los ajustes de autenticación de Supabase. Verifica el dominio del remitente y sus registros SPF/DKIM con el proveedor. Las credenciales SMTP se guardan solo en Supabase, nunca en los archivos del sitio. Consulta [las URL de redirección](https://supabase.com/docs/guides/auth/redirect-urls) y [la configuración de SMTP](https://supabase.com/docs/guides/auth/auth-smtp).
3. Copia la URL del proyecto y la clave pública `anon`/publishable en `supabase-config.js`:

   ```js
   window.MUSEOS_SUPABASE_CONFIG = {
     url: 'https://TU-PROYECTO.supabase.co',
     anonKey: 'TU-CLAVE-PUBLICA'
   };
   ```

4. Sirve la aplicación desde `localhost` o desde un sitio HTTPS. Los enlaces de acceso no funcionan abriendo `index.html` directamente como archivo.

La clave `anon`/publishable está diseñada para estar disponible en el cliente y no sustituye las políticas RLS. **Nunca** pongas la clave `service_role` en `supabase-config.js` ni en ningún archivo enviado al navegador.

Al iniciar sesión por primera vez, las marcas locales de Favoritos, Visitados y Por visitar se combinan con las de la cuenta. Mientras haya sesión, cada cambio se guarda en ambos sitios; al cerrar sesión se limpia la copia local del dispositivo sin borrar las marcas de la cuenta. Los cambios hechos en otro dispositivo se cargan al iniciar sesión, recargar la página o volver a la pestaña; no se envían en tiempo real a una página que permanece abierta.
