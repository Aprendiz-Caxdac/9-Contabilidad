// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "Escritos/Manual_de_Usuario/Manual_de_Usuario.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("Escritos/Manual_de_Usuario/Manual_de_Usuario.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'f29f477f-f9d9-4cb5-96de-28fe415614a4' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "es");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Contents":"Contenido","Index":"Índice","Search":"Buscar","Glossary":"Glosario","Logo/Author":"Con tecnología de","Show":"Mostrar","Hide":"Ocultar","SyncToc":"Sincronizar TOC","Prev":"Anterior","Next":"Siguiente","Disabled Prev":"<<","Disabled Next":">>","Separator":"|","OpenLinkInNewTab":"Abrir en una pestaña nueva","SearchOptions":"Opciones de búsqueda","Loading":"Cargando...","UnknownError":"Error desconocido","Logo":"Logotipo","HomeButton":"Página principal","SearchPageTitle":"Resultados de la búsqueda","PreviousLabel":"Anterior","NextLabel":"Siguiente","TopicsNotFound":"No se encontraron resultados","JS_alert_LoadXmlFailed":"No se pudo cargar el archivo XML","JS_alert_InitDatabaseFailed":"No se pudo inicializar la base de datos","JS_alert_InvalidExpression_1":"La cadena de búsqueda que ha escrito no es válida.","Searching":"Buscando...","Cancel":"Cancelar","Canceled":"Cancelado","ResultsFoundText":"%1 resultado(s) encontrado(s) para %2","SearchResultsPerScreen":"Resultados de búsqueda por página","Back":"Atrás","TableOfContents":"Tabla de contenido","IndexFilterKewords":"Filtrar palabras clave","GlossaryFilterTerms":"Filtrar términos","ShowAll":"Todo","HideAll":"Ocultar todo","ShowHide":"Mostrar / Ocultar","IeCompatibilityErrorMsg":"Esta página no puede verse en Internet Explorer 8 o versiones anteriores.","NoScriptErrorMsg":"Habilitar compatibilidad con JavaScript en el navegador para ver esta página.","EnableAndSearch":"Incluir todas las palabras en la búsqueda","HighlightSearchResults":"Resaltar resultados de la búsqueda","Expand/Collapse All":"Expandir/colapsar todo","Remove Highlight":"Quitar resaltado","Print":"Imprimir","Filter":"Filtro","SearchTitle":"Buscar","ContentFilterChanged":"Se ha cambiado el filtro de contenido, vuelva a buscar","EndOfResults":"Fin de resultados de búsqueda.","Reset":"Restablecer","NavTip":"Cerrar","ToTopTip":"Ir al principio","ApplyTip":"Aplicar","SidebarToggleTip":"Expandir/colapsar","Copyright":"© Copyright 2019. All rights reserved.","FavoriteBoxTitle":"Favoritos","setAsFavorites":"Añadir a favoritos","unsetAsFavorite":"Dejar de establecer como favorito","favoritesNameLabel":"Nombre","favoritesLabel":"Favoritos","setAsFavorite":"Establecer como favorito","nofavoritesFound":"No ha marcado ningún tema como favorito.","Welcome_header":"Bienvenido a nuestro Centro de ayuda","Welcome_text":"¿En qué le podemos ayudar hoy?","SearchButtonTitle":"Buscar...","ShowTopicInContext":"Haga clic aquí para ver esta página en contexto","TopicHiddenText":"Este tema ha quedado fuera del filtro por los filtros seleccionados.","NoTermsFound":"No se ha encontrado ningún término.","NoKeywordFound":"No se ha encontrado ninguna palabra clave.","SkipToMainContent":"Saltar al contenido principal","SearchPaginationLabel":"De %1 a %2 de %3 resultados","NextSearchResults":"Página de búsqueda siguiente","PrevSearchResults":"Página de búsqueda anterior"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "Contabilidad");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
model.publish(rh.consts('KEY_LOGO_URL'), "");
model.publish(rh.consts('KEY_SPECIAL_CHARS'), "0;1;2;3;4;5;6;7;8;9");
model.publish(rh.consts('SEARCH_PAGE'), "search.htm");
})();
