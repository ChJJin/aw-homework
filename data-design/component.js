// Generated by LiveScript 1.2.0
(function(){
  var components, links;
  components = {
    componentClassName: 'xxxx',
    assignment: {
      cited: {
        homework: [
          fields['_id'], {
            remoteForeignKey: 'assignment-id'
          }
        ]
      },
      additonalViews: {
        additonalAssignmentList: {
          type: 'list',
          templateName: 'additonal-assignment-list',
          addtionalAppearances: {
            approve: '/addtional-assignment-list/approve'
          },
          addtionalLinks: {
            goEnd: 'assignment.detail.update'
          },
          removedLinks: ['go-create', 'go-update', 'delete']
        }
      }
    },
    homework: {
      cited: {
        assignment: {
          fields: ['题目', '要求', '截止时间'],
          foreignKey: 'assignment-id'
        }
      }
    }
  };
links = {
  createHomework: {at: 'row', label: '写作业', 'to': 'homework.detail.create', guard: "not assignment.homework", icon: 'go-create'},
  updateHomework: {at: 'row', label: '写作业', 'to': 'homework.detail.update', guard: "assignment.homework", icon: 'go-update'} };
}).call(this);
