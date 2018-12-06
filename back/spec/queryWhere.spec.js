const assert = require('assert');
const queryWhere = require('../helpers/queryWhere');

describe("test queryWhere", function () {

  it("test with {userId:5,order:4}", function () {
    assert.strictEqual(
      queryWhere({ userId: 5, order: 4 }),
      'userId = 5 AND order = 4'
    )
  });
  it("test with {projectType:'mission'}", function () {
    assert.strictEqual(
      queryWhere({ userId: 5, projectType: 'mission' }),
      "userId = 5 AND projectType = 'mission'"
    )
  });
});


