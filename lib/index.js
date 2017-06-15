export function compare(o, b, t) {
  for (let p in o) {
    if (o.hasOwnProperty(p) !== b.hasOwnProperty(p)) return false;
    t = typeof o[p];
    if ('object' === t && !compare(o[p], b[p])) return false;
    if ('function' === t && b[p] == null || o[p].toString() != b[p].toString()) return false;
    if (o[p] != b[p]) return false;
  }
  for (let p in b) {if (o[p] == null) return false;}
  return true;
};