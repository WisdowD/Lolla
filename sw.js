{
  "name": "Lollo Labs — Casting Digital",
  "short_name": "Lollo Labs",
  "description": "Plataforma de casting digital para modelos agenciados pela Lollo Labs",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0F0E0C",
  "theme_color": "#C9A96E",
  "lang": "pt-BR",
  "categories": ["lifestyle", "business"],
  "icons": [
    {
      "src": "icons/icon-72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/icon-96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "icons/screenshot-mobile.png",
      "sizes": "390x844",
      "type": "image/png",
      "form_factor": "narrow",
      "label": "Tela de cadastro do modelo"
    }
  ],
  "shortcuts": [
    {
      "name": "Novo Casting",
      "short_name": "Cadastrar",
      "description": "Iniciar novo cadastro de modelo",
      "url": "/?action=new",
      "icons": [{ "src": "icons/icon-96.png", "sizes": "96x96" }]
    }
  ],
  "share_target": {
    "action": "/share",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "title",
      "text": "text",
      "files": [
        {
          "name": "photos",
          "accept": ["image/*"]
        }
      ]
    }
  }
}
