(()=>{"use strict";const e=window.React,n=window.wp.element,o=window.wp.components,t=({apps:n,categoryName:t,categoryDescription:a})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"omnisend-spacing-mb-8"},t&&(0,e.createElement)("div",{className:"omnisend-wp-h2"},t),a&&(0,e.createElement)("div",null,a)),(0,e.createElement)(o.Flex,{gap:6,wrap:!0,justify:"start",className:"omnisend-apps-list-container"},n&&n.map((n=>(0,e.createElement)(o.Card,{key:n.slug,size:"medium",isBorderless:!0,backgroundSize:50,className:"omnisend-apps-list-card"},(0,e.createElement)(o.Flex,{direction:"column"},(0,e.createElement)(o.CardHeader,{isBorderless:"true"},(0,e.createElement)(o.Flex,{direction:"column"},(0,e.createElement)("img",{alt:n.name,className:"omnisend-apps-list-card-logo",src:n.logo}),(0,e.createElement)("div",{className:"omnisend-wp-h4"},n.name),(0,e.createElement)("div",{className:"omnisend-wp-text-mini"},"by ",n.created_by))),(0,e.createElement)(o.CardBody,{className:"omnisend-apps-list-card-description-container"},(0,e.createElement)("div",{className:"omnisend-wp-text-body"},n.description)),(0,e.createElement)(o.CardFooter,{isBorderless:!0},(0,e.createElement)(o.Button,{variant:"primary",onClick:()=>{return e=n.url,void window.open(e,"_blank").focus();var e}},"Add this add-on")))))))),a=()=>(0,e.createElement)(o.Card,{isBorderless:!0,size:"large"},(0,e.createElement)(o.CardBody,{isBorderless:!0},(0,e.createElement)(o.Flex,{direction:"column"},(0,e.createElement)("div",{className:"omnisend-wp-h1"},"Omnisend Add-Ons"),(0,e.createElement)("div",{className:"omnisend-apps-list-notice-text omnisend-wp-text-body"},"You can expand the possibilities of Omnisend by integrating it with additional add-ons.")))),r={categories:[{id:"form",name:"Form add-ons",description:"Sends form data and contact information automatically to Omnisend"},{id:"other",name:"Other add-ons",description:""}],plugins:[{slug:"omnisend-for-gravity-forms-add-on",name:"Omnisend for Gravity Forms Add-On",created_by:"Omnisend",category_id:"form",description:"Sends form data and contact information to Omnisend automatically from Gravity Forms",logo:"https://appmarket-media.omnisend.com/gravity_forms/gravity_forms_logo.svg",url:"https://wordpress.org/plugins/omnisend-for-gravity-forms-add-on/"},{slug:"omnisend-for-contact-form-7",name:"Omnisend for Contact Form 7 Add-On",created_by:"Omnisend",category_id:"form",description:"Sends form data and contact information to Omnisend automatically from Contact Form 7",logo:"https://appmarket-media.omnisend.com/contact_form_7/contact_form_7_logo.svg",url:"https://wordpress.org/plugins/omnisend-for-contact-form-7/"},{slug:"omnisend-for-ninja-forms-add-on",name:"Omnisend for Ninja Forms Add-On",created_by:"Omnisend",category_id:"form",description:"Sends form data and contact information to Omnisend automatically from Ninja Forms",logo:"https://appmarket-media.omnisend.com/ninja_forms/ninja_forms_logo.png",url:"https://wordpress.org/plugins/omnisend-for-ninja-forms-add-on/"},{slug:"omnisend-for-formidable-forms-add-on",name:"Omnisend for Formidable Forms Add-On",created_by:"Omnisend",category_id:"form",description:"Sends form data and contact information to Omnisend automatically from Formidable Forms",logo:"https://appmarket-media.omnisend.com/formidable_forms/formidable_forms_logo.svg",url:"https://wordpress.org/plugins/omnisend-for-formidable-forms-add-on/"},{slug:"wp-fusion-lite",name:"WP Fusion Lite – Marketing Automation and CRM Integration for WordPress",created_by:"Very Good Plugins",category_id:"other",description:"WP Fusion Lite synchronizes your WordPress users with contact records in your CRM or marketing automation system.",logo:"https://appmarket-media.omnisend.com/wp_fusion/wp_fusion_logo.svg",url:"https://wordpress.org/plugins/wp-fusion-lite/"},{slug:"ws-form",name:"WS Form PRO",created_by:"WS Form",category_id:"form",description:"Sends form data and contact information to Omnisend automatically from WS Form",logo:"https://appmarket-media.omnisend.com/ws_form/ws_form_logo.png",url:"https://wsform.com/knowledgebase/omnisend/"}]};(0,n.render)((0,e.createElement)((()=>{const[s,i]=(0,n.useState)([]),[m,d]=(0,n.useState)([]),[l,c]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{const e=await fetch("https://omnisend.github.io/wp-omnisend/plugins.json");return e.ok?e.json():r})().then((e=>{i(e.plugins),d(e.categories),c(!1)})).catch((()=>{console.error("Failed to load apps")}))}),[]),l?(0,e.createElement)(o.Spinner,null):s.length||m.length?(0,e.createElement)(o.Flex,{className:"omnisend-page-layout",justify:"center"},(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"omnisend-spacing-mb-10"},(0,e.createElement)(a,null)),m.map((n=>(0,e.createElement)("div",{key:n.id},(0,e.createElement)("div",{className:"omnisend-spacing-mb-15"},(0,e.createElement)(t,{apps:s.filter((e=>e.category_id===n.id)),categoryName:n.name,categoryDescription:n.description}))))))):(0,e.createElement)(e.Fragment,null,"Failed to load")}),null),document.getElementById("omnisend-app-market"))})();