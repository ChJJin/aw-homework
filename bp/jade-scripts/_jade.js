// Generated by LiveScript 1.2.0
(function(){
  var fs, View, Names, code;
  fs = require('fs');
  View = require('./_view').View;
  Names = require('./Names');
  module.exports = {
    getView: function(docName, viewName, templateName, templateType){
      return this.view = View.getView.apply(View, arguments);
    },
    setMainNav: function(templateNames){
      var i$, len$, name, results$ = [];
      if (typeof templateNames === 'string') {
        templateNames = templateNames.split(',');
      }
      for (i$ = 0, len$ = templateNames.length; i$ < len$; ++i$) {
        name = templateNames[i$];
        name = name.trim();
        results$.push(View.registry[name].isMainNav = true);
      }
      return results$;
    },
    value: function(attr, cited){
      var docName, cite;
      for (docName in cited) {
        cite = cited[docName];
        if (cite.attributes && in$(attr, cite.attributes)) {
          return "{{#with " + docName + "}} {{bs '" + attr + "'}} {{/with}}";
        }
      }
      return "{{bs '" + attr + "'}}";
    },
    getCitedDocName: function(attr, cited){
      var docName, cite;
      for (docName in cited) {
        cite = cited[docName];
        if (cite.attributes && in$(attr, cite.attributes)) {
          return docName;
        }
      }
    },
    getCitedDoc: function(attr, cited){
      var docName, cite;
      console.log("attr: " + attr + ", cited: ", cited);
      for (docName in cited) {
        cite = cited[docName];
        if (cite.attributes && in$(attr, cite.attributes)) {
          return docName;
        }
      }
      return null;
    },
    getRefName: function(ref){
      switch (ref) {
      case 'detail':
        return this.names.detailTemplateName;
      case 'list':
        return this.names.listTemplateName;
      default:
        return ref;
      }
    },
    getNames: function(docName){
      return this.names = new Names(docName);
    },
    saveView: function(){
      fs.writeFileSync('bp/main.ls', code + JSON.stringify(View.registry));
    }
  };
  code = ' \n# ********************************************************\n# *                                                      *\n# *        IT IS AUTO GENERATED DON\'T EDIT               *\n# *                                                      *\n# ********************************************************\n\n# if module?\n#   require! [fs, sugar, \'./Component\'] \n\n# BP ||= {}\n# BP.Component ||= Component\n\n# debugger\nBP.Component.create-components-from-jade-views jade-views = ';
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
