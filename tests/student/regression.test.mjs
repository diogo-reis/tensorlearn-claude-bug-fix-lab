import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('viewer user-4 must not receive claim-B owned by user-42', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claimB], 'user-4', 'claim-B'), null);
});
test('a malformed (non-object) record cannot match and does not crash the lookup', () => {
  const claimA = { id: 'claim-A', ownerId: 'user-1', status: 'pending' };
  assert.equal(getClaim([null, claimA], 'user-1', 'claim-A'), claimA);
});
