describe('Google',function() {
  it('should be called Google',function() {
    browser.url('http://www.google.com');
    browser.getTitle().should.be.equal('Google');
  });
});
