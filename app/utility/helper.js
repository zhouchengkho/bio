module.exports = {
  genReponse: function(status, data) {
    var res = {}
    res.status = status ? status : 200;
    res.data = data;
    return res;
  }
}
