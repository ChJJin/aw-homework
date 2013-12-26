# !!! 注意，此文件不是运行时代码，是开发时代码。
# 给Jade用，根据template中的定义，动态编译出Views，以便BP Router加载。

require! [fs, './_view'.View, './Names']

module.exports =

  get-view: (doc-name, view-name, template-name, template-type)->
    @view = View.get-view.apply View, &

  set-main-nav: (template-names)->
    template-names = template-names.split ',' if typeof template-names is 'string'
    for name in template-names
      name = name.trim!
      View.registry[name].is-main-nav = true

  value: (attr, cited)->
    for doc-name, cite of cited
      if cite.attributes and attr in cite.attributes 
        return "{{\#with #doc-name}} {{bs '#attr'}} {{/with}}"
    "{{bs '#attr'}}"

  get-cited-doc-name: (attr, cited)->
    for doc-name, cite of cited
      return doc-name if cite.attributes and attr in cite.attributes 

  get-cited-doc: (attr, cited)->
    console.log "attr: #attr, cited: ", cited
    for doc-name, cite of cited
      return doc-name if cite.attributes and attr in cite.attributes 
    null

  # set-custom-class-name: (class-name)-> @view.custom-class = class-name

  get-ref-name: (ref)->
    switch ref
    case 'detail' then @names.detail-template-name
    case 'list' then @names.list-template-name
    default ref

  get-names: (doc-name)-> 
    @names = new Names doc-name 

  save-view: !->
    fs.write-file-sync 'bp/main.ls', code + (JSON.stringify View.registry)



code = ''' 
# ********************************************************
# *                                                      *
# *        IT IS AUTO GENERATED DON'T EDIT               *
# *                                                      *
# ********************************************************

# if module?
#   require! [fs, sugar, './Component'] 

# BP ||= {}
# BP.Component ||= Component

# debugger
BP.Component.create-components-from-jade-views jade-views = 
'''



