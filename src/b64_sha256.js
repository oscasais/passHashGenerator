import { rstr2b64, rstr_sha256, str2rstr_utf8 } from './sha256';
export default function b64_sha256(s) { return rstr2b64(rstr_sha256(str2rstr_utf8(s))); }