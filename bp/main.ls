 
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
BP.Component.create-components-from-jade-views jade-views = {"assignments-list":{"docName":"assignment","name":"assignments-list","templateName":"assignments-list","type":"list","isMainNav":true,"referredViews":{},"cited":{"homework":{"query":"{assignmentId: doc._id}"}},"additionalLinks":[{"label":"开始写作业","path":"create-homework","to":"homework.detail.create","guard":"homework._id","icon":"go-create"},{"label":"更新作业","path":"update-homework","to":"homework.detail.update","guard":"homework._id","icon":"go-update"}]},"assignment":{"docName":"assignment","name":"assignment","templateName":"assignment","type":"detail","isMainNav":false,"referredViews":{},"cited":{"homework":{"query":"{assignmentId: doc._id}"}},"additionalLinks":[]},"homeworks-list":{"docName":"homework","name":"homeworks-list","templateName":"homeworks-list","type":"list","isMainNav":true,"referredViews":{},"cited":{"assignment":{"query":"{_id: doc.assignmentId}","attributes":["题目","要求","截止时间"]}},"additionalLinks":[]},"homework":{"docName":"homework","name":"homework","templateName":"homework","type":"detail","isMainNav":false,"referredViews":{},"cited":{"assignment":{"query":"{_id: doc.assignmentId}","attributes":["题目","要求","截止时间"]}},"additionalLinks":[]}}