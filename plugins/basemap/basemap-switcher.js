window.plugins=window.plugins||{},window.plugins.basemapSwitcher=class{panel=null;translations={"en-CA":{basemapSwitcher:"Basemaps","basemap-transport-label":{name:"Transport with Labels",desc:""},"basemap-transport":{name:"Transport without labels",desc:""},"basemap-shaded":{name:"Shaded Relief",desc:""},"basemap-shaded-label":{name:"Shaded Relief with Labels",desc:""},layer:{type:"CBMT"}},"fr-CA":{basemapSwitcher:"Fond de carte","basemap-transport-label":{name:"Transport avec des étiquettes",desc:""},"basemap-transport":{name:"Transport sans étiquettes",desc:""},"basemap-shaded":{name:"Relief ombré",desc:""},"basemap-shaded-label":{name:"Relief ombré avec étiquettes",desc:""},layer:{type:"CBCT"}}};added=()=>{const{api:a,react:e,makeStyles:t,translate:s}=this,{mapId:r}=this.props,i=this.createElement,{useState:l,useEffect:n}=e,{useTranslation:p}=s,{language:o}=a.map(r),m=t((a=>({listContainer:{overflowY:"scroll",height:"600px"},card:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",transition:"0.3s",borderRadius:"5px","&:hover":{boxShadow:"0 8px 16px 0 rgba(0, 0, 0, 0.2)"},marginBottom:10,height:"120px",width:"100%",display:"block",position:"relative"},thumbnail:{borderRadius:"5px",position:"absolute",height:"100%",width:"100%",opacity:.8},container:{background:"rgba(0,0,0,.68)",color:"#fff",overflow:"hidden",textOverflow:"ellipsis",height:"40px",display:"flex",alignItems:"center",padding:"0 5px",boxSizing:"border-box",position:"absolute",left:0,bottom:0,width:"inherit"}}))),d={tooltip:this.translations[o].basemapSwitcher,icon:'<i class="material-icons">map</i>'},c={title:this.translations[o].basemapSwitcher,icon:'<i class="material-icons">map</i>',content:()=>{const[e,t]=l([]),s=m(),{t:o}=p(),d=(t,s)=>{if(0===e.filter((a=>a.id===t)).length){const e={...s,id:t};a.map(r).createBasemap(e)}},c=e=>{a.map(r).setBasemap(e)};return n((()=>{const{basemaps:e}=a.map(r);t(e),d("transportWithLabels",{name:o("basemap-transport-label.name"),type:"transport_label",description:"This Canadian basemap provides geographic context with bilingual labels and an emphasis on transportation networks. From Natural Resources Canada.",descSummary:"",altText:o("basemap-transport-label.name"),thumbnailUrl:"",layers:[{id:"transport",type:"transport",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg",opacity:1},{id:"label",type:"label",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/xxxx_TXT_3978/MapServer/WMTS/tile/1.0.0/xxxx_TXT_3978/default/default028mm/{z}/{y}/{x}.jpg".replaceAll("xxxx",o("layer.type")),opacity:1}],attribution:"test attribution",zoomLevels:{min:0,max:0}}),d("transportWithNoLabels",{name:o("basemap-transport.name"),type:"transport",description:"This Canadian basemap provides geographic context that emphasis on transportation networks. From Natural Resources Canada.",descSummary:"",altText:o("basemap-transport.name"),thumbnailUrl:"",layers:[{id:"transport",type:"transport",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg",opacity:1}],attribution:"test attribution",zoomLevels:{min:0,max:0}}),d("shadedRelief",{name:o("basemap-shaded.name"),type:"shaded",description:'":"This Canadian base map provides geographic context using shaded relief. From Natural Resources Canada.',descSummary:"",altText:o("basemap-shaded.name"),thumbnailUrl:"",layers:[{id:"shaded",type:"shaded",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg",opacity:1}],attribution:"test attribution",zoomLevels:{min:0,max:0}}),d("shadedLabel",{name:o("basemap-shaded-label.name"),type:"shaded_label",description:'":"This Canadian base map provides geographic context using shaded relief with labels. From Natural Resources Canada.',descSummary:"",altText:o("basemap-shaded-label.name"),thumbnailUrl:"",layers:[{id:"shaded",type:"shaded",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg",opacity:1},{id:"label",type:"label",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/xxxx_TXT_3978/MapServer/WMTS/tile/1.0.0/xxxx_TXT_3978/default/default028mm/{z}/{y}/{x}.jpg".replaceAll("xxxx",o("layer.type")),opacity:1}],attribution:"test attribution",zoomLevels:{min:0,max:0}})}),[]),i("div",{className:s.listContainer},e.map((a=>i("div",{role:"button",tabIndex:"0",className:s.card,onClick:()=>c(a.id),onKeyPress:()=>c(a.id),key:a.id},"string"==typeof a.thumbnailUrl&&i("img",{src:a.thumbnailUrl,alt:a.altText,className:s.thumbnail}),Array.isArray(a.thumbnailUrl)&&a.thumbnailUrl.map(((e,t)=>i("img",{key:t,src:e,alt:a.altText,className:s.thumbnail}))),i("div",{className:s.container},a.name)))))},width:200};this.panel=a.map(r).createAppbarPanel(d,c,null)};removed=()=>{const{mapId:a}=this.props;this.api.map(a).removeAppbarPanel(this.panel.id)}};