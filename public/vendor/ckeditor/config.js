/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */


CKEDITOR.editorConfig = function(config) {
   // Define changes to default configuration here. For example:
   // config.language = 'fr';
   // config.uiColor = '#AADC6E';
   config.width = '100%'; 

   config.toolbarGroups = [
      { name: "clipboard", groups: ["undo", "clipboard"] },
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      { name: "colors", groups: ["colors"] },
      {
         name: "editing",
         groups: ["find", "selection", "spellchecker", "editing"]
      },
      { name: "forms", groups: ["forms"] },
      { name: "document", groups: ["mode", "document", "doctools"] },
      "/",
      { name: "styles", groups: ["styles"] },
      { name: "links", groups: ["links"] },
      "/",
      {
         name: "paragraph",
         groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
      },
      { name: "insert", groups: ["insert"] },
      { name: "tools", groups: ["tools"] },
      { name: "others", groups: ["others"] },
      { name: "about", groups: ["about"] }
   ];

   config.removeButtons =
      "Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Replace,Save,NewPage,Preview,Print,Templates,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,Smiley,Iframe,About,SelectAll,Scayt,Find,Cut,Paste,PasteText,Copy,PasteFromWord";
  
  // Upload image
  config.filebrowserImageBrowseUrl = '/file-manager/ckeditor';
};
