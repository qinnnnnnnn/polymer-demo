Polymer('greeting-tag', {
  ready: function() {
    this.salutations = [
      {what: 'Hello', who: 'World'},
      {what: 'Goodbye', who: 'DOM APIs'},
      {what: 'Hello', who: 'Declarative'},
      {what: 'Goodbye', who: 'Imperative'}
    ];
    this.alternates = ['Hello', 'Hola', 'Howdy'];
    this.current = 0;
  },     
  updateModel: function() {
    this.current = (this.current + 1) % this.alternates.length;
    this.salutations[0].what = this.alternates[this.current];
  },
  selectStory: function(e, detail, sender) {
    var story = e.target.templateInstance.model.s;
    console.log("Clicked " + story.headline);
    this.loadStory(story.id); // 访问数据模型中未被渲染的数据
  }
});