describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #optimize method', function() {
    expect(plugin.optimize).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = "var test = 'ok'; console.log();";
    var expected = "var test = 'ok'; ";

    plugin.optimize(content, '', function(error, data) {
        expect(plugin.optimize).to.be.an.instanceof(Function);
      expect(error).not.to.be.ok;
      expect(data).to.equal(expected);
      done();
    });
  });
});