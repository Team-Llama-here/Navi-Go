// you can copy the base structure of manifest object.
export const manifestForPlugIn = {
    registerType:'prompt',
    includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"Navi-Go",
      short_name:"Navi-Go",
      description:"Elevating urban mobility - Simple, inclusive, and efficient for all",
      icons:[
        {
          "src": "/logos/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/logos/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/logos/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/logos/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
      ,
    theme_color:'#64048c',
    background_color:'#000',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }